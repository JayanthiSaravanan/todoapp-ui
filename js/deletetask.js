

function deleteTask() {
    event.preventDefault();
    const id = document.querySelector("#id").value;

    if (id == null || id.trim() == "") {
        alert("Enter Task id");
        return false;
    }

    const url = "http://localhost:3000/tasks/" + id;
    axios.delete(url).then(res => {
        console.log(res.data);
        alert("Successfully deleted");
    }).catch(err => {
        console.error(err);
        alert("Unable to delete");

    });
}

function init() {
    // To Get Queryparams:
    const params = new URLSearchParams(window.location.search);
    let id = parseInt(params.get('id'));
    console.log('id:' + id);
    document.querySelector("#id").value = id;
}

init();