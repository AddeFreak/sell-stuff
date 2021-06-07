import { text, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { cloudinaryImage } from '@keystone-next/cloudinary';
import 'dotenv/config';

export const cloudinary = {
	cloudName: process.env.CLOUDINARY_CLOUD_NAME,
	apiKey: process.env.CLOUDINARY_KEY,
	apiSecret: process.env.CLOUDINARY_SECRET,
	folder: 'sellstuff',
};
export const ProductImage = list({
	fields: {
		image: cloudinaryImage({
			cloudinary,
		}),
		altText: text(),
		product: relationship({ ref: 'Product.picture' }),
	},
});
