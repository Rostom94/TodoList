import RenderProject from "./renderProject";
import createTodo from "./createTodo";
import formInput from "./btnCreateProject";

formInput();

const newTask = new createTodo("sawm-ramadan");

console.log(newTask.task);
