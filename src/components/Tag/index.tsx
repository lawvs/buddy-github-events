import styled from 'styled-components'

interface TagProps {
  round?: boolean
}

export const Tag = styled.span<TagProps>`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 6px;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  font-size: 12px;
  margin: 0px 4px;
  ${({ round = false }) => `
    border-radius: ${round ? '30px' : '3px'};
  `}

  color: #fff;
  background-color: #5c7080;
  &:hover {
    background-color: rgba(92, 112, 128, 0.85);
  }
`
