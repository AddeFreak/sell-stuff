import { rules } from './../access';
import { ProductImage } from './ProductImage';
import { integer, select, text, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { isSignedIn } from '../access';

export const CartItem = list({
	access: {
		create: isSignedIn,
		read: rules.canOrder,
		update: rules.canOrder,
		delete: rules.canOrder,
	},
	fields: {
		quantity: integer({
			defaultValue: 1,
			isRequired: true,
		}),
		product: relationship({ ref: 'Product' }),
		user: relationship({ ref: 'User.cart' }),
	},
});
