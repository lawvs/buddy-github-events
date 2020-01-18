import { connect } from 'react-redux'

import EventItems, { EventItemsProps } from '../components/EventItems'
import { GlobalState, StateProperties, AppThunkDispatch, ActionProperties } from '../store/types'
import { fetchMoreEvent } from '../store/main/actions'

const mapStateToProps = ({
  mainState: { events },
}: GlobalState): StateProperties<EventItemsProps> => ({
  events,
})

const mapDispatchToProps = (dispatch: AppThunkDispatch): ActionProperties<EventItemsProps> => ({
  showMore: () => dispatch(fetchMoreEvent()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EventItems)
