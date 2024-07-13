import { Client, Graphql } from "appwrite";

// initialize SDK
const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("656af734352918d1a3cd"); // Your project ID

export const graphql = new Graphql(client);