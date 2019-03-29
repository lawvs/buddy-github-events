import React from 'react'
import styled from 'styled-components'

import { HOMEPAGE, LICENSE_URL, LICENSE, AUTHOR_GITHUB_URL, AUTHOR } from '../../constants'

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 16px 0;
  color: #5f5f5f;
  overflow: hidden;
  background: #20232a;
  color: hsla(0, 0%, 100%, 0.6);

  a {
    font-weight: 600;
    color: hsla(0, 0%, 100%, 0.6);
    text-decoration: none;
  }

  a:hover {
    color: #0366d6;
  }
`

const Footer = () => (
  <FooterWrapper>
    <a href={HOMEPAGE} target="_blank" rel="noopener noreferrer">
      Github
    </a>
    <section>
      Released under the{' '}
      <a href={LICENSE_URL} target="_blank" rel="noopener noreferrer">
        {LICENSE} License
      </a>
    </section>
    <section>
      CopyRight © {new Date().getFullYear()}{' '}
      <a href={AUTHOR_GITHUB_URL} target="_blank" rel="noopener noreferrer">
        {AUTHOR}
      </a>
      . All rights reserved.
    </section>
  </FooterWrapper>
)

export default Footer
