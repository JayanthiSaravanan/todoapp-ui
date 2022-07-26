
function getUserList() {
    const url = "http://localhost:3000/users";
    axios.get(url)
        .then(res => {
            let users = res.data;
            console.table(users);
            let content = "";
            let i = 0;
            for (let user of users) {
                content = content +
                    `
            <tr>
            <td> ${++i}</td>
            <td> ${user.fname} </td>
            <td> ${user.email}</td>
            <td> ${user.role}</td>
            <td> ${user.created_by}</td>
            <td><i class="fa-solid fa-calendar-days"></i> ${user.created_date}</td>

             <td> ${user.modified_by}</td>
             <td><i class="fa-solid fa-calendar-days"></i> ${user.modified_date}</td>

               <td> <a href="updateuser.html?id=${user.id}" class="btn btn-info text-white"><i class="fa-solid fa-pencil"></i></a>
              <a href="deleteuser.html?id=${user.id}" class="btn btn-danger text-white"><i class="fa-solid fa-trash"></i></a>
            </td>
       
         
    

    </tr>`;
            }
            document.querySelector("#users-table").innerHTML = content;
        });
}
getUserList();




  //security
  // authorization- whether user is allowed to access this page.
  function checkUserLoggedIn(){

    const loggedInUsername = localStorage.getItem("LOGGED_IN_USERNAME");
    if(!loggedInUsername){
      alert("Please Login");
      window.location.href="login.html";
    }
  }
  
  checkUserLoggedIn();