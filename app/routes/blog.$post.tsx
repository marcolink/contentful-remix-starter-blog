import type {Document} from "@contentful/rich-text-types"
import {useLoaderData} from "@remix-run/react";
import {json, LinksFunction, LoaderFunction, MetaFunction} from "@remix-run/server-runtime";
import * as React from "react";
import {client} from "~/client.server";
import Hero from "~/components/hero";
import Tags from "~/components/tags";
import {readingTime} from "~/utils/raeading-time";
import {richTextFromMarkdown} from "~/utils/rich-text-from-markdown";
import {toReadableDate} from "~/utils/to-readable-date";
import {useReactComponentFromDocument} from "~/utils/use-react-component-from-document";
import {TypePostDetail} from "../../types/contentful-graphql-types";
import blogPostStyles from "../styles/blog-post.page.css"

export const links: LinksFunction = () => [
    {rel: "stylesheet", href: blogPostStyles},
]

type LoaderData = { post: TypePostDetail, body: Document, timeToRead: number };

export const loader: LoaderFunction = async ({params}) => {
    const post = await client.getPost(params.post!)
    const bodyString = post.body || "";
    const body = await richTextFromMarkdown(post.body || "")
    return json({post, body, timeToRead: Math.ceil(readingTime(bodyString).minutes)});
};

export const meta: MetaFunction = ({parentsData, params, data, location}) => {
    const post: TypePostDetail = data.post
    const description = post.description
    const image = post.heroImage.url
    const title = "Contentful Remix Blog Starter - " + post.title

    return {
        title: title,
        "image": image,
        "og:title": title,
        "og:description": description,
        "og:image": image,
        "twitter:title": title,
        "twitter:description": description,
    }
}

export default function BlogPost() {
    const {post, body, timeToRead} = useLoaderData<LoaderData>();
    const document = useReactComponentFromDocument(body)

    return (
        <article className={"blog-post"}>
            <Hero
                image={post.heroImage}
                title={post.title}
                content={post.description}
            />
            <div className={"container"}>
            <span className={"meta"}>
            {post.author?.name} &middot;{' '}
                <time dateTime={post.publishDate}>{toReadableDate(post.publishDate)}</time> –{' '}
                {timeToRead} minute read
          </span>
                <div className={"article"}>
                    <div className={"body"}>{document}</div>
                    <Tags tags={post.tags || []}/>
                </div>
            </div>
        </article>
    )
}
