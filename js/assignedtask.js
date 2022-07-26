function assignTask() {
    event.preventDefault();

    let id = document.querySelector("#id").value;
    let assign = document.querySelector("#assign").value;
    
    //console.log('id:' + id);
    //console.log('assign:' + assign);


const taskObj = {
    id : id,
    assigned_to : assign,
    created_by: "Jayanthi",
    created_date: new Date().toJSON()

};
console.log(taskObj);

const url = "http://localhost:3000/tasks/" +id;

axios.patch(url, taskObj).then (res => {
    
    console.log(res.data);
    alert("successfully assigned");
    window.location.href ="listtask.html";

});

}