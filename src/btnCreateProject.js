import RenderProject from "./renderProject";

const projectName_input = document.createElement("input");
projectName_input.setAttribute("type", "text");

const projectDuration_input = document.createElement("input");
projectName_input.setAttribute("type", "text");

const projectPriority_input = document.createElement("input");
projectName_input.setAttribute("type", "text");

const btn_createProject = document.createElement("button");
btn_createProject.textContent = "click me";

document.querySelector(".root").appendChild(projectName_input);
document.querySelector(".root").appendChild(projectDuration_input);
document.querySelector(".root").appendChild(projectPriority_input);
document.querySelector(".root").appendChild(btn_createProject);

export default function formInput() {
  btn_createProject.addEventListener("click", () => {
    RenderProject(
      projectName_input.value,
      projectDuration_input.value,
      projectPriority_input.value
    );
    projectName_input.value = "";
    projectDuration_input.value = "";
    projectPriority_input.value = "";
  });
}
