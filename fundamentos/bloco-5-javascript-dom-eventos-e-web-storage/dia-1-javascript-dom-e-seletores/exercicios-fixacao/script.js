let headerContainer = document.querySelector("#header-container");
headerContainer.style.background = "green";

let emergencyTasks = document.getElementsByClassName("emergency-tasks")[0];
emergencyTasks.style.backgroundColor = "pink";

let emergencyTasksHeaders = document.querySelectorAll(".emergency-tasks h3");
for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
  emergencyTasksHeaders[index].style.backgroundColor = "purple";
}
let noEmergencyTasks = document.querySelector(".no-emergency-tasks");
noEmergencyTasks.style.backgroundColor = "yellow";

let noEmergencyTasksHeaders = document.querySelectorAll(
  ".no-emergency-tasks h3"
);
for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
  noEmergencyTasksHeaders[index].style.backgroundColor = "black";
}

const footer = document.getElementById("footer-container");
footer.style.backgroundColor = "green";
