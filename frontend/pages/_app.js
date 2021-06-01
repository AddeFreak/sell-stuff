import Pages from '../components/Pages';
import { ApolloProvider } from '@apollo/client';
import withData from '../lib/withData'
import { CartStateProvider } from '../lib/cartState';
function MyApp({ Component, pageProps, apollo }) {

  return (
    <ApolloProvider client={apollo}>
      <CartStateProvider>
    <Pages>
      <Component {...pageProps} />
        </Pages>
      </CartStateProvider>
    </ApolloProvider>
  );
}
MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(MyApp);