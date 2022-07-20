function updateTaskForm() {
    event.preventDefault();

    let id = document.querySelector("#id").value;
    let name = document.querySelector("#name").value;
    let status = document.querySelector("#status").value;
    //let cname = 'Jayanthi';
    // let cname = document.querySelector("#cname").value;
    // let date = document.querySelector("#date").value;
    let createdDate = new Date().toJSON();


    // alert('result:' + id);
    // alert('result:' + name);
    // alert('result:' + cname);
    // alert('result:' + status);
    // alert('result:' + date);
    
    if (id == null || id.trim() == "") {
      alert("Enter Id");
      return false;
    }

    else if (name == null || name.trim() == "") {
      alert("Enter task name");
      return false;
    }
    // else if (cname == null || cname.trim() == "") {
    //   alert("Enter created by");
    //   return false;
    // }

    alert("successfully updated task");


    const loggedInUsername = localStorage.getItem("LOGGED_IN_USERNAME");

    const userobj = {
      id: id,
      name: name,
      created_by: loggedInUsername,
      status: status,
      created_date: createdDate,
      modified_date: new Date().toJSON(),
      modified_by: loggedInUsername
    };
    console.log(userobj);
    const url = "http://localhost:3000/tasks/" + id;

    axios.put(url, userobj).then(res => {

      console.log(res.data);
    });
  }


  function getTask(id) {
    const url = "http://localhost:3000/tasks/" + id;

    axios.get(url).then(res => {

      let user = res.data

      console.log(user);
      document.querySelector("#id").value = user.id;
      document.querySelector("#name").value = user.name;
      document.querySelector("#status").value = user.status;
      document.querySelector("#createdBy").value = user.created_by;
      document.querySelector("#createdDate").value = user.created_date.substr(0,19);
      document.querySelector("#modifiedDate").value = user.modified_date.substr(0,19);
      document.querySelector("#modifiedBy").value = user.modified_by;
    });

  }
  // To Get Queryparams:
  const params = new URLSearchParams(window.location.search);
  let id = parseInt(params.get('id'));
  console.log('id:' + id);
  getTask (id);
  

