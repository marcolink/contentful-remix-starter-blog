import React from 'react'
import {CssModuleWrapper} from "~/components/css-module-wrapper";

type Props = {
    tags: string[]
}

const Tags: React.FC<Props> = ({tags = []}) => {
    return (
        <CssModuleWrapper className={"tags-module"}>
            <small className={"tags"}>
                {tags.map((tag) => <div key={tag} className={"tag"}>{tag}</div>)}
            </small>
        </CssModuleWrapper>
    )
}

export default Tags
