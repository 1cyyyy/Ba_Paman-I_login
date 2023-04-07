function show(){
    var password = document.querySelector("#pass");
  
    if (password.type === "password"){
        password.type = "text";
    }else{
        password.type = "password";
    }
  }
  
  function validate(){
  
    var user = document.querySelector("#user");
    var pass = document.querySelector("#pass");
    var fail = document.querySelector("#error");
    var error = "Log-in Error.";
    var success = "Successful Log-In";
  
    
     if (user.value.length == 0 && pass.value.length != 0)
      { 
        fail.innerHTML = "Please enter your username."; 
        console.log(error);
      } 
    
      if (user.value.length != 0 && pass.value.length == 0)
      { 
        fail.innerHTML = "Please enter your password.";
        console.log(error);
      } 
      
      if (user.value.length == 0 && pass.value.length == 0)
      { 
        fail.innerHTML = "Please enter your username and password.";
        console.log(error);
      } 
  
      if (user.value.length != 0 && pass.value.length != 0)
      { 
        fail.innerHTML = ""; 	
        window.location.href = "files/index.html";
        console.log(success);
      }
  }
