import React from 'react'
import {Link} from 'remix'
import {ContentfulImage} from "~/components/contentful-image";
import {CssModuleWrapper} from "~/components/css-module-wrapper";
import {toReadableDate} from "~/utils/to-readable-date";

import Container from './container'
import Tags from './tags'

const ArticlePreview = ({posts}) => {
    if (!posts) return null
    if (!Array.isArray(posts)) return null

    return (
        <CssModuleWrapper className={"article-module"}>
            <Container>
                <ul className={"article-list"}>
                    {posts.map((post) => {
                        return (
                            <li key={post.slug}>
                                <Link to={`/blog/${post.slug}`} className={"link"} prefetch={"intent"}>
                                    <ContentfulImage image={post.heroImage} width={424} height={212}/>
                                    <h2 className={"title"}>{post.title}</h2>
                                </Link>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: post.description,
                                    }}
                                />
                                <div className={"meta"}>
                                    <small className="meta">{toReadableDate(post.publishDate)}</small>
                                    <Tags tags={post.tags}/>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </Container>
        </CssModuleWrapper>
    )
}

export default ArticlePreview
