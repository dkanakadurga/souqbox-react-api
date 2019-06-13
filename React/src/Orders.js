import React, {Component} from 'react';
import axios from 'axios';
import ReactTable from "react-table";
import "react-table/react-table.css";
import Table from 'react-bootstrap/Table';
import './css/orderStyle.css';






class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: []
        }
        
        
}

componentDidMount() {
    axios.get("http://localhost:3000/orders")
    .then(response => { 
       
       console.log(response.data);
       let order = response.data.map(obj => (
           
           {
            ProductName : obj.ProductName,
            Ordered: obj.Ordered,
            Cost: obj.Cost,
            Status: obj.Status,
            Delivered: obj.Delivered
        }   
           ))
       this.setState({order});
          
       }).catch(err =>{
                 console.log(err);
            });

   

}

render() {
   
    

    let table1 = (
    //   <div className = "ordTable">
           <Table className = "ordTable" >
             <thead>
                <tr>
                    <th>Product name</th>
                    <th>Ordered</th>
                    <th>Cost</th>
                    <th>Status</th>
                    <th>Delivered</th>
                    
                 
                </tr>
                </thead>
            {this.state.order.map((rec, key) =>
                <tbody>
                    
                <tr key = {key} >
                <td>{rec.ProductName}</td> 
                <td>{ new Date(rec.Ordered).toDateString()}</td>
                <td>{rec.Cost}</td>
               <td>{rec.Status}</td>
               <td>{rec.Delivered}</td>

            </tr> 
            </tbody>
            
            )}
        </Table>
        

          
     );

     return table1 
    }

               }
export default Orders;