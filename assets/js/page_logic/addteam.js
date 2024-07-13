end_point = "http://localhost:8000/"
function add_team(){
    var form_tag = document.getElementById("team-mem")
    var inputContainer = document.getElementById('inputContainer');
    item = inputContainer.childElementCount
    item_list=[]
    for(i=0;i<=item;i++){
        var data_to_submit = {}
        data_to_submit["firstName"] = document.getElementById("firstName"+i).value;
        data_to_submit["last_name"] = document.getElementById("lastName"+i).value
        data_to_submit["designation"] = document.getElementById("designation"+i).value
        data_to_submit["email"] = document.getElementById("email"+i).value
        data_to_submit["number"] = document.getElementById("mobileNumber"+i).value
        item_list.push(data_to_submit)
    }
    

    data_to_send={
        method : "POST",
        headers :{
            "Content-type":"application/json"
        },
        body:JSON.stringify(item_list)
    }

    fetch(end_point+"home/addmember/",data_to_send).then(data=>{
        return data.json()
    }).then(parse_data=>{
        if(parse_data.status==200){
            const toast = document.getElementById('toast');
            toast.classList.remove('hidden');
            showToast(parse_data.message,"#76eb6a")
            form_tag.reset()
        }
        else{
            const toast = document.getElementById('toast');
            toast.classList.remove('hidden');
            showToast(parse_data.message,"#f25544")
        }
        
    })
}

function showToast(message,color) {
    var toast = document.getElementById("toast");
    toast.className = "show";
    toast.innerText = message;
    toast.style.backgroundColor = color
    setTimeout(function(){ toast.className = toast.className.replace("show", "dssssssssssssss"); }, 3000);
  }