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
}

type MediaQuery = Record<number, {
    width?: number,
    height?: number,
}>

type Props = {
    image: TypeImage // Asset['fields']['file']
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
    // to be implemented
    // mediaQueries?: MediaQuery
};

const imagePropsMap = {
    width: 'w',
    height: 'h',
    behaviour: 'fit',
    quality: 'q',
    backgroundColor: 'bg',
    focusArea: 'f',
    radius: 'r',
    format: 'fm'
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
        decoding = 'auto'
    }) => {

    let mimeType = image.contentType // extract mimeType from image.url
    let query = {};

    // should only allow ContentfulImage.Query props
    function addToQuery(prop: Record<string, string>) {
        query = {...query, ...prop}
    }

    if (quality) {
        addToQuery({[imagePropsMap['quality']]: quality.toString()})
    }

    if (width) {
        addToQuery({[imagePropsMap['width']]: width.toString()})
    }

    if (height) {
        addToQuery({[imagePropsMap['height']]: height.toString()})
    }

    if (behaviour) {
        addToQuery({[imagePropsMap['behaviour']]: behaviour.toString()})
    }

    if (focusArea) {
        addToQuery({[imagePropsMap['focusArea']]: focusArea.toString()})
    }

    if (radius) {
        addToQuery({[imagePropsMap['radius']]: radius.toString()})
    }

    if (format) {
        if (format === '8bit') {
            addToQuery({'fm': 'png'})
            addToQuery({'fl': 'png8'})
            mimeType = 'image/png'
        } else if (format === 'progressive') {
            addToQuery({'fm': 'jpg'})
            addToQuery({'fl': 'progressive'})
            mimeType = 'image/jpg'
        } else {
            addToQuery({[imagePropsMap['format']]: format.toString()})
            mimeType = `image/${format}`
        }
    }

    if (quality) {
        addToQuery({[imagePropsMap['quality']]: quality.toString()})
    }

    if (backgroundColor) {
        addToQuery({[imagePropsMap['backgroundColor']]: backgroundColor.toString()})
    }

    const transformSrc = `${image.url}?${new URLSearchParams(query).toString()}`

    return (
        <picture>
            <source srcSet={transformSrc} type={`${mimeType}`}/>
            <img
                src={image.url}
                alt={alt || image.title}
                decoding={decoding}
                width={width}
                height={height}
            />
        </picture>
    );
};

export {ContentfulImage};
