import { permissionsList } from './schemas/fields';
import { ListAccessArgs } from './types';

export function isSignedIn({ session }: ListAccessArgs) {
	return !!session;
}

const generatedPermissions = Object.fromEntries(
	permissionsList.map((permission) => [
		permission,
		function ({ session }: ListAccessArgs) {
			return !!session?.data.role?.[permission];
		},
	])
);
export const permissions = {
	canManageProducts({ session }) {
		return session?.data.role?.canManageProducts;
	},
	canSeeOtherUsers({ session }) {
		return session?.data.role?.canManageProducts;
	},
};
