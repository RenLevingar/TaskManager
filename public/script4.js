const taskResult = document.querySelector(".taskResult");
const personResult = document.querySelector(".personResult");

const fetchTask = async(y) =>{
    try {
        const {data} = await axios.get(`/api/tasks/${y}`)

        const taskList = data.map((task) => {
                return `<h5><strong>Task:</strong> ${task.id} <strong>Person Number:</strong>${task.person}</h5>`;
        })
        taskResult.innerHTML = taskList.join("");
    } catch (error) {
        console.log(error);
        // formAlert.textContent = error.response.data.msg;
    }
}

// const fetchPerson = async() =>{
//     try {
//         const {data} = await axios.get('/api/people')
//         console.log(data)   

//         const personList = data.x.map((person) => {
//                 return `<h5><strong>Name:</strong> ${person.name} <strong>Age:</strong>${person.age} <strong>Task:</strong>${person.task}</h5>`;
//         })
//         result.innerHTML = personList.join("");
//     } catch (error) {
//         console.log(error);
//         // formAlert.textContent = error.response.data.msg;
//     }
// }

const btn = document.querySelector(".submit-btn");
const btn2 = document.querySelector(".submit-btn2");
const input = document.querySelector(".task-input");
const input2 = document.querySelector(".person-input");
const formAlert = document.querySelector(".form-alert");

btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const taskNum = input.value;

    try {
        const { data } = await axios.get(`/api/tasks/${taskNum}`, {id: taskNum});
            const h5 = document.createElement('h5');
            taskResult.appendChild(h5);
            h5.textContent = "123";
            // fetchTask(y);
    } catch (error) {
        console.log(error.response)
        formAlert.textContent = error.response.data.msg;
    }
    input.value = "";
})



btn2.addEventListener("click", async (e) => {
    e.preventDefault();
    const personNum = input2.value;

    try {
            const {data} = await axios.post(`/api/task/${personNum}`);
            const h5 = document.createElement('h5');
            result2.appendChild(h5);
            h5.textContent = data.person;
            // fetchPerson();
    } catch (error) {
        console.log(error.response)
        formAlert.textContent = error.response.data.msg;
    }
    input2.value = "";
})