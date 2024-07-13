end_point = "http://localhost:8000/"
function add_case(){
    var inputContainer1 = document.getElementById('inputContainer');
    var number_of_item1 = inputContainer1.childElementCount
    data_to_submit = {}
    data_to_submit["court"] = document.getElementById("Court").value
    data_to_submit["case-type"] = document.getElementById("case-type").value
    console.log("pppppppppppppppp",document.getElementById("case-type").value)
    data_to_submit["case_number"] = document.getElementById("case-number").value
    data_to_submit["year"] = document.getElementById("year").value
    // data_to_submit["case_date"] = document.getElementById("case-date").value
    data_to_submit["crn_no"] = document.getElementById("crn_no").value
    data_to_submit["high_court"] = document.getElementById("high_court").value
    data_to_submit["stateDropdown"] = document.getElementById("stateDropdown").value
    data_to_submit["districtDropdown"] = document.getElementById("districtDropdown").value
    data_to_submit["Court-Establishment"] = document.getElementById("Court-Establishment").value
    data_to_submit["case-hall"] = document.getElementById("case-hall").value
    data_to_submit["case-floor"] = document.getElementById("case-floor").value
    data_to_submit["classification"] = document.getElementById("classification").value
    data_to_submit["Title"] = document.getElementById("Title").value
    // data_to_submit["Title"] = document.getElementById("Title").value
    data_to_submit["description"] = document.getElementById("description").value
    data_to_submit["Honble_Judge"] = document.getElementById("Honble_Judge").value
    data_to_submit["ref_by"] = document.getElementById("ref_by").value
    data_to_submit["Section"] = document.getElementById("Section").value
    data_to_submit["Priority"] = document.getElementById("Priority").value
    data_to_submit["Act"] = document.getElementById("Act").value
    data_to_submit["under-section"] = document.getElementById("under-section").value
    data_to_submit["FIR_no"] = document.getElementById("FIR_no").value
    data_to_submit["FIR_year"] = document.getElementById("FIR_year").value
    data_to_submit["affidavit-vakalath-date"] = document.getElementById("affidavit-vakalath-date").value
    
    data_to_submit["FIR_Police_station"] = document.getElementById("FIR_Police_station").value
    data_to_submit["petitioner-1"] = document.getElementById("petitioner-1").value
    data_to_submit["Respondent-1"] = document.getElementById("Respondent-1").value
    data_to_submit["date-filling-1"] = document.getElementById("date-filling-1").value
    
    if (document.getElementById("Yes_affidavit").checked)
    {
    data_to_submit["affidavit"] = true
    }
    else if(document.getElementById("No_affidavit").checked)
    {
    data_to_submit["affidavit"] = false
    }

    if (document.getElementById("cnr_check_yes").checked)
    {
    data_to_submit["cnr_check"] = true
    }
    else if(document.getElementById("cnr_check_no").checked)
    {
    data_to_submit["cnr_check"] = false
    }

    if(document.getElementById("not_app_affidavit").checked){
        data_to_submit["affidavit"] = document.getElementById("not_app_affidavit").value
    }
    else if(document.getElementById("Yes_affidavit").checked){
        data_to_submit["affidavit"] = document.getElementById("Yes_affidavit").value
    }
    else if(document.getElementById("No_affidavit").checked){
        data_to_submit["affidavit"] = document.getElementById("No_affidavit").value
    }
    data_to_submit["advocate"] = document.getElementById("advocate").value
    data_to_submit["team"] = document.getElementById("team").value
    opponent_list = []
    for(i=0; i<=number_of_item1;i++){
        opponent_data={}
        opponent_data["full_name"] = document.getElementById("fullName"+i).value
        opponent_data["phone"] = document.getElementById("phoneNo"+i).value
        opponent_data["email"] = document.getElementById("email"+i).value
        opponent_data["case_number"] = document.getElementById("case-number").value
        opponent_list.push(opponent_data)

    }

    var inputContainer2 = document.getElementById('inputContainer2');
    var number_of_item2 = inputContainer2.childElementCount
    opponents_advocate = []
    for(i=0; i<=number_of_item2;i++){
        opponent_data={}
        opponent_data["full_name"] = document.getElementById("fullNametwo"+i).value
        opponent_data["phone"] = document.getElementById("phoneNotwo"+i).value
        opponent_data["email"] = document.getElementById("emailtwo"+i).value
        opponent_data["case_number"] = document.getElementById("case-number").value
        opponents_advocate.push(opponent_data)

    }
    data_to_submit["advocate_detail"] = opponents_advocate
    data_to_submit["opponent_list"] = opponent_list

    data_to_send={
        method : "POST",
        headers :{
            "Content-type":"application/json"
        },
        body:JSON.stringify(data_to_submit)
    }

    fetch(end_point+"home/NewCase/",data_to_send).then(data=>{
        return data.json()
    }).then(parse_data=>{
        const toast = document.getElementById('toast');
        toast.classList.remove('hidden');
        showToast(parse_data.message,"#76eb6a")
        form_tag.reset()
    })
}

// function showToast(message,color) {
//     var toast = document.getElementById("toast");
//     toast.className = "show";
//     toast.innerText = message;
//     toast.style.backgroundColor = color
//     setTimeout(function(){ toast.className = toast.className.replace("show", "dssssssssssssss"); }, 3000);
//   }


function showfields(obj){
    console.log(obj.value)
    if(obj.value=="High Court"){
        document.getElementById("cnr_div").hidden=false
    }
}