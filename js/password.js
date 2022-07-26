function changePassword() {
  event.preventDefault();

  //alert("Its working"); 

  let id = document.querySelector("#id").value;
  let password = document.querySelector("#password").value;

  //console.log('id :' + id);
  //console.log('password :' + password);

  const loggedInUsername = localStorage.getItem("LOGGED_IN_USERNAME");
  const userObj = {

    id: id,
    password: password,
    modified_by: loggedInUsername,
    modified_date: new Date().toJSON()

  };
  console.log(userObj);

  const url = "http://localhost:3000/users/" + id;

  axios.patch(url, userObj).then(res => {

    console.log(res.data);
    alert("Successfully changed Password");
    window.location.href = "listuser.html";
  });


}