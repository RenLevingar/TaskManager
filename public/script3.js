const result = document.querySelector(".roster");
const result2 = document.querySelector(".roster2");
var editMode = false;

const fetchRoster = async() =>{
    try {
        const {data} = await axios.get('/api/people')
        // console.log(data)   

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
        // console.log(data)   

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

async function assignReset(){
    let people;
    let tasks;
    if(true){
        const {data} = await axios.get('/api/people');
        // console.log(data)
        people = data.x.map(person =>{
            if(person.task == '0'){
                return `${person.id}`;
            }
        })
    }
    console.log(people);

    // if(true){
    //     const {data} = await axios.get('/api/tasks');
    //     // console.log(data)
    //     tasks = data.map(task =>{
    //         if(task.person == '0'){
    //             return `${task.id}`;
    //         }
    //     })
    // }
    // console.log(tasks);

    if(true){
        const {data} = await axios.get('/api/tasks');
        // console.log(data)
        data.map(task =>{
            // console.log(task.person)
            let got = false;
            for(let i = 0; i < people.length; i++){
                if(task.person == people[i] || task.person == '0' || task.person == undefined){
                    // console.log('success')
                    got = true;
                }
            }
            // console.log(got)

            if(!got){
                fetch(`/api/tasks/${task.id}`, {
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({person : '0'})
                })
            }
        })
    }

    // let tasks;
    
    // if(true){
    //     const {data} = await axios.get('/api/people');
    //     // console.log(data)
    //     console.log(data.x)
    //     data.x.map(person =>{
    //         // console.log(task.person)
    //         let got = false;
    //         for(let i = 0; i < tasks.length; i++){
    //             if(person.task == tasks[i] || person.task == '0' && person.task == undefined){
    //                 // console.log('success')
    //                 got = true;
    //             }
    //         }
    //         // console.log(got)

    //         if(!got){
    //             fetch(`/api/people/${person.id}`, {
    //                 method: 'PUT',
    //                 headers: {'Content-Type': 'application/json'},
    //                 body: JSON.stringify({task : '0'})
    //             })
    //         }
    //     })
    // }
}