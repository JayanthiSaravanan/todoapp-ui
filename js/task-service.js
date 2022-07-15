function addTask(taskObj){
    const url = "http://localhost:3000/tasks";
    return axios.post(url, taskObj);
}

function updateTask(taskObj){
    const url = "http://localhost:3000/tasks/" + taskObj.id;
    return axios.put(url, taskObj);
}



function gettodoapp() {
    const url = "http://localhost:3000/users/";
    return axios.get(url);
}

function gettodoapp(id){
    const url = "http://localhost:3000/users/" +id ;
    return axios.get(url);
}

function deleteTask(id){
    const url = "http://localhost:3000/tasks/" +id ;
    return axios.delete(url);
}
