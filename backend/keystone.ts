import { ProductImage } from './schemas/ProductImage';
import { Product } from './schemas/Products';
import { User } from './schemas/User';
import {createAuth } from '@keystone-next/auth'
import 'dotenv/config'
import {config, createSchema} from '@keystone-next/keystone/schema'
import { statelessSessions, withItemData } from '@keystone-next/keystone/session';

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/sell-stuff'


const { withAuth} = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password']
  }
})
export default withAuth(config({
  server:{
    cors:{
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    }
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    // TODO: add data seeding
  },
  lists: createSchema({
User,
Product,
ProductImage
  }),
  ui: {
    isAccessAllowed: ({session}) => {
    
      return session?.data
    }
  },
  session: withItemData(
    statelessSessions( {
    secret: process.env.COOKIE_SECRET,
maxAge: 60 * 60 * 24 * 364,
  }),
  {User: `id`})

}))