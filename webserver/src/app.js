const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');



const app= express()
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(cors());


app.use(express.static(publicDirectoryPath))





app.get('', (req, res) => {
    
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/messages', (req, res) => {
    res.send(
        {
    unreadCount : 1,        
    msgArray :    [
        {
        senderName: "Den Dellon",
        subject: "Need to remember to place the order",
        gender: "male",
        isOpen : false
        },
        {
            senderName: "Paige Turner",
            subject: "Discount offer on recent purchase",
            gender: "female",
            isOpen : true
        },
        {
            senderName: "Will Power",
            subject: "Need to remember to place the order",
            gender: "male",
            isOpen : true
        },
]
        }

)
})




app.get('/orders', (req, res) => {
    res.send([{ 
        ProductName: "product 1",
        Ordered: new Date("23/Jan/19"),
        Cost:"£29", 
        Status: "shipped",
        Delivered: "23, Kings Reach"
        },
         { 
            ProductName: "product 2",
            Ordered: new Date("13/Feb/19"),
            Cost:"£31", 
            Status: "shipped",
            Delivered: "25, Kings Reach"
         },
         { 
            ProductName: "product 3",
            Ordered: new Date("10/Apr/19"),
            Cost:"£33", 
            Status: "shipped",
            Delivered: "27, Kings Reach"
        },
        { 
            ProductName: "product 4",
            Ordered: new Date("23/May/17"),
            Cost:"£35", 
            Status: "Notshipped",
            Delivered: "29, Kings Reach"
         },
         { 
            ProductName: "product 5",
            Ordered: new Date("23/Aug/18"),
            Cost:"£38", 
            Status: "shipped",
            Delivered: "31, Kings Reach"
        },
        { 
            ProductName: "product 6",
            Ordered: new Date("03/Jun/19"),
            Cost:"£33", 
            Status: "Notshipped",
            Delivered: "33, Kings Reach"
         },
        { 
            ProductName: "product 7",
            Ordered: new Date("2/Jul/15"),
            Cost:"£39", 
            Status: "shipped",
            Delivered: "35, Kings Reach"
        },
        ]
        );
        })




app.listen(3000, () => console.log(`Example app listening on port 3000!`))

 
