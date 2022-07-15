function addTask() {
    event.preventDefault();


    const name = document.querySelector("#name").value;



    // alert('result:' + name);

    if (name == null || name.trim() == "") {
      alert("Enter task name");
      return false;
    }

    const createdBy = localStorage.getItem("LOGGED_IN_USERNAME");

    const taskObj = {
      name: name,
      status: "P",
      created_by: createdBy,
      created_date: new Date().toJSON(),
      modified_date: new Date().toJSON(),
      modified_by: createdBy
    };
    console.log(taskObj);
    const url = "http://localhost:3000/tasks"

    axios.post(url, taskObj).then(res => {

      console.log(res.data);
      alert("Successfully added task");
    });
  }
