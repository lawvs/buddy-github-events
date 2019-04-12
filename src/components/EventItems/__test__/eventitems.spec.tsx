import React from 'react'
import TestRenderer from 'react-test-renderer'

import EventItems from '../index'

beforeEach(() => {
  // mock react-timeago.TimeAgo Date.now
  Date.now = jest.fn(() => 1546300800000) // 2019-01-01T00:00:00Z
})

describe('renders correctly null event', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(<EventItems />)
    expect(renderer).toMatchSnapshot()
    renderer.unmount()
  })
})

describe('renders correctly EventItems', () => {
  it('DeleteEvent should renders correctly', () => {
    const DeleteEvent = require('./fixtures/DeleteEvent.json')
    const renderer = TestRenderer.create(<EventItems events={DeleteEvent} />)
    expect(renderer).toMatchSnapshot()
    renderer.unmount()
  })
})
