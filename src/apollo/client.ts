import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.staging.thegraph.com/subgraphs/name/macalinao/ubeswap2',
  }),
  cache: new InMemoryCache(),
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.staging.thegraph.com/index-node/graphql',
  }),
  cache: new InMemoryCache(),
})

export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.staging.thegraph.com/subgraphs/name/macalinao/blocks-celo',
  }),
  cache: new InMemoryCache(),
})
