end_point = "http://localhost:8000/"
function signup(){
    alert("high")
    data={}
    fullname=document.getElementById("fullname").value;
    email=document.getElementById("emailaddress").value;
    paswd=document.getElementById("password").value;
    data["fullname"]=fullname
    data["email"]=email
    data["paswd"]=paswd
    data_to_set = {
        method: "POST",
        "Content-Type": "application/json",
        body:JSON.stringify(data)
    }
    fetch(end_point+"signup/",data_to_set)
    .then(response=>{
        return response.json()
    }).then(data=>{
        if(data.status==200){
            window.location.href = 'http://localhost:8000/login';
        }
    })
    }

    