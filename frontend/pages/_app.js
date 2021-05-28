import Pages from '../components/Pages';
import { ApolloProvider } from '@apollo/client';
import withData from '../lib/withData'
function MyApp({ Component, pageProps, apollo }) {

  return (
    <ApolloProvider client={apollo}>
    <Pages>
      <Component {...pageProps} />
    </Pages>
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