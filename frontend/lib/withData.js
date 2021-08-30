import withApollo from 'next-with-apollo';
import {endpoint} from '../config'
import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { getDataFromTree } from '@apollo/client/react/ssr'
import { onError } from '@apollo/link-error';
import paginationField from './paginationField';

function createClient({ initialState, headers }){
    return new ApolloClient({
        connectToDevTools: true,
        link: ApolloLink.from([
            onError(({ graphQLErrors, networkError }) => {
                if (graphQLErrors)
                    graphQLErrors.map(({ message, locations, path }) =>
                        console.log(
                            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
                        )
                    )
                if (networkError)
                    console.log(`[Network error]: ${networkError}`)
            }),
            createUploadLink({
                uri:
                    process.env.NODE_ENV === 'development'
                        ? endpoint
                        : prodEndpoint,
                fetchOptions: {
                    credentials: 'include',
                },
                headers,
            }),
        ]),
        cache: new InMemoryCache({
            typePolicies: {
                Query: {
                    fields: {
                        allProducts: paginationField(),
                    },
                },
            },
        }).restore(initialState || {}),
    }) }
export default withApollo(createClient, {getDataFromTree})
