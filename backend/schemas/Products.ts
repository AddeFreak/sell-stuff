import { ProductImage } from './ProductImage';
import { integer, select, text, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Product = list({
	fields: {
		name: text({ isRequired: true }),
		description: text({
			ui: {
				displayMode: 'textarea',
			},
		}),
		status: select({
			options: [
				{ label: 'Draft', value: 'DRAFT' },
				{ label: 'Available', value: 'AVAILABLE' },
				{ label: 'Unavailable', value: 'UNAVAILABLE' },
			],
			defaultValue: 'AVAILABLE',
			ui: {
				displayMode: 'segmented-control',
				createView: { fieldMode: 'hidden' },
			},
		}),
		price: integer(),
		picture: relationship({
			ref: 'ProductImage.product',
			ui: {
				inlineCreate: { fields: ['image', 'altText'] },
				cardFields: ['image', 'altText'],
				displayMode: 'cards',
				inlineEdit: { fields: ['image', 'altText'] },
			},
		}),
		user: relationship({
			ref: 'User.products',
			defaultValue: ({ context }) => ({
				connect: { id: context.session.itemId },
			}),
		}),
	},
});
