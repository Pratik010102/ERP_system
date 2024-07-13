end_point = "http://127.0.0.1:8000/"
function submit_to_do(){
    
    data_to_submit = {}
    data_to_submit["description"] = document.getElementById("description").value
    data_to_submit["start_date"] = document.getElementById("start_date").value
    data_to_submit["end_date"] = document.getElementById("end_date").value
    data_to_submit["case_name"] = document.getElementById("case_name").value
    data_to_submit["advocate"] = document.getElementById("advocate").value
    data_to_send = {
        "method":"POST",
        "Content-type":"Application/json",
        body:JSON.stringify(data_to_submit)
    }
    fetch(end_point+"home/add_todo",data_to_send).then(data=>{
        return data.json()
    }).then(parse_data=>{
        if(parse_data.status==200){
            const toast = document.getElementById('toast');
            toast.classList.remove('hidden');
            showToast(parse_data.message,"#76eb6a")
            $('#add-new-task-modal').modal('hide');
        }
        else{
            const toast = document.getElementById('toast');
            toast.classList.remove('hidden');
            showToast(parse_data.message,"#f25544")
        }
        
    })
    location.reload();

}

function showToast(message,color) {
    var toast = document.getElementById("toast");
    toast.className = "show";
    toast.innerText = message;
    toast.style.backgroundColor = color
    setTimeout(function(){ toast.className = toast.className.replace("show", "dssssssssssssss"); }, 3000);
  }


  function change_status(status,id){
    data_to_send = {"status":status,"id":id}
    data_to_set = {
        method: "POST",
        "Content-Type": "application/json",
        body:JSON.stringify(data_to_send)
    }
    fetch(end_point+"home/change_to_do_status",data_to_set).then(data=>{
        return data.json()
    }).then(parse_data=>{
        if(parse_data.status==200){
            div_tag = document.getElementById(id)
            if(div_tag.classList.contains("bg-danger-lighten")){
                div_tag.classList.remove("bg-danger-lighten")  
            }
            else if(div_tag.classList.contains("bg-warning-lighten")){
                div_tag.classList.remove("bg-warning-lighten")  

            }
            else if(div_tag.classList.contains("bg-success-lighten")){
                div_tag.classList.remove("bg-success-lighten")  

            }
            
            if(status=="pending"){
                div_tag.classList.add("bg-danger-lighten")
            }
            else if(status=="comp"){
                div_tag.classList.add("bg-success-lighten")
            }
            const toast = document.getElementById('toast');
            toast.classList.remove('hidden');
            showToast(parse_data.message,"#76eb6a")
        }
        else{
            const toast = document.getElementById('toast');
            toast.classList.remove('hidden');
            showToast(parse_data.message,"#f25544")
            
        }
        
    })
    setTimeout(function() {
        location.reload()
      }, 1000);
  }


  function filter_todo(status){
    status_param= new URLSearchParams()
    status_param.append("status",status)
    data_to_set={
        "method":"GET",
        "Content-type":"application/json",
    }
    fetch(end_point+"home/filter_todo?"+status_param.toString(),data_to_set).then(response=>{ return response.json()}).then(response=>{

        var container = document.getElementById('toDoListContainer');
        container.innerHTML = ""
    
    response.to_do_list.forEach(function(to_do) {
      var cardClass = '';
      if (to_do.status === 'pending') {
        cardClass = 'bg-danger-lighten border-danger border';
      } 
      
      else if (to_do.status === 'comp') {
        cardClass = 'bg-success-lighten border-success border';
      }
      else if (to_do.status === 'upcomming') {
        cardClass = 'bg-warning-lighten border-success border';
      }
      
      else if (to_do.status === 'com') {
        cardClass = 'bg-success-lighten border-success border';
      }
      
      else {
        cardClass = 'bg-warning-lighten border-warning border';
      }

      var cardHTML = `
      <div class="col-xxl-12 col-xl-12">
      <div class="card d-block ${cardClass}" id="${to_do.id}">
        <div class="card-body">
          <div class="dropdown card-widgets">
            <a href="#" class="dropdown-toggle arrow-none" data-bs-toggle="dropdown" aria-expanded="false">
              <i class='uil uil-ellipsis-h'></i>
            </a>
            <div class="dropdown-menu dropdown-menu-end">
              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item">
                <i class='uil uil-edit me-1'></i>Edit
              </a>
              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item text-danger">
                <i class='uil uil-trash-alt me-1'></i>Delete
              </a>
            </div> <!-- end dropdown menu-->
          </div> <!-- end dropdown-->
          
          <div class="form-check float-start">
            <input type="checkbox" class="form-check-input" id="completedCheck" ${to_do.status === 'comp' ? 'checked' : ''} onclick="change_status('${to_do.status === 'comp' ? 'pending' : 'comp'}', '${to_do.id}')">
            <label class="form-check-label" for="completedCheck">
              Mark as completed
            </label>
          </div> <!-- end form-check-->
          
          <div class="clearfix"></div>

          <h3 class="mt-3">${to_do.description}</h3>

          <div class="row">
            <div class="col-6">
              <h4 class="mt-2 mb-1 text-muted fw-bold font-16 text-uppercase">Case </h4>
              <div class="d-flex">
                <i class='ri-contacts-book-2-line font-18 text-warning me-1'></i>
                <div>
                  <h5 class="mt-1 font-14">${to_do.tital}</h5>
                </div>
              </div>
            </div>
            <div class="col-6">
              <h4 class="mt-2 mb-1 text-muted fw-bold font-16 text-uppercase">Assign To</h4>
              <div class="d-flex">
                <i class='ri-account-box-line font-18 text-warning me-1'></i>
                <div>
                  <h5 class="mt-1 font-14">${to_do.advocate_name}</h5>
                </div>
              </div>
            </div>
            <div class="col-6">
              <h4 class="mt-2 mb-1 text-muted fw-bold font-16 text-uppercase">Assign By </h4>
              <div class="d-flex">
                <i class='ri-account-pin-box-line font-18 text-warning me-1'></i>
                <div>
                  <h5 class="mt-1 font-14">${to_do.assign_by}</h5>
                </div>
              </div>
            </div>
            <div class="col-6">
              <p class="mt-2 mb-1 text-muted fw-bold font-16 text-uppercase">Due Date</p>
              <div class="d-flex">
                <i class='uil uil-schedule font-18 text-warning me-1'></i>
                <div>
                  <h5 class="mt-1 font-14">${to_do.end_date}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        
      `;

      container.insertAdjacentHTML('beforeend', cardHTML);
    });
    })

  }