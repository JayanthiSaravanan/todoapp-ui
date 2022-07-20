
  function getTaskList() {
    const url = "http://localhost:3000/tasks";

    axios.get(url)
    //getTasks()
    .then(res => {

        let tasks = res.data; // []
        let myTasks = tasks.filter(obj=> obj.created_by == 'jayanthi');
        console.table(myTasks);
        let content = "";
        let i= 0;
        for(let task of myTasks){
            content = content +
            `
            <tr>
            <td>${++i}</td>
    <td> ${task.name}</td>
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

