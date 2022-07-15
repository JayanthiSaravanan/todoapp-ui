
    function loginDetails() {
        event.preventDefault();
  
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
  
        //alert('result:' + email  + password );
  
        // alert('result:' + email);
        // alert('result:' + password);
  
        console.log('result:' + email);
        console.log('result:' + password);
  
        if (email == null || email.trim() == "") {
          alert("enter the valid emailid")
          return false;
  
        }
  
        if (password == null || password.trim() == "") {
          alert(" enter the valid password ")
          return false;
        }
  
        // alert('successfully Loggedin');
      }