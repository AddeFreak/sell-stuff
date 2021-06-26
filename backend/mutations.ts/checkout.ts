import {
	OrderCreateInput,
	CartItemCreateInput,
} from './../.keystone/schema-types';
import { KeystoneContext, SessionStore } from '@keystone-next/types';
import stripeConfig from '../.keystone/lib/stripe';

async function checkout(
	root: any,
	{ token }: { token: string },
	context: KeystoneContext
): Promise<OrderCreateInput> {
	const userId = context.session.itemId;
	if (!userId) {
		throw new Error('You must be signed in to create an order.');
	}
	const user = await context.lists.User.findOne({
		where: { id: userId },
		resolveFields: `
    id
    name
    email
    cart {
      id
      quantity
      product {
        name
        price
        description
        id
        picture {
          id
          image {
            id
            publicUrlTransformed
          }
        }
      }

    } 
    `,
	});
	console.dir(user, { depth: null });

	const cartItems = user.cart.filter((cartItem) => cartItem.product);
	const amount = cartItems.reduce(function (
		tally: number,
		cartItem: CartItemCreateInput
	) {
		return tally + cartItem.quantity * cartItem.product.price;
	},
	0);
	const charge = await stripeConfig.paymentIntents
		.create({
			amount,
			currency: 'SEK',
			confirm: true,
			payment_method: token,
		})
		.catch((err) => {
			console.log(err);
			throw new Error(err.message);
		});
	console.log(charge);

	const orderItems = cartItems.map((cartItem) => {
		const orderItem = {
			name: cartItem.product.name,
			description: cartItem.product.description,
			price: cartItem.product.price,
			quantity: cartItem.quantity,
			picture: { connect: { id: cartItem.product.picture.id } },
		};
		return orderItem;
	});
	const order = await context.lists.Order.createOne({
		data: {
			total: charge.amount,
			charge: charge.id,
			items: { create: orderItems },
			user: { connect: { id: userId } },
		},
	});
	const cartItemIds = user.cart.map((cartItem) => cartItem.id);
	await context.lists.CartItem.deleteMany({
		ids: cartItemIds,
	});
	return order;
}

export default checkout;
