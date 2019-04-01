import { connect } from 'react-redux'

import Header, { HeaderProps } from '../components/Header'
import { GlobalState } from '../store/types'

const mapStateToProps = ({
  mainState: { error, loading, events, profileInfo },
}: GlobalState): HeaderProps => ({
  isExpand: !error && !loading && !profileInfo && !events,
})

export default connect(mapStateToProps)(Header)
