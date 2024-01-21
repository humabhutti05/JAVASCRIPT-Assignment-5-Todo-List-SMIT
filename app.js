function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
      var tasksList = document.getElementById("tasks-list");

      var li = document.createElement("li");
      li.className = "task";

      var inputText = document.createElement("input");
      inputText.type = "text";
      inputText.value = taskText;
      inputText.disabled = true;

      var buttonsDiv = document.createElement("div");
      buttonsDiv.className = "buttons";

      var editBtn = document.createElement("button");
      editBtn.className = "edit-btn";
      editBtn.innerHTML = "Edit";
      editBtn.onclick = function() { enableEdit(inputText, editBtn, doneBtn, deleteBtn); };

      var doneBtn = document.createElement("button");
      doneBtn.className = "done-btn";
      doneBtn.innerHTML = "Done";
      doneBtn.style.display = "none";
      doneBtn.onclick = function() { disableEdit(inputText, editBtn, doneBtn, deleteBtn); };

      var deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      deleteBtn.innerHTML = "Delete";
      deleteBtn.onclick = function() { deleteTask(li); };

      buttonsDiv.appendChild(editBtn);
      buttonsDiv.appendChild(doneBtn);
      buttonsDiv.appendChild(deleteBtn);

      li.appendChild(inputText);
      li.appendChild(buttonsDiv);

      tasksList.appendChild(li);

      taskInput.value = "";
    }
  }

  function enableEdit(inputText, editBtn, doneBtn, deleteBtn) {
    inputText.disabled = false;
    editBtn.style.display = "none";
    doneBtn.style.display = "inline-block";
    deleteBtn.style.display = "inline-block";
  }

  function disableEdit(inputText, editBtn, doneBtn, deleteBtn) {
    inputText.disabled = true;
    editBtn.style.display = "inline-block";
    doneBtn.style.display = "none";
    deleteBtn.style.display = "none";
  }

  function deleteTask(taskElement) {
    taskElement.parentNode.removeChild(taskElement);
  }

  function clearAll() {
    var tasksList = document.getElementById("tasks-list");
    tasksList.innerHTML = "";
  }