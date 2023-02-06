function createTask() {

  const taskInput = document.getElementById('taskInput').value

    if(taskInput === '') {
      
      alert('Put some task')
    } else {

      const taskSection =  document.getElementById('task-list')

      const tasks = document.createElement('li')
    
      const taskText = document.createElement('span')
      taskText.innerText = taskInput
      taskText.setAttribute('id', 'task-content')
    
      taskSection.appendChild(tasks)
      tasks.appendChild(taskText)
    
      const deleteTaskBtn = document.createElement('button')
      deleteTaskBtn.setAttribute('Onclick','deleteSelfTask(this)')
      deleteTaskBtn.setAttribute('id', 'delete-button')
      deleteTaskBtn.innerHTML = '<p><i class="fa-solid fa-trash"></i></p>'
    
      tasks.appendChild(deleteTaskBtn)
    
      document.getElementById('taskInput').value = ''
    
    }

  
}

function deleteSelfTask(deleteTaskBtn) {

  const taskDone = deleteTaskBtn.parentNode

  taskDone.remove()
}