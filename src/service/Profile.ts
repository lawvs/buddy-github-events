import { connect } from 'react-redux'

import { GlobalState } from '../store/types'
import Profile from '../components/Profile'

const mapStateToProps = ({ mainState: { profileInfo } }: GlobalState) => ({ profileInfo })

export default connect(mapStateToProps)(Profile)
