import {ApolloClient, gql, InMemoryCache} from '@apollo/client';
import {TypeAuthor, TypePostDetail, TypePostPreview} from "../types/contentful-graphql-types";

// @ts-ignore
const SPACE = process.env.CONTENTFUL_SPACE;
// @ts-ignore
const TOKEN = process.env.CONTENTFUL_CDA_TOKEN;

const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    uri: `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/master`,
    headers: {
        Authorization: `Bearer ${TOKEN}`
    }
});

async function getAuthor(id: string): Promise<TypeAuthor> {
    return (await apolloClient.query({
        query:
            gql`query Author {
                person(id:"${id}") {
                    name
                    title
                    shortBio
                    image {
                        width
                        height
                        title
                        url
                        contentType
                    }
                }
            }`
    })).data.person;
}

async function getPostCollection(): Promise<TypePostPreview[]> {
    return (await apolloClient.query({
        query: gql`
          query {
            blogPostCollection {
              items {
                sys{id}
                slug
                title
                description
                heroImage {
                    title
                      url 
                      contentType
                }
                publishDate
                tags
              }
            }
          }`
    })).data.blogPostCollection.items
}

async function getPost(slug: string): Promise<TypePostDetail> {
    return (await apolloClient.query({
        query: gql`
            query {
              blogPostCollection(limit: 1, where: { slug: "${slug}" }) {
                items {
                  slug
                title
                description
                heroImage  {
                  title
                  url 
                  width
                  height
                  contentType
                }
                publishDate
                tags
                body
                author {
                    name
                }
                }
              }
            }
        `
    })).data.blogPostCollection.items[0]
}

export const client = {getAuthor, getPostCollection, getPost}
