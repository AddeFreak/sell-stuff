import { rules } from './../access';
import { ProductImage } from './ProductImage';
import { integer, select, text, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { isSignedIn } from '../access';

export const OrderItem = list({
	access: {
		create: isSignedIn,
		read: rules.canManageOrderItems,
		update: () => false,
		delete: () => false,
	},
	fields: {
		name: text({ isRequired: true }),
		description: text({
			ui: {
				displayMode: 'textarea',
			},
		}),
		price: integer(),
		quantity: integer(),
		order: relationship({ ref: 'Order.items' }),
		picture: relationship({
			ref: 'ProductImage',
			ui: {
				inlineCreate: { fields: ['image', 'altText'] },
				cardFields: ['image', 'altText'],
				displayMode: 'cards',
				inlineEdit: { fields: ['image', 'altText'] },
			},
		}),
		/* 	user: relationship({
			ref: 'User.products',
			defaultValue: ({ context }) => ({
				connect: { id: context.session.itemId },
			}),
		}), */
	},
});
