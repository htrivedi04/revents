import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react'

export default class EventListAttendees extends Component {
    constructor(props){
        super(props);
        this.state = { random: Math.floor(Math.random() * 50) + 21}
    }
    render() {
        const {attendee} = this.props;
        return (
            <List.Item>
                <Image as='a' size='mini' circular src={attendee.photoURL} />
            </List.Item>    
            
        )
    }
}

