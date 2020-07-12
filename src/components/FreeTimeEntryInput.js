import React, { Component } from 'react'


import { green400} from 'material-ui/styles/colors'

import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'
import TextField from 'material-ui/TextField'


export class FreeTimeEntryInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      startTime: null,
      endTime: null,
      text:""
    }

  }
  handleTextStartTime = (e) => {
    this.setState({
      startTime: e.target.value
    });
  }

  handleTextEndTime = (e) => {
    this.setState({
      endTime: e.target.value
    });
  }

  handleChangeText = (e) => {    
    const text = e.target.value
    this.setState({
      text: text
    })
  }

  componentWillMount() {
  }

  componentWillUnmount() {
  }


  handleSave = (e) => {
    e.preventDefault()
    // create UID with math.random
    let number = Math.random();
    let UID = number.toString(36).substr(2, 9);
    //Not implemented yet
    this.props.onSave(UID,this.state.text,this.state.startTime,this.state.endTime)
  }


  render() {
    return (
      <div className="time-entry-input-form" style={{
        position:'absolute',
        bottom:0  
      }}>
        <TextField
          width="70%"
          hintText="Did you miss a track?"
          value={this.state.text}
          onChange={this.handleChangeText}
          id="text"
          name="text"
        />
        <TextField
          id="datetime-local"
          label="Start Date"
          type="datetime-local"
          defaultValue="2020-07-12T10:30"
          value={this.state.startTime}
          onChange={this.handleTextStartTime}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="datetime-local"
          label="End Date"
          type="datetime-local"
          defaultValue="2020-07-12T12:30"
          value={this.state.endTime}
          onChange={this.handleTextEndTime}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <span>
          <RaisedButton
            name='btn-pause'
            icon={<FontIcon className="material-icons" style={{ color: green400, width: 50, fontSize: 30 }}>save</FontIcon>}
            style={{
              marginLeft: 20,
              minWidth: 50
            }}
            buttonStyle={{
              width: 50
            }}
            onClick={this.handleSave}
          />
        </span>

      </div>
    )
  }
}

export default FreeTimeEntryInput