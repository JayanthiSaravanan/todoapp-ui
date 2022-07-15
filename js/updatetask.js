function updateTaskForm() {
    event.preventDefault();

    let id = document.querySelector("#id").value;
    let name = document.querySelector("#name").value;
    let status = document.querySelector("#status").value;
    let cname = 'Jayanthi';
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
    else if (cname == null || cname.trim() == "") {
      alert("Enter created by");
      return false;
    }

    alert("successfully updated task");

    const userobj = {
      id: id,
      name: name,
      created_by: cname,
      status: status,
      created_date: createdDate,
      modified_date: new Date().toJSON(),
      modified_by: 'Jayanthi'
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
    });

  }
  // To Get Queryparams:
  const params = new URLSearchParams(window.location.search);
  let id = parseInt(params.get('id'));
  console.log('id:' + id);
  getTask (id);
  

