import React from 'react'
import {CssModuleWrapper} from "~/components/css-module-wrapper";

const Tags = ({tags}) =>
    tags?.length > 0 ? (
        <CssModuleWrapper className={"tags-module"}>
            <small className={"tags"}>
                {tags.map((tag) => (
                    <div key={tag} className={"tag"}>
                        {tag}
                    </div>
                ))}
            </small>
        </CssModuleWrapper>
    ) : <></>

export default Tags
