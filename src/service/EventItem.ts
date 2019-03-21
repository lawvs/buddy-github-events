import { connect } from 'react-redux'

import EventItems, { EventItemsProps } from '../components/EventItems'
import { GlobalState } from '../store/types'

const mapPropsToState = ({ mainState: { events } }: GlobalState): EventItemsProps => ({
  events,
})

export default connect(mapPropsToState)(EventItems)
