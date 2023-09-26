const result = document.querySelector(".result");
var editMode = false;

const fetchTasks = async() =>{
    try {
        const {data} = await axios.get('/api/tasks')
        console.log(data);

        const taskList = data.data.map((task) => {
            if(task.status){
                return `<h5>${task.name}<button onclick="changeStatus('${task.name}', ${task.id}, '${task.description}', ${task.status})">Done</button><h6>Desc: ${task.description}</h6></h5>`;
            } else {
                return `<h5>${task.name} <button onclick="nameEdit('${task.id}', '${task.name}', '${task.description}')">Edit</button> <button onclick="deleteTask(${task.id})">Delete</button> <button onclick="changeStatus('${task.name}', ${task.id}, '${task.description}', ${task.status})">To-Do</button><h6>Desc: ${task.description}</h6></h5>`;
            }
        })
        result.innerHTML = taskList.join("");
    } catch (error) {
        // console.log(error.response);
        formAlert.textContent = error.response.data.msg;
    }
}
fetchTasks();

// HTML
const btn = document.querySelector(".submit-btn");
const input = document.querySelector(".form-input");
const input2 = document.querySelector(".desc-input");
const formAlert = document.querySelector(".form-alert");

btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const nameValue = input.value;
    const descValue = input2.value;

    try {
        if(editMode == false) {
            const {data} = await axios.post('/api/tasks', {name: nameValue, description: descValue});
            const h5 = document.createElement('h5');
            result.appendChild(h5);
            h5.textContent = data.task;
        } else {
            const newTask = input.value;
            const newDesc = input2.value;
            fetch(`/api/tasks/${currentID}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name: newTask, description: newDesc, status: false})
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
})

function deleteTask(id) {
    fetch(`/api/tasks/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })
    fetchTasks();
}

var currentID = '';

function nameEdit(pId, pName, pDesc) {
    editMode = true;
    input.value = pName;
    currentID = pId;
    input2.value = pDesc;
}

function changeStatus(name, id, description, status) {
    if(status == true){
        console.log('it was true')
        fetch(`/api/tasks/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name: name, description: description, status: false})
        })
        fetchTasks();
    } else {
        console.log('it was false')
        fetch(`/api/tasks/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name: name, description: description, status: true})
        })
        fetchTasks();
    }
}