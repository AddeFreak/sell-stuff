import { OrderCreateInput } from './../.keystone/schema-types';
import { KeystoneContext, SessionStore } from '@keystone-next/types';

async function checkout(
	root: any,
	{ token }: { token: string },
	context: KeystoneContext
): Promise<OrderCreateInput> {}

export default checkout;
