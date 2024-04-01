import RenderProject from "./renderProject";

const projectName_input = document.createElement("input");
projectName_input.setAttribute("type", "text");
projectName_input.setAttribute("placeholder", "Add a name for your project");
projectName_input.classList.add("name-input");

const projectDuration_input = document.createElement("input");
projectDuration_input.setAttribute("type", "text");
projectDuration_input.setAttribute(
  "placeholder",
  "Add a duration for your project"
);
projectDuration_input.classList.add("duration-input");

const projectPriority_input = document.createElement("input");
projectPriority_input.setAttribute("type", "text");
projectPriority_input.setAttribute(
  "placeholder",
  "Add a priority for your project"
);
projectPriority_input.classList.add("priority-input");

const btn_createProject = document.createElement("button");
btn_createProject.textContent = "click me";

const content = document.createElement("div");
content.classList.add("form-content");

content.appendChild(projectName_input);
content.appendChild(projectDuration_input);
content.appendChild(projectPriority_input);
content.appendChild(btn_createProject);

document.querySelector(".root").appendChild(content);

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
