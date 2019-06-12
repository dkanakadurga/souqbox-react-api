
function displayWithPromise(){
const promise1 = new Promise((resolve, reject) => {
    const obj = {};
    obj.firstname = $("#fname").val();
    obj.lastname = $("#lname").val();
    obj.dob = $("#dob").val();
console.log(JSON.stringify(obj));
    axios.post("http://localhost:3000/contact", JSON.stringify(obj), {
        headers:{
            'content-Type': 'application/json;charset=UTF-8',
              'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Methods': 'DELETE, PUT, GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
                
        }
    }).then(response => {
        // if(!response.data.sucess)  {
        //     <p style="color:red"> Login Failed. Please try again. </p>
        //}
       //response.data.message
        console.log(response);
    }).catch(err =>{
        console.log(err);
      });
    resolve(obj);
})
promise1.then(value => {
}, reason => {
    console.log(reason);
});
}

//document.getElementById('btn').click(displayWithPromise());