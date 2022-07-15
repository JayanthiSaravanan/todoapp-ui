function addTask() {
    event.preventDefault();


    let name = document.querySelector("#name").value;



    // alert('result:' + name);

    if (name == null || name.trim() == "") {
      alert("Enter task name");
      return false;
    }

    alert("successfully added task");

    const userobj = {
      name: name,
      status: "P",
      created_by: "jayanthi",
      created_date: new Date().toJSON(),
      modified_date: new Date().toJSON(),
      modified_by: 'Jayanthi'
    };
    console.log(userobj);
    const url = "http://localhost:3000/tasks"

    axios.post(url, userobj).then(res => {

      console.log(res.data);
    });
  }