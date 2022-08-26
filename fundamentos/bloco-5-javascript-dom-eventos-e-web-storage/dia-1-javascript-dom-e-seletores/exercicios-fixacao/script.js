let headerContainer = document.querySelector("#header-container");
headerContainer.style.background = "green";

let emergencyTasks = document.getElementsByClassName("emergency-tasks")[0];
emergencyTasks.style.backgroundColor = "pink";

let emergencyTasksHeaders = document.querySelectorAll(".emergency-tasks h3");
for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
  emergencyTasksHeaders[index].style.backgroundColor = "purple";
}
