import { connect } from 'react-redux'

import ErrorCard, { ErrorCardProps } from '../components/ErrorCard'
import { GlobalState } from '../store/types'

const mapStateToProps = ({ mainState: { error } }: GlobalState): ErrorCardProps => ({
  error,
})

export default connect(mapStateToProps)(ErrorCard)
