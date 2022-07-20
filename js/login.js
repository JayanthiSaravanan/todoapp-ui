
function loginDetails() {
  event.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  //alert('result:' + email  + password );

  // alert('result:' + email);
  // alert('result:' + password);

  console.log('result:' + email);
  console.log('result:' + password);

  if (email == null || email.trim() == "") {
    alert("enter the valid emailid")
    return false;

  }

  if (password == null || password.trim() == "") {
    alert(" enter the valid password ")
    return false;
  }
  const url = "http://localhost:3000/users";

  axios.get(url)

    .then(res => {

      let users = res.data; // []
      console.table(users);

      let role = null;

      let isValidLogin = false;
      for (let user of users) {
        if (user.email == email && user.password == password) {
          role = user.role
          localStorage.setItem("LOGGED_IN_USERID", user.id);
          localStorage.setItem("LOGGED_IN_USERNAME", user.fname);
          localStorage.setItem("ROLE", user.role);

          isValidLogin = true;
          break;
        }
      }

      if (isValidLogin) {
        alert("Successfully LoggedIn");
        if (role == "ADMIN") {
          window.location.href = "listtask.html";

        }
        else if(role == "USER") {
          window.location.href = "mytask.html";
        }

      }
      else {
        alert("Invalid Login Credentials")
      }

      // alert('successfully Loggedin');
    });
}
