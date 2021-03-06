import React,{useState, useEffect} from "react";
import TaskList from "./TaskList/TaskList";
import EntryContainer from "./EntryContainer/EntryContainer";
import TaskCalendar from "./TaskCalendar/TaskCalendar";
import TaskDetails from "./TaskDetails/TaskDetails";

const CalendarPage = ({startingTasks}) => {
    const [tasks, setTasks] = useState(startingTasks);
    const [selected, setSelected] = useState(null);
    const [taskToEdit, setTaskToEdit] = useState(null);

    useEffect(() => {
       localStorage.setItem("tasks", JSON.stringify(tasks));
    },[tasks]);

    function onSave(newTask){
        newTask.id = tasks.length;
        setTasks([...tasks, newTask]);
    }

    function onEdit(task){
        setTaskToEdit(task)
    }

    function onDelete(task){
        const filteredTasks = tasks.filter((currTask) =>  currTask.id != task.id);
        setTasks(filteredTasks);
    }
    function replaceTask(task){
        const newTasks = tasks.reduce((accum, currTask) => {
            (currTask.id == task.id)?
                accum.push(task):
                accum.push(currTask);
            return accum;
        },[]);
        setTasks(newTasks);
    }

    function onTaskSelected(task){
        setSelected(task);
    }

    function completeTodo (index) {
        const newTasks = [...tasks];
        newTasks[index].isCompleted = !newTasks[index].isCompleted;
        setTasks(newTasks);
    }

    return (
        <div className="calendar-page container">
           <EntryContainer
               save={onSave}
               taskToEdit={taskToEdit}
               replaceTask={replaceTask}/>
           <TaskList tasks={tasks}
                     editTask={onEdit}
                     deleteTask={onDelete}
                     selectTask={onTaskSelected}
                     toggleComplete={completeTodo}
           />
           <TaskCalendar selectedTask={selected} />
           <TaskDetails selectedTask={selected} />
        </div>
    )
};

export default CalendarPage;