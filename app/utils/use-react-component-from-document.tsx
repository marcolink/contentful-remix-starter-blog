import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {useMemo} from "react";
import type {Document} from "@contentful/rich-text-types"

export function useReactComponentFromDocument(body: Document) {
    return useMemo(() => body ? documentToReactComponents(body) : null, [body])
}
