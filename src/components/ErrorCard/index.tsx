import React from 'react'

import Card, { INTENTS } from '../Card'

export interface ErrorCardProps {
  error?: string
}

const ErrorCard = ({ error }: ErrorCardProps) =>
  error ? <Card intent={INTENTS.DANGER}>🙁{error}</Card> : null

export default ErrorCard
