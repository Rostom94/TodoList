import createProject from "./createProject";

export default function RenderProject(name, duration, priority) {
  const newProject = new createProject(name, duration, priority);

  const form_result = document.createElement("div");
  form_result.classList.add("form-result");

  const project_container = document.createElement("div");
  project_container.classList.add("project-container");

  const project_name = document.createElement("div");
  project_name.classList.add("project-name");
  project_name.textContent = newProject.projectName;

  const project_duration = document.createElement("div");
  project_duration.classList.add("project-duration");
  project_duration.textContent = newProject.projectDuration;

  const project_priority = document.createElement("div");
  project_priority.classList.add("project-priority");
  project_priority.textContent = newProject.projectPriority;

  form_result.appendChild(project_name);
  form_result.appendChild(project_duration);
  form_result.appendChild(project_priority);

  document.querySelector(".root").appendChild(form_result);
}
