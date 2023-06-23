import {Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration} from "@remix-run/react";
import {MetaFunction} from "@remix-run/server-runtime";
import React from "react";
import Footer from "~/components/footer";
import Navigation from "~/components/navigation";

import variablesStyles from "~/styles/variables.css";
import globalStyles from "~/styles/global.css";
import footerStyles from "~/styles/modules/footer.css";
import heroStyles from "~/styles/modules/hero.css";
import navigationStyles from "~/styles/modules/navigation.css";
import tagsStyles from "~/styles/modules/tags.css";
import articlePreviewStyles from "~/styles/modules/article-preview.css";

export const links = () => [
    {rel: "stylesheet", href: variablesStyles},
    {rel: "stylesheet", href: globalStyles},
    {rel: "stylesheet", href: navigationStyles},
    {rel: "stylesheet", href: footerStyles},
    {rel: "stylesheet", href: heroStyles},
    {rel: "stylesheet", href: tagsStyles},
    {rel: "stylesheet", href: articlePreviewStyles},
]

export const meta: MetaFunction = ({parentsData, params}) => {

    const description = "Remix starter for a Contentful blog (template) project"
    const content = "default description"
    const keywords = "Contentful, Blog, Starter, Remix"
    const title = "Contentful Remix Blog Starter"

    return {
        title,
        description,
        keywords,

        "og:title": title,
        "og:description": description,
        "og:type": `website`,

        "twitter:title": title,
        "twitter:description": description,
    }
}

export default function App() {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <Meta/>
            <Links/>
        </head>
        <body>
        <Navigation/>
        <main><Outlet/></main>
        <Footer/>
        <ScrollRestoration/>
        <Scripts/>
        {process.env.NODE_ENV === "development" && <LiveReload/>}
        </body>
        </html>
    );
}
