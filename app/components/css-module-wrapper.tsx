import * as React from "react";

type Props = {
    className: string
};

const CssModuleWrapper: React.FC<Props> = ({className, children}) => {
    return (
        <span className={className}>
            {children}
        </span>
    );
};

export {CssModuleWrapper};
