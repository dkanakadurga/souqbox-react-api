import React, {Component} from 'react';
import axios from 'axios';
import readImg from './Images/readImg.png';
import unreadImg from './Images/unreadImg.png';
import './css/messageStyle.css'


class Messages extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            count: '',
            msg:[]
        }

    }

    componentDidMount() {
        axios.get("http://localhost:3000/messages")
        .then(response => {
            let count = response.data.unreadCount;
            let msg = response.data.msgArray.map(obj => (
                {
                    senderName: obj.senderName,
                    subject: obj.subject,
                    gender: obj.gender,
                    isOpen: obj.isOpen
                }
            ))
            this.setState({msg, count});
        }).catch(err => {
            console.log(err);
        })
    }

render() {
    let msgbox = (
        
        <div className = "msgclass">
            <div className = "unreadCount">{this.state.count} new messages</div>
            
            {this.state.msg.map((rec, key) => 
             <div className = "msgcontainer">
                 
                    <div className = "mailchk">
                    <div className = {rec.isOpen ? "readMessage" : "unreadMessage"}> </div>
                    </div>
                    <div className = "genderchk">
                    <div className = {rec.gender == "male" ? "male" : "female" }></div>
                    </div>
                    <div className = "senderClass">
                    <div>{rec.senderName}</div>
                    </div>
                     <div className = "subjectClass"> 
                     <div><a href="#">{rec.subject}</a> </div> 
                     </div>
                 </div>
            
        )}
        </div>
    );
    return msgbox;
}

}

export default Messages;