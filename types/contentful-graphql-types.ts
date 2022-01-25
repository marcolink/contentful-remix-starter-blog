import {TypeBlogPostFields, TypePersonFields} from "./generated";

export type TypeImage = {
    width: number,
    height: number,
    title: string,
    url: string,
    contentType: 'image/jpg' | 'image/jpeg' | 'image/png' | 'image/webp' | 'image/gif' | 'image/avif'
}

export type TypePostPreview = {
    heroImage: TypeImage
} & Pick<TypeBlogPostFields, 'slug' | 'description' | 'publishDate' | 'tags' | 'title'>

export type TypePostDetail = {
    author: { name: string }
} & TypePostPreview & Pick<TypeBlogPostFields, 'body'>

export type TypeAuthor = {
    image: TypeImage
} & Pick<TypePersonFields, 'name' | 'title' | 'shortBio'>
