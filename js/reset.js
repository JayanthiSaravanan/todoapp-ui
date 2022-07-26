function resetPassword() {

    event.preventDefault();

    let email = document.querySelector("#email").value;

    //alert("Its working");


  //console.log(userObj)

    const url = "http://localhost:3000/users" ;

    let searchUser = null;
    axios.get(url)
    .then(res => {
        let users = res.data;
        for(let user of users){
            if(user.email == email){
                searchUser = user;
                break;
            }
        }
        //if searchuser does not exists throw error .
        // if searchuser exists, reset the password
        if(searchUser == null){
            alert("Email does not exists");
        }
        else{
            
           setDefaultPassword(searchUser);

        }
    });
    
}


function setDefaultPassword(searchUser){

    const userObj = {
        id: searchUser.id,
        password: "pass123",
        modified_by: "Jayanthi",
        modified_date: new Date().toJSON()
    };
    console.log(userObj);

    const updateUrl = "http://localhost:3000/users/" + searchUser.id;

        axios.patch(updateUrl, userObj).then(re => {

            console.log(res.data);
            alert("Successfully sent new password");
            window.location.href = "listuser.html";
    
    
        });
    }
