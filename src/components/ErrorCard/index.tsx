import React from 'react'

import { CenteredCard, INTENTS } from '../Card'

export interface ErrorCardProps {
  error?: string
}

const ErrorCard = ({ error }: ErrorCardProps) =>
  error ? <CenteredCard intent={INTENTS.DANGER}>🙁{error}</CenteredCard> : null

export default ErrorCard
