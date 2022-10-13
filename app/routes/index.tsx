import {useLoaderData} from "@remix-run/react";
import {json, LoaderFunction} from "@remix-run/server-runtime";
import {client} from "~/client.server";
import ArticlePreview from "~/components/article-preview";
import Hero from "~/components/hero";
import {TypeAuthor, TypePostPreview} from "../../types/contentful-graphql-types";

type LoaderData = { posts: TypePostPreview[], author: TypeAuthor };

export const loader: LoaderFunction = async ({}) => {
    return json({
        posts: await client.getPostCollection(),
        author: await client.getAuthor("15jwOBqpxqSAOy2eOO4S0m")
    })
}

export default function Index() {
    const {author, posts} = useLoaderData<LoaderData>();

    return (
        <>
            <Hero
                image={author.image}
                title={author.name}
                content={author.shortBio}
            />
            <ArticlePreview posts={posts}/>
        </>
    )
}
