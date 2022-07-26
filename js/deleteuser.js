
    
    function deleteUser() {
        event.preventDefault();
        let id = document.querySelector("#id").value;

        if (id == null || id.trim() == "") {
            alert("Enter user id");
            return false;
        }

        const url = "http://localhost:3000/users/" + id;
        axios.delete(url).then(res => {
            console.log(res.data);
            alert("successfully deleted");
        }).catch(err => {
            console.error(err);
            alert("unable to delete");

        });
    }
    // To Get Queryparams:
    const params = new URLSearchParams(window.location.search);
    let id = parseInt(params.get('id'));
    console.log('id:' + id);
    document.querySelector("#id").value = id;   