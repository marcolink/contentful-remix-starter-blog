import React from 'react'
import {CssModuleWrapper} from "~/components/css-module-wrapper";

import Container from './container'

const Footer: React.FC = () => (
    <CssModuleWrapper className={"footer-module"}>
        <Container as="footer">
            <div className={"container"}>
                Built with <a href="https://contentful.com/">Contentful</a> and{' '}
                <a href="https://remix.run">Remix</a> &middot;{' '}
                <a href="https://github.com/marcolink/contentful-remix-starter-blog">Source</a>
            </div>
        </Container>
    </CssModuleWrapper>
)

export default Footer
