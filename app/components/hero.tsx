import React from 'react'
import {ContentfulImage} from "~/components/contentful-image";
import {CssModuleWrapper} from "~/components/css-module-wrapper";
import {TypeImage} from "../../types/contentful-graphql-types";

type Props = {
    image?: TypeImage,
    title: string,
    content?: React.ReactNode
}

const Hero: React.FC<Props> = ({image, title, content}) => (
    <CssModuleWrapper className={"hero-module"}>
        <section className={"hero"}>
            {image && (
                <figure className={'image'}>
                <ContentfulImage
                    alt={title}
                    image={image}
                    quality={50}
                    format={'avif'}
                    width={1920}
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
