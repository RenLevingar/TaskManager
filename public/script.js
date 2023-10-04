const result = document.querySelector(".result");
var editMode = false;

const fetchTasks = async() =>{
    try {
        const {data} = await axios.get('/api/tasks')

        const taskList = data.map((task) => {
            if(task.status){
                return `<div class="divBG2"><h5 class="contBox"><label class="container done-task">${task.name}
                <input type="checkbox" id="item${task.id}" onclick="changeStatus('${task.name}', ${task.id}, '${task.desc}', ${task.status})" checked="checked">
                <span class="checkmark" checked="checked"></span>
              </label><div class="btnHolder"><button onclick="nameEdit('${task.id}', '${task.name}', '${task.desc}', '${task.person}')" disabled class="brkBTN">Edit</button> <button class="brkBTN" onclick="deleteTask(${task.id})" disabled>Delete</button></div><h6 class="done-task">Desc: ${task.desc}</h6></h5></div>`;
            } else {
                return `<div class="divBG"><h5 class="contBox"><label id='task${task.id}' class="container">${task.name}
                <input type="checkbox" id="item${task.id}" onclick="changeStatus('${task.name}', ${task.id}, '${task.desc}', ${task.status})">
                <span class="checkmark"></span>
              </label><div class="btnHolder"><button onclick="nameEdit('${task.id}', '${task.name}', '${task.desc}', '${task.person}')">Edit</button> <button onclick="deleteTask(${task.id})">Delete</button></div> <h6>Desc: ${task.desc}</h6></h5>
              </div>`;
            }
        })
        result.innerHTML = taskList.join("");
    } catch (error) {
        // console.log(error.response);
        // formAlert.textContent = error.response.data.msg;
    }
}
fetchTasks();

// HTML
const btn = document.querySelector(".submit-btn");
const input = document.querySelector(".form-input");
const input2 = document.querySelector(".desc-input");
const input3 = document.querySelector(".id-input");
const formAlert = document.querySelector(".form-alert");

btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const nameValue = input.value;
    const descValue = input2.value;
    const idValue = input3.value;

    try {
        if(editMode == false) {
            console.log(idValue);
            const {data} = await axios.post('/api/tasks', {name: nameValue, desc: descValue, person: idValue});
            const h5 = document.createElement('h5');
            result.appendChild(h5);
            h5.textContent = data.task;
        } else {
            const newTask = input.value;
            const newDesc = input2.value;
            const newID = input3.value;
            fetch(`/api/tasks/${currentID}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name: newTask, desc: newDesc, status: false, person: newID})
            })
            fetchTasks();
            editMode = false;
        }
        fetchTasks();
    } catch (error) {
        console.log(error.response)
        formAlert.textContent = error.response.data.msg;
    }
    input.value = "";
    input2.value = "";
    input3.value = "";
})

async function deleteTask(id) {
    await fetch(`/api/tasks/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })
    fetchTasks();
}

var currentID = '';

function nameEdit(pId, pName, pDesc, pAssign) {
    editMode = true;
    input.value = pName;
    currentID = pId;
    input2.value = pDesc;
    input3.value = pAssign;
}

async function changeStatus(name, id, desc, status) {
    try {
        let element = document.getElementById(`item${id}`);
        console.log(element)
        console.log(element.checked)
        if(element.checked){
            console.log('check')
            fetch(`/api/tasks/${id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({status:true})
            })
            console.log('finished')
            fetchTasks();
        }else{
            console.log('no')
            fetch(`/api/tasks/${id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({status:false})
            })
            fetchTasks()
        }
    } catch (error) {
        console.log(error)
    }
    
    fetchTasks();
}