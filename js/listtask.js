
        

  function getTaskList() {
          const url = "http://localhost:3000/tasks";

          axios.get(url)
          //getTasks()
          .then(res => {

              let tasks = res.data; // []
              console.table(tasks);
              let content = "";
              for(let task of tasks){
                  content = content +
                  `
                  <tr>
          <td> ${task.name}</td>
          <td> ${task.status}</td>
          <td>Jayanthi</td>
          <td><i class="fa-solid fa-calendar-days"></i> 10-jul-2021</td>
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

