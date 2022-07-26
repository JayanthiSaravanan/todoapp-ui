
        

  function getTaskList() {
          const url = "http://localhost:3000/tasks";

          axios.get(url)
          //getTasks()
          .then(res => {

              let tasks = res.data; // []
              console.table(tasks);
              let content = "";
              let i= 0;
              for(let task of tasks){
                  content = content +
                  `
                  <tr>
                  <td>${++i}</td>
          <td> ${task.name}</td>
          <td> ${task.priority}</td>
          <td> ${task.status}</td>
          <td>${task.created_by}</td>
          <td><i class="fa-solid fa-calendar-days"></i> ${task.created_date}</td>
          <td> <a href="updatetask.html?id=${task.id}" class="btn btn-info text-white"><i class="fa-solid fa-pencil"></i></a>
            <a href="deletetask.html?id=${task.id}" class="btn btn-danger text-white"><i class="fa-solid fa-trash"></i></a>
          </td>
        </tr>`;
              }
              //alert(content);
          document.querySelector("#tasks-table").innerHTML = content;

          });
  }
  getTaskList();

  

  //security
  // authorization- whether user is allowed to access this page.
function checkUserLoggedIn(){
  
const loggedInUsername = localStorage.getItem("LOGGED_IN_USERNAME");
const role = localStorage.getItem("ROLE");

  if(!loggedInUsername){
    alert("Please Login");
    window.location.href="login.html";
  }
  else if(role !='ADMIN'){

    alert("You are not authorized to access this page. Only admins can access this page. Redirecting to Login page...!");
    window.location.href="login.html";
  }
}

checkUserLoggedIn();