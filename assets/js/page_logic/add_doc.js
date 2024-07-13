end_point = "http://127.0.0.1:8000/"
function submit_doc(){
    form = document.getElementById("myAwesomeDropzone")
    type = document.getElementById("Type").value
    term = document.getElementById("Term").value
    Description = document.getElementById("Description").value
    Judgement_date = document.getElementById("Judgement-Date").value
    Expiry_date = document.getElementById("Expiry-Date").value
    Purpose = document.getElementById("Purpose").value
    First_Party = document.getElementById("First-Party").value
    Second_Party = document.getElementById("Second-Party").value
    Headed_By = document.getElementById("Headed-By").value
    doc_file = document.getElementById("doc_file")
    my_param = new FormData()
    data = {}
    data["type"] = type
    data["term"] = term
    data["Description"] = Description
    data["Judgement_date"] = Judgement_date
    data["Expiry_date"] = Expiry_date
    data["Purpose"] = Purpose
    data["First_Party"] = First_Party
    data["Second_Party"] = Second_Party
    data["Headed_By"] = Headed_By
    if(document.getElementById("no_radio").checked){
        data["case_link"] = false
    }
    else{
        data["case_link"] = true
        data["case"] = document.getElementById("case_name_list").value
    }
    my_param.append("data",JSON.stringify(data))
    my_param.append("file",doc_file.files[0])
    data_to_send={
        method:"POST",
        headers:{
            "X-CSRFToken": window.csrfToken,
            },
        body:my_param
    }
    fetch(end_point+"home/NewDocument/",data_to_send).then(data=>{
        return data.json()
    }).then(parse_data=>{
        console.log(parse_data)
        if(parse_data.status==200){
            const toast = document.getElementById('toast');
            showToast(parse_data.message,"#76eb6a")
            
        }
        else{
            const toast = document.getElementById('toast');
            showToast(parse_data.message,"#f25544")
        }
        form.reset()

        
    })
}


function show_case_list(param){
    if(param=="Yes"){
        document.getElementById("case_name").hidden = false
    }
    else{
        document.getElementById("case_name").hidden = true
    }
}

function showToast(message,color) {
    document.getElementById("myAwesomeDropzone").reset()
    var toast = document.getElementById("toast");
    toast.className = "show";
    toast.innerText = message;
    toast.style.backgroundColor = color
    setTimeout(function(){ toast.className = toast.className.replace("show", "dssssssssssssss"); }, 3000);
  }


  