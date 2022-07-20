import React from 'react'
import {ContentfulImage, MediaQueries} from "~/components/contentful-image";
import {CssModuleWrapper} from "~/components/css-module-wrapper";
import {TypeImage} from "../../types/contentful-graphql-types";

type Props = {
    image?: TypeImage,
    title: string,
    content?: React.ReactNode
}

const mediaQueries: MediaQueries = {
    "(min-width: 1200px)": {width: 1088, height: 520},
}

const Hero: React.FC<Props> = ({image, title, content}) => (
    <CssModuleWrapper className={"hero-module"}>
        <section className={"hero"}>
            {image && (
                <figure className={'image'}>
                    <ContentfulImage
                        mediaQueries={mediaQueries}
                        alt={title}
                        image={image}
                        quality={65}
                        format={'avif'}
                        behaviour={'fill'}
                        width={1088}
                        height={520}
                    />
                </figure>
            )}
            <div className={"details"}>
                <h1 className={"title"}>{title}</h1>
                {content && <p className={"content"}>{content}</p>}
            </div>
        </section>
    </CssModuleWrapper>
)

export default Hero
