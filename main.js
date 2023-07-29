// window.addEventListener("load", () => {
//   const from = document.querySelector("#new-task-from");
//   const input = document.querySelector("#new-task-input");

//   const list_el = document.querySelector("#tasks");

//   from.addEventListener("submit", e => {
//     e.preventDefault();
//     const task = input.value;




// //     const task_el = document.createElement("div");
// //     task_el.classList.add("task");

// //     const task_content_el = document.createElement("div");
// //     task_content_el.classList.add("content");

// //     task_el.appendChild(task_content_el);
// //     const task_input_el = document.createElement("input");
// //     task_input_el.classList.add("text");
// //     task_input_el.type = "text";
// //     task_input_el.value = task;
// //     task_input_el.setAttribute("readonly", "readonly ");
// //     task_content_el.appendChild(task_input_el);
// //     const task_actions_el = document.createElement("div");
// //     task_actions_el.classList.add("actions");

// //     const task_edit_el = document.createElement("button");
// //     task_edit_el.classList.add("edit");
// //     task_edit_el.innerHTML = "Edit";

// //     const task_delete_el = document.createElement("button");
// //     task_delete_el.classList.add("Delete");
// //     task_delete_el.innerHTML = "Delete";

// //     task_actions_el.appendChild(task_edit_el);
// //     task_actions_el.appendChild(task_delete_el);

// //     task_el.appendChild(task_actions_el);
// //     list_el.appendChild(task_el);

// //     input.value = "";
// //     task_edit_el.addEventListener("click", () => {
// //       if (task_edit_el.innerText.toLowerCase() == "edit") {
// //         task_input_el.removeAttribute("readonly");
// //         task_input_el.focus();
// //         task_edit_el.innerText = "Save";
// //       } else {
// //         task_input_el.setAttribute("readonly", "readonly");
// //         task_edit_el.innerText = "Edit";
// //       }
// //     });
// //     task_delete_el.addEventListener ("click", () => {
// //       list_el.removeChild(task_el);
// //     })
// //   });
// // });




const inputValue = document.getElementById('new-task-input')
const form = document.getElementById("new-task-from")
const tasksElement = document.getElementById("tasks")
const TaskEdit =document.getElementById("text");

let tasks = JSON.parse(localStorage.getItem('tasks')) || []





const updateTask = (updateButton, inputTag, taskText ) => {

  let newTaskText = ''  


  inputTag.addEventListener('change', ()=>{

    newTaskText = inputTag.value
    if( taskText = '' ) {
      updateButton.addEventListener("click", () => { 
        console.log("hello")
      })
    }
  })

  updateButton.addEventListener("click", () => {
          if (updateButton.innerText.toLowerCase() == "edit") {
            inputTag.removeAttribute("readonly");
            inputTag.focus();
            updateButton.innerText = "Save";
            
          } else {
            inputTag.setAttribute("readonly", "readonly");
            updateButton.innerText = "Edit";


            tasks = tasks.map((item) => item == taskText ? item = newTaskText : item)

            localStorage.setItem('tasks', JSON.stringify(tasks))


          }
          
        })
}



const deleteTask = (deleteButton, taskElement, taskText) => {

  deleteButton.addEventListener ("click", () => {
          tasksElement.removeChild(taskElement);
          
          tasks = tasks.filter(item => item != taskText)

          localStorage.setItem('tasks', JSON.stringify(tasks))

        })

}


const getValue = () => {


  form.addEventListener('submit', (e)=>{

    e.preventDefault()

    // tasks.unshift(inputValue.value)

    localStorage.setItem('tasks', JSON.stringify(tasks))
    
    renderOneElement(inputValue.value)
  
    inputValue.value = '';
  })

}



const renderOneElement = (task) => {

    const task_el = document.createElement("div");
    task_el.classList.add("task");
  
    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");
  
    task_el.appendChild(task_content_el);
    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly ");
    task_content_el.appendChild(task_input_el);
    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");
  
    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML = "Edit";
  
    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("Delete");
    task_delete_el.innerHTML = "Delete";
  
    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);
  
    task_el.appendChild(task_actions_el);
    tasksElement.insertBefore(task_el, tasksElement.firstChild)
    

    deleteTask(task_delete_el, task_el, task)

    updateTask(task_edit_el, task_input_el, task)

}



const render = (tasks) => {

  tasks.forEach(element => {
    
    const task_el = document.createElement("div");
    task_el.classList.add("task");
  
    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");
  
    task_el.appendChild(task_content_el);
    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = element;
    task_input_el.setAttribute("readonly", "readonly ");
    task_content_el.appendChild(task_input_el);
    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");
  
    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML = "Edit";
  
    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("Delete");
    task_delete_el.innerHTML = "Delete";
  
    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);
  
    task_el.appendChild(task_actions_el);
    tasksElement.appendChild(task_el);
    updateTask(task_edit_el, task_input_el, element)
    deleteTask(task_delete_el, task_el, element)

  });

}
 
  
 


const init = () => {


render(tasks)

getValue()


}

document.addEventListener('DOMContentLoaded', init)

