import styled from 'styled-components'

export const InputGroupWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const InputWrapper = styled.div<{ round?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  min-width: 300px;
  padding: 0 12px;
  margin: 8px;

  background-color: hsla(0, 0%, 100%, 0.5);
  box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0),
    inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);

  &:focus-within {
    background-color: hsla(0, 0%, 100%, 1);
  }

  ${({ round = false }) => `
  border-radius: ${round ? '30px' : '6px'};
`}

  input {
    flex: 1;
    font-size: 16px;
    outline: none;
    border: none;
    background-color: rgba(0, 0, 0, 0);
  }
`

interface SearchButtonProps {
  round?: boolean
}

export const SearchButton = styled.div<SearchButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  min-width: 70px;
  margin: 8px;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  background: rgba(167, 182, 194, 0.3);
  ${({ round = false }) => `
  border-radius: ${round ? '30px' : '3px'};
`}

  &:hover {
    color: #182026;
    background-color: #bfccd6;
  }
`
