import styled, { css } from 'styled-components'

export enum INTENTS {
  NONE = 'transparent',
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
  min-height: 100px;
  padding: 8px;
  border-radius: 10px;
  font-size: 16px;
  background-color: ${({ intent = INTENTS.DEFAULT }) => intent};
  ${({ intent }) =>
    intent === INTENTS.NONE &&
    css`
      border: 1px solid ${INTENTS.DEFAULT};
    `}
`

export const CenteredCard = styled(Card)`
  align-items: center;
`

export default Card
