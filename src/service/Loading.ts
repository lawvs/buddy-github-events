import { connect } from 'react-redux'

import Loading, { LoadingProps } from '../components/Loading'
import { GlobalState } from '../store/types'

const mapStateToProps = ({ mainState: { loading } }: GlobalState): LoadingProps => ({
  loading,
})

export default connect(mapStateToProps)(Loading)
