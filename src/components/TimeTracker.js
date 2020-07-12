import React from 'react'
import TimeEntryInputContainer from './TimeEntryInputContainer'
import TimeEntryListContainer from './TimeEntryListContainer'
import FreeTimeEntryInput from './FreeTimeEntryInput'
const TimeTracker = () => (
  <div>
    <TimeEntryInputContainer />
    <TimeEntryListContainer />
    <FreeTimeEntryInput/>
  </div>
)

export default TimeTracker