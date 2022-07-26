
function changeRole() {
    event.preventDefault();

    let id = document.querySelector("#id").value;
    let role = document.querySelector("#role").value;

    const loggedInUsername = localStorage.getItem("LOGGED_IN_USERNAME");

    //alert("working");

    //console.log('id:' + id);
    //console.log('role:' + role);


    const userObj = {
        id: id,
        role: role,
        modified_by: loggedInUsername,
        modified_date: new Date().toJSON()
    };
    console.log(userObj);

    const url = "http://localhost:3000/users/" + id;

    axios.patch(url, userObj).then(res => {

        console.log(res.data);
        alert("successfully updated role");
        window.location.href = "listuser.html";

    });

}