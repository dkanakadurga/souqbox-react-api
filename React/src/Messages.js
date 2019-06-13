import React, {Component} from 'react';
import axios from 'axios';
import readImg from './Images/readImg.png';
import unreadImg from './Images/unreadImg.png';
import './css/messageStyle.css'


class Messages extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            msg:[]
        }

    }

    componentDidMount() {
        axios.get("http://localhost:3000/messages")
        .then(response => {
            console.log(response.data);
            
            let msg = response.data.map(obj => (


                {
                    senderName: obj.senderName,
                    subject: obj.subject,
                    gender: obj.gender,
                    isOpen: obj.isOpen
                }
            ))
            this.setState({msg});
        }).catch(err => {
            console.log(err);
        })
    }

render() {
    let msgbox = (
        
        <div className = "msgclass">
            
            {this.state.msg.map((rec, key) => 
            
                <div>
                    <div className = "mailchk">
                    <div className = {rec.isOpen ? "readMessage" : "unreadMessage"}> </div>
                    </div>
                    <div className = "genderchk">
                   </div>
                    <div className = {rec.gender == "male" ? "male" : "female" }></div>
                    <span>{rec.senderName}</span>
                    <div>{rec.subject}</div>
                 </div>
            
        )}
        </div>
    );
    return msgbox;
}

}

export default Messages;