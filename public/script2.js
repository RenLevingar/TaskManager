const result2 = document.querySelector(".result2");
var editMode = false;

const fetchPeople = async() =>{
    try {
        const {data} = await axios.get('/api/people')
        console.log(data)   

        const personList = data.x.map((person) => {
                return `<br><h5>${person.name}, ${person.age}</h5><button onclick="changePerson(${person.id}, '${person.name}', ${person.age}, '${person.task}')">Edit</button><br><button onclick="deletePerson(${person.id})">Delete</button><br><br>`;
        })
        result2.innerHTML = personList.join("");
    } catch (error) {
        console.log(error);
        // formAlert.textContent = error.response.data.msg;
    }
}
fetchPeople();

// HTML
const btn = document.querySelector(".submit-btn");
const input = document.querySelector(".personNameInput");
const input2 = document.querySelector(".personAgeInput");
const input3 = document.querySelector(".taskInput");
const formAlert = document.querySelector(".form-alert");

btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const nameValue = input.value;
    const ageValue = input2.value;
    const taskValue = input3.value;

    try {
        if(editMode == false) {
            const {data} = await axios.post('/api/people', {name: nameValue, age: ageValue, task: taskValue});
            const h5 = document.createElement('h5');
            result2.appendChild(h5);
            h5.textContent = data.person;
        } else {
            const newPerson = input.value;
            const newAge = input2.value;
            const newTask = input3.value;
            fetch(`/api/people/${currentID}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name: newPerson, age: newAge, status: false, task: newTask})
            })
            fetchPeople();
            editMode = false;
        }
        fetchPeople();
    } catch (error) {
        console.log(error.response)
        formAlert.textContent = error.response.data.msg;
    }
    input.value = "";
    input2.value = "";
    input3.value = "";
})

async function deletePerson(id) {
    await fetch(`/api/people/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })
    fetchPeople();
}

var currentID = '';

function changePerson(pId, pName, pAge, pTask) {
    editMode = true;
    input.value = pName;
    currentID = pId;
    input2.value = pAge;
    input3.value = pTask;
}