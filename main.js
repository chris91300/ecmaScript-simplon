
// we begin the script with this list of task
const tasksOfTheDay = [
  { title: 'Faire les courses', done: false },
  { title: 'Nettoyer la maison', done: true },
  { title: 'Planter le jardin', done: false }
];

// function utils for a better reading of the code

function byTitleNotEqual(title){
    const byTitleNotEqual = task => task.title != title;
    return byTitleNotEqual;
}

const byKeepTaskDone = task => task.done === true;

const byKeepTaskNotDone = task => task.done === false;

const printTask = task => console.log(task);

// end of utils functions

/**
 * add a new task to the taskList
 * @param {Object} taskList the list of task into which one the function insert the new task
 * @param {Object} newTask the new task to insert in the list
 * @returns the new list of task
 */
const addTask = (taskList, newTask) => {
    const newTaskList = [...taskList, newTask];
    return newTaskList;
}


/**
 * remove a task on the taskList from his title
 * @param {Object} taskList the list of task on which one the function remove the task with the title done
 * @param {string} title the title of the task we want to remove of the list
 * @returns the new list of task
 */
const removeTask = (taskList, title) => {
    const byRemoveByTitle = byTitleNotEqual(title);
    const newTaskList = taskList.filter(byRemoveByTitle);
    return newTaskList;
}


/**
 * invert the value of the key 'done' of the task
 * @param {Object} task the task to modified
 * @returns the new modified task
 */
const toggleTaskStatus = (task) => {
    const newTask = {...task, done: !task.done};
    return newTask;
}



/**
 * display in the console the list of the task.
 * if status is undefined, show all tasks
 * if status is true, show only tasks done
 * if status is false, show only tasks not done
 * @param {Object} taskList 
 * @param {boolean | undefined} status 
 */
const showTask = (taskList, status) => {
    let list = taskList;
    
    if(status != undefined){
        if(status){
            list = taskList.filter(byKeepTaskDone)
        }else{
            list = taskList.filter(byKeepTaskNotDone)
        }
    }
    list.map(printTask)
    
}

// TESTS

console.log("*****  TEST ADD TASK   *****")
console.log("should print ")
console.log(`
{ title: 'Faire les courses', done: false }
{ title: 'Nettoyer la maison', done: true }
{ title: 'Planter le jardin', done: false }
{ title: 'faire brief 20', done: false }
`)
console.log();
let list = addTask(tasksOfTheDay, { title: 'faire brief 20', done: false });
showTask(list);


console.log();
console.log();
console.log("*****  TEST REMOVE TASK   *****")
console.log("should print ")
console.log(`
{ title: 'Faire les courses', done: false }
{ title: 'Nettoyer la maison', done: true }
`)
console.log();
list = removeTask(tasksOfTheDay, 'Planter le jardin');
showTask(list);



console.log();
console.log();
console.log("*****  TEST TOGGLE TASK STATUS   *****")
console.log("should print ")
console.log(`
{ title: 'Faire les courses', done: true }
`)
console.log();
const taskModified = toggleTaskStatus({ title: 'Faire les courses', done: false });
console.log(taskModified);

console.log();
console.log();
console.log("*****  TEST SHOW ALL TASK   *****")
console.log("should print ")
console.log(`
{ title: 'Faire les courses', done: false }
{ title: 'Nettoyer la maison', done: true }
{ title: 'Planter le jardin', done: false }
`)
console.log();
showTask(tasksOfTheDay);

console.log();
console.log();
console.log("*****  TEST SHOW ALL TASK   *****")
console.log("should print ")
console.log(`
{ title: 'Nettoyer la maison', done: true }
`)
console.log();
showTask(tasksOfTheDay, true);

console.log();
console.log();
console.log("*****  TEST SHOW ALL TASK   *****")
console.log("should print ")
console.log(`
{ title: 'Faire les courses', done: false }
{ title: 'Planter le jardin', done: false }
`)
console.log();
showTask(tasksOfTheDay, false);
