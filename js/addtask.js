function addTask() {
    event.preventDefault();


    const name = document.querySelector("#name").value;
    const priority = document.querySelector("#priority").value;

     //alert('result:' + name);
     
    if (name == null || name.trim() == "") {
      alert("Enter task name");
      return false;
    }
    


    const createdBy = localStorage.getItem("LOGGED_IN_USERNAME");

    const taskObj = {
      name: name,
      status: "PENDING",
      priority: priority,
      created_by: createdBy,
      created_date: new Date().toJSON(),
      modified_date: new Date().toJSON(),
      modified_by: createdBy,
      assigned_to: ""
    };
    console.log(taskObj);
    const url = "http://localhost:3000/tasks"

    axios.post(url, taskObj).then(res => {

      console.log(res.data);
      alert("Successfully added task");
      window.location.href ="listtask.html";
    });


  }

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