end_point = "http://localhost:8000/"
function login(){
    data={}
    email=document.getElementById("emailaddress").value;
    paswd=document.getElementById("password").value;
    data["email"]=email
    data["paswd"]=paswd
    data_to_set = {
        method: "POST",
        "Content-Type": "application/json",
        body:JSON.stringify(data)
    }
    console.log(data_to_set)
    fetch(end_point+"login/",data_to_set)
    .then(response=>{
        return response.json()
    }).then(data=>{
        if(data.status==200){
            window.location.href = 'http://localhost:8000/home';
        }
    })
    }
