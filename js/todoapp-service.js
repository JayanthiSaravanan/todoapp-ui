
function gettodoapp() {
    const url = "http://localhost:3000/users/";
    return axios.get(url);
}

function gettodoapp(id){
    const url = "http://localhost:3000/users/" +id ;
    return axios.get(url);
}
