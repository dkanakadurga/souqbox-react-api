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
    res.send([
        {
        senderName: "Den Dellon",
        subject: "Need to remember to place the order",
        gender: "male",
        isOpen : "unread"
        },
        {
            senderName: "Paige Turner",
            subject: "Discount offer on recent purchase",
            gender: "female",
            isOpen : "read"
        },
        {
            senderName: "Will Power",
            subject: "Need to remember to place the order",
            gender: "male",
            isOpen : "read"
        },


])
})




app.get('/orders', (req, res) => {
    res.send([{ 
        ProductName: "product 1",
        Ordered: new Date("23/06/19"),
        Cost:"£29", 
        Status: "shipped",
        Delivered: "23, Kings Reach"
        },
         { 
            ProductName: "product 1",
            Ordered: new Date("23/06/19"),
            Cost:"£29", 
            Status: "shipped",
            Delivered: "23, Kings Reach"
         },
         { 
            ProductName: "product 1",
            Ordered: new Date("23/06/19"),
            Cost:"£29", 
            Status: "shipped",
            Delivered: "23, Kings Reach"
        },
        { 
            ProductName: "product 1",
            Ordered: new Date("23/06/19"),
            Cost:"£29", 
            Status: "shipped",
            Delivered: "23, Kings Reach"
         },
         { 
            ProductName: "product 1",
            Ordered: new Date("23/06/19"),
            Cost:"£29", 
            Status: "shipped",
            Delivered: "23, Kings Reach"
        },
        { 
            ProductName: "product 1",
            Ordered: new Date("23/06/19"),
            Cost:"£29", 
            Status: "shipped",
            Delivered: "23, Kings Reach"
         },
        { 
            ProductName: "product 1",
            Ordered: new Date("23/06/19"),
            Cost:"£29", 
            Status: "shipped",
            Delivered: "23, Kings Reach"
        },
        ]
        );
        })




app.listen(3000, () => console.log(`Example app listening on port 3000!`))

 
