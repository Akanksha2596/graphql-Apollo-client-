import { ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
    // uri: "https://countries.trevorblades.com",
    uri: "https://graphqlzero.almansi.me/api",
    cache: new InMemoryCache(),   
})
export default client;