import { connect } from 'react-redux'

import EventItems, { EventItemsProps } from '../components/EventItems'
import { GlobalState } from '../store/types'

const mapStateToProps = ({ mainState: { events } }: GlobalState): EventItemsProps => ({
  events,
})

export default connect(mapStateToProps)(EventItems)
