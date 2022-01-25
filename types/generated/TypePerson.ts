import * as Contentful from "contentful";
import { LocalizedEntry, LocalizedFields } from "./Localized";

export interface TypePersonFields {
    name: Contentful.EntryFields.Symbol;
    title: Contentful.EntryFields.Symbol;
    company: Contentful.EntryFields.Symbol;
    shortBio: Contentful.EntryFields.Text;
    email?: Contentful.EntryFields.Symbol;
    phone?: Contentful.EntryFields.Symbol;
    facebook?: Contentful.EntryFields.Symbol;
    twitter?: Contentful.EntryFields.Symbol;
    github?: Contentful.EntryFields.Symbol;
    image?: Contentful.Asset;
}

export type TypePerson = Contentful.Entry<TypePersonFields>;
export type LocalizedTypePersonFields<Locales extends keyof any> = LocalizedFields<TypePersonFields, Locales>;
export type LocalizedTypePerson<Locales extends keyof any> = LocalizedEntry<TypePerson, Locales>;
