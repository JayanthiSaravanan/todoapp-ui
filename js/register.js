
function register() {
    event.preventDefault();

    let fname = document.querySelector("#fname").value;
    // alert('result:' + name);
    let lname = document.querySelector("#lname").value;
    let email = document.querySelector("#email").value;
    let gender = "";//document.querySelector("#gender").value;
    var ele = document.getElementsByName('gender');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            gender = ele[i].value;
        }
    }

    let address = document.querySelector("#address").value;

    let city = document.querySelector("#city").value;
    let state = document.querySelector("#state").value;
    let form = document.querySelector("#regform");


    // alert('result:' + state);

    if (fname == null || fname.trim() == "") {
        alert("enter the valid firstname")
        return false;
    }
    if (fname.length < 3) {
        alert("Name must be minimum 3 characters");
        return false;
    }
    if (lname == null || lname.trim() == "") {
        alert("enter last name")
        return false;
    }
    if (email == null || email.trim() == "") {
        alert("enter the valid emailid")
        return false;
    }


    const todoobj = {
        fname: fname,
        lname: lname,
        email: email,
        gender: gender,
        address: address,
        city: city,
        state: state,
        created_by: "Jayanthi",
        created_date: new Date().toJSON()



    };
    console.log(todoobj);
    const url = "http://localhost:3000/users"

    axios.post(url, todoobj).then(res => {
        alert("successfully logged in");
        form.reset();
        console.log(res.data);
    });
}
