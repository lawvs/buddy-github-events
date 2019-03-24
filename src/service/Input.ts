import { connect } from 'react-redux'

import Input, { InputProps } from '../components/Input'
import { changeName, fetchProfile, fetchEvent, changeEventType } from '../store/main/actions'
import { AppThunkDispatch, GlobalState, StateProperties, ActionProperties } from '../store/types'
import { GithubEventsType } from '../api'

const mapStateToProps = ({
  mainState: { username, profileInfo },
}: GlobalState): StateProperties<InputProps> => ({
  username,
  profileInfo,
})

const mapDispatchToProps = (dispatch: AppThunkDispatch): ActionProperties<InputProps> => ({
  changeName: (name: string) => dispatch(changeName(name)),
  changeEventType: (type: GithubEventsType) => dispatch(changeEventType(type)),
  fetchProfile: () => dispatch(fetchProfile()),
  fetchEvent: () => dispatch(fetchEvent()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Input)
