import styled from 'styled-components'

export const ItemWrapper = styled.div`
  display: flex;
  align-items: baseline;
  padding: 8px 0px;
  margin: 8px 16px;
  border-bottom: 1px solid #e1e4e8;
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1;
  margin: 8px;

  time {
    font-size: 12px;
    color: #6a737d;
  }
`

export const Avatar = styled.img`
  border: 1px solid #e1e4e8;
  border-radius: 100%;
  vertical-align: middle;
`

export const Descript = styled.p`
  font-size: 16px;
  margin: unset;
  margin-bottom: 8px;

  a {
    color: #24292e;
    text-decoration: none;
    font-weight: 600;
  }

  a:hover {
    color: #0366d6;
  }
`
