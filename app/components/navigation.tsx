import React from 'react'
import {Link} from '@remix-run/react'
import {CssModuleWrapper} from "~/components/css-module-wrapper";

const Navigation: React.FC = () => (
    <CssModuleWrapper className={"navigation-module"}>
        <nav role="navigation" className={"container"} aria-label="Main">
            <Link to="/" className={"logoLink"}>
                <span className={"logo"}/>
                <span className={"navigationItem"}>Remix Starter Contentful</span>
            </Link>
            <ul className={"navigation"}>
                <li className={"navigationItem"}>
                    <Link to="/" /*activeClassName="active"*/>
                        Home
                    </Link>
                </li>
                <li className={"navigationItem"}>
                    <Link to="/blog/" /*activeClassName="active"*/>
                        Blog
                    </Link>
                </li>
            </ul>
        </nav>
    </CssModuleWrapper>
)

export default Navigation
