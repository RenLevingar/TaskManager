const result = document.querySelector(".roster");
const result2 = document.querySelector(".roster2");
var editMode = false;

const fetchRoster = async() =>{
    try {
        const {data} = await axios.get('/api/people')
        console.log(data)   

        const personList = data.x.map((person) => {
                return `<h5><strong>Name:</strong> ${person.name} <strong>Age:</strong>${person.age} <strong>Task:</strong>${person.task}</h5>`;
        })
        result.innerHTML = personList.join("");
    } catch (error) {
        console.log(error);
        // formAlert.textContent = error.response.data.msg;
    }
}

const fetchRoster2 = async() =>{
    try {
        const {data} = await axios.get('/api/tasks')
        console.log(data)   

        const taskList = data.map((task) => {
                return `<h5><strong>Task:</strong> ${task.id} <strong>Person Number:</strong>${task.person}</h5>`;
        })
        result2.innerHTML = taskList.join("");
    } catch (error) {
        console.log(error);
        // formAlert.textContent = error.response.data.msg;
    }
}
fetchRoster2();
fetchRoster();