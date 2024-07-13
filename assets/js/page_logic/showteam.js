end_point = "http://localhost:8000/"
page_number=1
function nextPage(){
page_number = page_number+1
show_table()

}

function previousPage(){
    page_number = page_number-1
    show_table()

}

window.onload = function render_table(){
    
}


function show_table(){
    var tableBody = document.getElementById('tbody_id');
my_param= new URLSearchParams()
my_param.append("page_number",page_number)
my_param.append("database","Team")
data_to_set = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }

}
tableBody.innerHTML = '';
fetch(end_point+"home/team_pagi?"+my_param.toString(),data_to_set).then(data=>{
    return data.json()
}).then(new_data=>{
    for(i=0;i<=new_data.data.length-1;i++){
        var row = document.createElement('tr');
        row.innerHTML = `
        <td>${i + 1}</td>
        <td>${new_data.data[i].first_name}</td>
        <td>${new_data.data[i].last_name}</td>
        <td>${new_data.data[i].designation}</td>
        <td>${new_data.data[i].email}</td>
        <td>${new_data.data[i].number}</td>
        <td class="table-action">
            <a href="javascript: void(0);" class="action-icon"> <i class="mdi mdi-eye"></i></a>
            <a href="javascript: void(0);" class="action-icon"> <i class="mdi mdi-pencil"></i></a>
            <a href="javascript: void(0);" class="action-icon"> <i class="ri-file-paper-2-line"></i></a>
            <a href="javascript: void(0);" class="action-icon"> <i class="mdi mdi-delete" onclick="delete_item(${new_data.data[i].member_id})"></i></a>
        </td>
    `;
    tableBody.appendChild(row);
    }

})
}



function delete_item(item_id){
    delete_param = new URLSearchParams()
    delete_param.append("id",item_id)
    delete_param.append("database","team_member")
    data_to_set={
        "method":"GET",
        "Content-type":"application/json",
    }
    if (window.confirm("Are you sure you want to delete this item?")){
        fetch(end_point+"home/delete_record?"+delete_param.toString(),data_to_set).then(data=>{
            return data.json()
        }).then(parse_data=>{
            if(parse_data.status==200){
                const toast = document.getElementById('toast');
                toast.classList.remove('hidden');
                showToast(parse_data.message,"#f25544")
                show_table()
            }
            else{
                const toast = document.getElementById('toast');
                toast.classList.remove('hidden');
                showToast(parse_data.message,"#f25544")
                show_table()
            }
            
        })
    }

    
}

function showToast(message,color) {
    var toast = document.getElementById("toast");
    toast.className = "show";
    toast.innerText = message;
    toast.style.backgroundColor = color
    setTimeout(function(){ toast.className = toast.className.replace("show", "dssssssssssssss"); }, 3000);
  }                           	 