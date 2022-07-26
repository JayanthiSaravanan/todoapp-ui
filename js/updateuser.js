

        
        function userUpdate() {
            event.preventDefault();
            let id = document.querySelector("#id").value;
            let name = document.querySelector("#name").value;
            let email = document.querySelector("#email").value;
            let password = document.querySelector("#password").value;
            
            // let cname = document.querySelector("#cname").value;
            // let date = document.querySelector("#date").value;
            // let createdDate = new Date().toJSON();


            // alert('result:' + id);
            // alert('result:' + name);
            // alert('result:' + cname);
            // alert('result:' + status);
            // alert('result:' + date);
            
            if (id == null || id.trim() == "") {
                alert("Enter user id");
                return false;
            }
            else if (name == null || name.trim() == "") {
                alert("Enter your name");
                return false;
            }

            else if (email == null || email.trim() == "") {
                alert("Enter valid email-ID");
                return false;
            }
            else if (password == null || password.trim() == "") {
                alert("Enter valid password");
                return false;
            }

            alert("successfully updated task");

            const userobj = {
                
                name: name,
                email: email,
                password: password,
                created_by: "jayanthi",
                created_date: new Date().toJSON()
            };
            console.log(userobj);
            const url = "http://localhost:3000/users/" + id;

            axios.put(url, userobj).then(res => {

                console.log(res.data);
            });
        }


        function getTask(id) {
            const url = "http://localhost:3000/users/" + id;

            axios.get(url).then(res => {

                let user = res.data

                console.log(user);
                document.querySelector("#id").value = user.id;
                document.querySelector("#name").value = user.name;
                document.querySelector("#email").value = user.email;
            });

        }
        // To Get Queryparams:
        const params = new URLSearchParams(window.location.search);
        let id = parseInt(params.get('id'));
        console.log('id:' + id);
        getTask(id);


