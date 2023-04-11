let allTasks = JSON.parse(localStorage.getItem("tasks")) || []

const addTaskBtn = document.querySelector('#add-task-btn')
addTaskBtn.addEventListener('click', createTask)
document.querySelector('#task-input').addEventListener('keydown', enterToAddTask)

let rowId = 0

function createTask() 
{
  const taskInput = document.querySelector('#task-input').value

  if(taskInput === '')
  {
    alert('Put some task')
  }
   else
   {
     allTasks.push(taskInput)
     localStorage.setItem("tasks", JSON.stringify(allTasks))
     const taskSection =  document.querySelector('#task-list')
     const taskLine = document.createElement('li')
     taskLine.setAttribute('data', rowId)
      
     const taskText = document.createElement('span')
     taskText.innerText = taskInput
      
     taskSection.appendChild(taskLine)
     taskLine.appendChild(taskText)
      
     const deleteTaskBtn = document.createElement('button')
     deleteTaskBtn.addEventListener('click', deleteSelfTask)
     deleteTaskBtn.setAttribute('id', 'delete-button' + rowId)
     deleteTaskBtn.setAttribute('class', 'delete-buttons')
     deleteTaskBtn.innerHTML = '<p><i class="fa-solid fa-trash"></i></p>'
      
     taskLine.appendChild(deleteTaskBtn)
      
     document.querySelector('#task-input').value = ''
     rowId++
   }
}

function deleteSelfTask(btn) 
{
  const taskToDelete = btn.currentTarget.parentNode
  taskToDelete.remove()

  let index = taskToDelete.getAttribute('data')
  allTasks.splice(index, 1)

  localStorage.setItem("tasks", JSON.stringify(allTasks))
  UpdateTasks()
}

function UpdateTasks () 
{ 
  document.querySelector('#task-list').innerHTML = ''

  for(let i = 0;i < allTasks.length; i++)
  {
    const taskSection = document.querySelector('#task-list')
    const oldTaskLine = document.createElement('li')
    const oldTaskText = document.createElement('span')
    const oldDeleteTaskBtn = document.createElement('button')

    oldTaskLine.setAttribute('data', i)
    oldTaskText.innerText = allTasks[i] 

    taskSection.appendChild(oldTaskLine)
    oldTaskLine.appendChild(oldTaskText)

    oldDeleteTaskBtn.addEventListener('click', deleteSelfTask)
    oldDeleteTaskBtn.setAttribute('id', 'delete-button' + i)
    oldDeleteTaskBtn.setAttribute('class', 'delete-buttons')
    oldDeleteTaskBtn.innerHTML = '<p><i class="fa-solid fa-trash"></i></p>'
          
    oldTaskLine.appendChild(oldDeleteTaskBtn)     
  }
  rowId = allTasks.length
}

function enterToAddTask (btn)
{
  if(btn.key === 'Enter')
  {
    createTask()
  }
}

UpdateTasks()
