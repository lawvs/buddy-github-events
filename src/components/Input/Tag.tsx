import React from 'react'
import styled from 'styled-components'

interface TagProps {
  round?: boolean
}

const TagWrapper = styled.span<TagProps>`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 6px;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  ${({ round = false }) => `
    border-radius: ${round ? '30px' : '3px'};
  `}

  background-color: #5c7080;
  &:hover {
    color: #ddd;
    background-color: #182026;
  }
`

const Tag = ({
  children,
  ...rest
}: {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  children: React.ReactNode
} & TagProps) => <TagWrapper {...rest}>{children}</TagWrapper>

export default Tag
