import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  padding: 8px 0px;
  margin: 8px 16px;
  border-bottom: 1px solid #e1e4e8;
`

export const Avatar = styled.img`
  border: 1px solid #e1e4e8;
  border-radius: 100%;
`

export const Descript = styled.p`
  margin: 8px;

  a {
    color: #24292e;
    text-decoration: none;
    font-weight: 600;
  }

  a:hover {
    color: #0366d6;
  }
`
