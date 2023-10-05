const taskResult = document.querySelector(".taskResult");
const personResult = document.querySelector(".personResult");

const btn = document.querySelector(".submit-btn");
const btn2 = document.querySelector(".submit-btn2");
const input = document.querySelector(".task-input");
const input2 = document.querySelector(".person-input");
const formAlert = document.querySelector(".form-alert");

btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const taskNum = input.value;

    try {
        let taskSection = document.querySelector(".taskOne");
        taskSection.innerHTML = '';
        const { data } = await axios.get(`/api/tasks/${taskNum}`, {id: taskNum});
            let task = `
            <h4>Name: ${data.answer.name}</h4>
            <h4>Description: ${data.answer.desc}</h4>
            <h4>ID : ${data.answer.id}</h4> `
            taskSection.innerHTML = task;
            taskSection.classList.add('find');
    } catch (error) {
        console.log(error.response)
    }
    input.value = "";
})



btn2.addEventListener("click", async (e) => {
    e.preventDefault();
    const personNum = input2.value;

    try {
        let personSection = document.querySelector(".personOne");
        personSection.innerHTML = '';
        const { data } = await axios.get(`/api/people/${personNum}`, {id: personNum});
            let person = `
            <h4>Name: ${data.answer.name}</h4>
            <h4>Description: ${data.answer.age}</h4>
            <h4>ID : ${data.answer.id}</h4> `
            personSection.innerHTML = person;
            personSection.classList.add('find');
    } catch (error) {
        console.log(error.response)
    }
    input2.value = "";
})

