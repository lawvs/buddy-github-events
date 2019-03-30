import styled from 'styled-components'

export enum INTENTS {
  DEFAULT = '#d1d5da',
  PRIMARY = '#48AFF0',
  SUCCESS = '#3DCC91',
  WARNING = '#FFB366',
  DANGER = '#FF7373',
}

const Card = styled.div<{ intent?: INTENTS } & React.HTMLProps<HTMLDivElement>>`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  border-radius: 10px;
  font-size: 16px;
  background-color: ${({ intent = INTENTS.DEFAULT }) => intent};
`

export default Card
