import {useLoaderData} from "@remix-run/react";
import * as React from "react";
import {json, LoaderFunction} from "@remix-run/server-runtime";
import {client} from "~/client.server";
import ArticlePreview from "~/components/article-preview";
import Hero from "~/components/hero";
import {TypePostPreview} from "../../types/contentful-graphql-types";

type LoaderData = { posts: TypePostPreview[] };

export const loader: LoaderFunction = async ({}) => {
    return json({
        posts: await client.getPostCollection(),
    })
}

export default function Blog() {
    const {posts} = useLoaderData<LoaderData>();
    return (
        <>
            <Hero title="Blog" />
            <ArticlePreview posts={posts} />
        </>
    )
}
