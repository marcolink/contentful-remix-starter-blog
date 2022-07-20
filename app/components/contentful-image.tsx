import * as React from "react";
import {TypeImage} from "../../types/contentful-graphql-types";

declare namespace ContentfulImageTransform {
    type FocusArea =
        'center'
        | 'top'
        | 'right'
        | 'left'
        | 'bottom'
        | 'top_right'
        | 'top_left'
        | 'bottom_right'
        | 'bottom_left'
        | 'face'
        | 'faces'
    type Format = 'jpg' | 'progressive' | 'gif' | 'png' | '8bit' | 'webp' | 'avif'
    type Fit = 'pad' | 'fill' | 'scale' | 'crop' | 'thumb'
    type Key = 'q' | 'w' | 'h' | 'fit' | 'f' | 'r' | 'fm' | 'fl' | 'bg'
}

export type MediaQuery = {
    width?: number,
    height?: number,
    quality?: number
}

export type MediaQueries = Record<string, MediaQuery>

type Props = {
    image: TypeImage
    alt?: string
    width?: number,
    height?: number,
    behaviour?: ContentfulImageTransform.Fit,
    quality?: number,
    backgroundColor?: string,
    format?: ContentfulImageTransform.Format,
    focusArea?: ContentfulImageTransform.FocusArea,
    radius?: number
    decoding?: 'auto' | 'sync' | 'async',
    mediaQueries?: MediaQueries
};

function buildQueryParam(key: ContentfulImageTransform.Key, value?: string | number): Record<string, string> | null {
    if (value) {
        return {[key]: value.toString()}
    } else {
        return null;
    }
}

function buildFormatQueryParam(format?: ContentfulImageTransform.Format): Record<string, string> | null {
    if (!format) {
        return null
    } else {
        if (format === '8bit') {
            return {fm: 'png', fl: 'png8'}
        } else if (format === 'progressive') {
            return {fm: 'jpg', fl: 'progressive'}
        } else {
            return {fm: format}
        }
    }
}

function buildSrcUrl(url: string, query: Record<string, string>) {
    return `${url}?${new URLSearchParams(query).toString()}`
}

function buildMimeTime(format?: ContentfulImageTransform.Format) {
    if (!format) {
        return
    }
    switch (format) {
        case '8bit' :
            return 'image/png'
        case 'progressive':
            return 'image/jpeg'
        default:
            return `image/${format || 'jpeg'}`
    }
}

const ContentfulImage: React.FC<Props> = (
    {
        image,
        alt,
        quality,
        backgroundColor,
        behaviour,
        height,
        width,
        focusArea,
        format,
        radius,
        decoding = 'auto',
        mediaQueries = {}
    }) => {

    let mimeType = buildMimeTime(format) || image.contentType

    const query = {
        ...buildQueryParam('q', quality),
        ...buildQueryParam('w', width),
        ...buildQueryParam('h', height),
        ...buildQueryParam('fit', behaviour),
        ...buildQueryParam('f', focusArea),
        ...buildQueryParam('r', radius),
        ...buildQueryParam('bg', backgroundColor),
        ...buildFormatQueryParam(format),
    }

    const mediaQuerySources = Object.keys(mediaQueries).map((key: string) => {
        const sourceQuery = {
            ...query,
            ...buildQueryParam('w', mediaQueries[key].width),
            ...buildQueryParam('h', mediaQueries[key].height),
        }
        return (
            <source
                srcSet={buildSrcUrl(image.url, sourceQuery)}
                type={`${mimeType}`}
                media={key}
                key={key}
            />
        )
    })

    const src = buildSrcUrl(image.url, query);

    return (
        <picture>
            {mediaQuerySources}
            <source srcSet={src} type={`${mimeType}`}/>
            <img
                src={src}
                alt={alt || image.title}
                decoding={decoding}
                //width={width}
                //height={height}
            />
        </picture>
    );
};

export {ContentfulImage};
