import * as Contentful from "contentful";
import { LocalizedEntry, LocalizedFields } from "./Localized";
import { TypePersonFields } from "./TypePerson";

export interface TypeBlogPostFields {
    title: Contentful.EntryFields.Symbol;
    slug: Contentful.EntryFields.Symbol;
    heroImage: Contentful.Asset;
    description: Contentful.EntryFields.Text;
    body: Contentful.EntryFields.Text;
    author?: Contentful.Entry<TypePersonFields>;
    publishDate: Contentful.EntryFields.Date;
    tags?: ("general" | "javascript" | "static-sites")[];
}

export type TypeBlogPost = Contentful.Entry<TypeBlogPostFields>;
export type LocalizedTypeBlogPostFields<Locales extends keyof any> = LocalizedFields<TypeBlogPostFields, Locales>;
export type LocalizedTypeBlogPost<Locales extends keyof any> = LocalizedEntry<TypeBlogPost, Locales>;
