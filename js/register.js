
function register() {
    event.preventDefault();

    const fname = document.querySelector("#fname").value;
    // alert('result:' + name);
    const lname = document.querySelector("#lname").value;
    const email = document.querySelector("#email").value;
    let gender = "";//document.querySelector("#gender").value;
    const ele = document.getElementsByName('gender');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            gender = ele[i].value;
        }
    }

    const address = document.querySelector("#address").value;

    const city = document.querySelector("#city").value;
    const state = document.querySelector("#state").value;
    const form = document.querySelector("#regform");


    // alert('result:' + state);

    if (fname == null || fname.trim() == "") {
        alert("Enter the valid firstname")
        return false;
    }
    if (fname.length < 3) {
        alert("First Name must be minimum 3 characters");
        return false;
    }
    if (lname == null || lname.trim() == "") {
        alert("Enter last name")
        return false;
    }
    if (email == null || email.trim() == "") {
        alert("Enter the valid emailid")
        return false;
    }


    const userObj = {
        fname: fname,
        lname: lname,
        email: email,
        gender: gender,
        address: address,
        city: city,
        state: state,
        created_by: "Jayanthi",
        created_date: new Date().toJSON(),
        modified_by: "Jayanthi",
        modified_date: new Date().toJSON(),
        role: "user"



    };
    console.log(userObj);
    const url = "http://localhost:3000/users"

    axios.post(url, userObj).then(res => {
        console.log(res.data);
        alert("successfully Registered");
        form.reset();

    });
}
