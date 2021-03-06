import React from 'react'
import { hydrate } from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { language } from './ClientResolvers'
import { HttpLink } from 'apollo-link-http'
import { HelmetProvider } from 'react-helmet-async'
import { LanguageSwitching } from './LanguageSwitching'
import App from './App'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'

const typeDefs = gql`
  extend type Query {
    language: String
  }
`

const getLanguage = () => {
  if (navigator.language.match(/^en/)) return 'en'
  if (navigator.language.match(/^fr/)) return 'fr'
  if (navigator.languages.filter(l => l.match(/^en/)).length > 0) return 'en'
  if (navigator.languages.filter(l => l.match(/^fr/)).length > 0) return 'fr'
}

const cache = new InMemoryCache()
// Add defaults for form fields
cache.writeData({
  data: {
    language: getLanguage(),
  },
})

const client = new ApolloClient({
  link: new HttpLink(),
  cache,
  typeDefs,
  resolvers: {
    Query: { language },
  },
})

hydrate(
  <HelmetProvider>
    <ApolloProvider client={client}>
      <LanguageSwitching>
        <App />
      </LanguageSwitching>
    </ApolloProvider>
  </HelmetProvider>,
  document.getElementById('root'),
)

if (module.hot) {
  module.hot.accept()
}
