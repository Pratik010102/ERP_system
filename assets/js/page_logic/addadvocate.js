end_point = "http://127.0.0.1:8000/"
function add_advocate(){
    var form_tag = document.getElementById("new_advocate")
    var data_to_submit = {}
    data_to_submit["full_name"] = document.getElementById("full-name").value;
    data_to_submit["email"] = document.getElementById("email").value;
    data_to_submit["phone_no"] = document.getElementById("phone-no").value;
    data_to_submit["adv_age"] = document.getElementById("adv-age").value;
    data_to_submit["father_name"] = document.getElementById("father-name").value;
    data_to_submit["company_name"] = document.getElementById("company-name").value;
    data_to_submit["website_1"] = document.getElementById("website-1").value;
    data_to_submit["tin_1"] = document.getElementById("tin-1").value;
    data_to_submit["gst_id_no"] = document.getElementById("gst-id-no").value;
    data_to_submit["permanent-acc-no"] = document.getElementById("permanent-acc-no").value;
    data_to_submit["hourly_rate"] = document.getElementById("hourly-rate").value;
    data_to_submit["address_line_1"] = document.getElementById("address-line-1").value;
    data_to_submit["address_line_2"] = document.getElementById("address-line-2").value;
    data_to_submit["country-1"] = document.getElementById("country-1").value;
    data_to_submit["state1"] = document.getElementById("state1").value;
    data_to_submit["city1"] = document.getElementById("city1").value;
    data_to_submit["zip_postal_code"] = document.getElementById("zip-postal-code").value;
    data_to_submit["home_address_1"] = document.getElementById("home-address-1").value;
    data_to_submit["home-address-2"] = document.getElementById("home-address-2").value;
    data_to_submit["country-2"] = document.getElementById("country-2").value;
    data_to_submit["state-2"] = document.getElementById("state-2").value;
    data_to_submit["city2"] = document.getElementById("city2").value;
    data_to_submit["home_zip_postal_code"] = document.getElementById("home-zip-postal-code").value;



    var inputContainer = document.getElementById('inputContainer');
    item = inputContainer.childElementCount
    list_of_item = []
    for(i=0;i<=item;i++){
        point_of_con = {}
        point_of_con["fullName"] = document.getElementById("fullName"+i).value
        point_of_con["email"] = document.getElementById("email"+i).value
        point_of_con["phoneNo"] = document.getElementById("phoneNo"+i).value
        point_of_con["designation"] = document.getElementById("designation"+i).value
        list_of_item.push(point_of_con)
    }
    data_to_submit["point_of_con"] = list_of_item
    data_to_send={
        method : "POST",
        headers :{
            "Content-type":"application/json"
        },
        body:JSON.stringify(data_to_submit)
    }

    fetch(end_point+"home/NewAdvocate",data_to_send).then(data=>{
        return data.json()
    }).then(parse_data=>{
        const toast = document.getElementById('toast');
        toast.classList.remove('hidden');
        showToast(parse_data.message,"#76eb6a")
        form_tag.reset()
    })
}

function showToast(message,color) {
    var toast = document.getElementById("toast");
    toast.className = "show";
    toast.innerText = message;
    toast.style.backgroundColor = color
    setTimeout(function(){ toast.className = toast.className.replace("show", "dssssssssssssss"); }, 3000);
  }