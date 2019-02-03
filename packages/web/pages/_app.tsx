import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";

import withApolloClient from "../lib/with-apollo-client";

import { theme, GlobalStyle, ThemeProvider } from "@gql-server-boilerplate/ui";

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props as any;

    return (
      <Container>
        <GlobalStyle />

        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
