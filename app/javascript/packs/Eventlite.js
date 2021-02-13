import React from 'react'
import ReactDOM from 'react-dom'
import EventsList from './EventsList'
import EventForm from './EventForm'

/*
const Eventlite = props => (
  <div>
      <EventForm />
      <EventsList events={props.events} />
  </div>
)
*/

class Eventlite extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            events: this.props.events
        }
    }

    addNewEvent = (event) => {
        const events = [event, ...this.state.events]
        this.setState({events: events})
    }

    render(){
        return(
            <div>
                <EventForm handleNewEvent={this.addNewEvent} />
                <EventsList events={this.state.events} />
            </div>   
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('events_data')
  const data = JSON.parse(node.getAttribute('data'))
  ReactDOM.render(
    <Eventlite events={data} />,
    document.body.appendChild(document.createElement('div')),
  )
})