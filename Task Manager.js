document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-task')) {
            deleteTask(event.target.parentNode);
        } else if (event.target.classList.contains('complete-task')) {
            completeTask(event.target.parentNode);
        };

        console.log(JSON.stringify(tasks));
            });

    function addTask(taskText) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
      ]
        {
          "id": 1,
          "name": "Finish JavaScript project",
          "priority": "high",
          "isImportant": true,
          "isCompleted": false,
          "date": "7/10/2025"
          },
          {
           "id": 2,
           "name": "Work On an assignment",
           "priority": "medium",
           "isImportant": true,
           "isCompleted": false,
           "date": "7/10/2025"
           }
          ]

            ${taskText}
            <button class="delete-task">Delete</button>
            <button class="complete-task">Complete</button>
        `;
        taskList.appendChild(listItem);
    }

    function deleteTask(taskItem) {
        taskList.removeChild(taskItem);
    }

    function completeTask(taskItem) {
        taskItem.classList.toggle('completed');
    }
});
