import React from 'react'
import styled, { keyframes } from 'styled-components'
import { WithTranslation, withTranslation } from 'react-i18next'

const flash = keyframes`
  0% { opacity: 1; }
  90% { opacity: 0; }
  100% { opacity: 0; }
`

const blowUp = keyframes`
  from { transform: scale(0); }
  to { transform: scale(1.2); }
`

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #607d8b;
  animation: ${flash} 1.5s ease infinite, ${blowUp} 1.5s ease infinite;
`
const LoadingCard = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  border-radius: 10px;
  border: 1px solid #d1d5da;
`

export interface LoadingProps {
  loading: boolean
}

const Loading = ({ loading, t }: LoadingProps & WithTranslation) =>
  loading ? (
    <LoadingCard>
      <Spinner />
      <p>{t('Loading')}</p>
    </LoadingCard>
  ) : null

export default withTranslation()(Loading)
