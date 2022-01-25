import React from "react";
import type {MetaFunction} from "remix";
import {Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration} from "remix";
import Footer from "~/components/footer";
import Navigation from "~/components/navigation";

import variablesStyles from "~/styles/variables.css";
import globalStyles from "~/styles/global.css";
import footerStyles from "~/styles/modules/footer.module.css";
import heroStyles from "~/styles/modules/hero.module.css";
import navigationStyles from "~/styles/modules/navigation.module.css";
import tagsStyles from "~/styles/modules/tags.module.css";
import articlePreviewStyles from "~/styles/modules/article-preview.module.css";

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

    const description = "default description"
    const content = "default description"
    const image = ""
    const title = ""

    return {
        titel: title,
        name: description,
        "image": image,
        "og:title": title,
        "og:description": description,
        "og:type": `website`,
        "og:image": image,
        "twitter:card": `summary_large_image`,
        "twitter:creator": content,
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
