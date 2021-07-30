import { rules } from './../access';
import { ProductImage } from './ProductImage';
import { integer, select, text, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { isSignedIn } from '../access';

export const Order = list({
	access: {
		create: isSignedIn,
		read: rules.canOrder,
		update: () => false,
		delete: () => false,
	},
	fields: {
		total: integer(),
		items: relationship({ ref: 'OrderItem.order', many: true }),
		user: relationship({ ref: 'User.orders' }),
		charge: text(),
	},
});
