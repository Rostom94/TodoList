export default class createProject {
  constructor(projectName, projectDuration, projectPriority) {
    this.projectName = projectName;
    this.projectDuration = projectDuration;
    this.projectPriority = projectPriority;
  }
  description() {
    descriptionLogger(
      this.projectName,
      this.projectDuration,
      this.projectPriority
    );
  }
}

function descriptionLogger(projectName, projectDuration, projectPriority) {
  console.log(
    `${projectName} has a duration of ${projectDuration}, and a level ${projectPriority} priority`
  );
}
