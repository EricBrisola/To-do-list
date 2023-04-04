const addTaskBtn = document.querySelector('#add-task-btn')
addTaskBtn.addEventListener('click', createTask)

const reloadTaskBtn = document.querySelector('#reload-btn')
reloadTaskBtn.addEventListener('click', reloadTasks)

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
       localStorage.setItem('task' + rowId, taskInput)
       const taskSection =  document.querySelector('#task-list')
       const taskLine = document.createElement('li')
       taskLine.setAttribute('id', 'row' + rowId)
      
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
  checkLocalStorage(btn)
}

function reloadTasks () 
{
  const allTasks = document.querySelectorAll('li')

  if(allTasks.length > 0 && localStorage.length > 1)
  {
    alert ('Cant reload due to duplication of tasks')
  }
   else if(localStorage.length < 1)
   {
     alert('No tasks to reload')
   }
   else
   {
     for(let i = 0;i < localStorage.length; i++)
     {
       const taskSection = document.querySelector('#task-list')
       const oldTaskLine = document.createElement('li')
       const oldTaskText = document.createElement('span')
       const oldDeleteTaskBtn = document.createElement('button')

       oldTaskLine.setAttribute('id', 'row' + i)
       oldTaskText.innerText = localStorage.getItem('task' + i)

       taskSection.appendChild(oldTaskLine)
       oldTaskLine.appendChild(oldTaskText)

       oldDeleteTaskBtn.addEventListener('click', deleteSelfTask)
       oldDeleteTaskBtn.setAttribute('id', 'delete-button' + i)
       oldDeleteTaskBtn.setAttribute('class', 'delete-buttons')
       oldDeleteTaskBtn.innerHTML = '<p><i class="fa-solid fa-trash"></i></p>'
          
       oldTaskLine.appendChild(oldDeleteTaskBtn)     
      }
     localStorage.clear()
   }
   rowId = 0
}

function checkLocalStorage ()
{
  let taskList = document.querySelectorAll('li')
  

  for(let j = 0; j < taskList.length; j++)
  {
    if(taskList[j].innerText != localStorage.getItem('task' + j))
     {
      console.log(taskList[j].innerText)
      localStorage.removeItem('task' + j)
      break
     }
  }  
}

