import { permissionsList } from './schemas/fields';
import { Role } from './schemas/Role';
import { OrderItem } from './schemas/OrderItem';
import { CartItem } from './schemas/CartItem';
import { ProductImage } from './schemas/ProductImage';
import { Product } from './schemas/Product';
import { User } from './schemas/User';
import { Order } from './schemas/Order';
import { createAuth } from '@keystone-next/auth';
import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import {
	statelessSessions,
	withItemData,
} from '@keystone-next/keystone/session';
import { extendGraphqlSchema } from './mutations.ts';
import { sendPasswordResetEmail } from './.keystone/lib/mail';

const databaseURL =
	process.env.DATABASE_URL || 'mongodb://localhost/sell-stuff';

const { withAuth } = createAuth({
	listKey: 'User',
	identityField: 'email',
	secretField: 'password',
	initFirstItem: {
		fields: ['name', 'email', 'password'],
	},
	passwordResetLink: {
		async sendToken(args) {
			await sendPasswordResetEmail(args.token, args.identity);
		},
	},
});
export default withAuth(
	config({
		server: {
			cors: {
				origin: [process.env.FRONTEND_URL],
				credentials: true,
			},
		},
		db: {
			adapter: 'mongoose',
			url: databaseURL,
		},
		lists: createSchema({
			User,
			Product,
			ProductImage,
			CartItem,
			OrderItem,
			Order,
			Role,
		}),
		extendGraphqlSchema: extendGraphqlSchema,
		ui: {
			isAccessAllowed: ({ session }) => {
				return !!session?.data;
			},
		},
		session: withItemData(
			statelessSessions({
				secret: process.env.COOKIE_SECRET,
				maxAge: 60 * 60 * 24 * 364,
			}),
			{ User: `id name email role { ${permissionsList.join(' ')}}` }
		),
	})
);
