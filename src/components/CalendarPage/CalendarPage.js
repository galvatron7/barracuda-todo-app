import React,{useState} from "react";
import TaskList from "./TaskList/TaskList";
import EntryContainer from "./EntryContainer/EntryContainer";
import TaskCalendar from "./TaskCalendar/TaskCalendar";
import TaskDetails from "./TaskDetails/TaskDetails";
import Tasks from "../../data";

const CalendarPage = (props) => {
    const initialTasks = Tasks;
    const [tasks, setTasks] = useState(initialTasks);
    const [selected, setSelected] = useState(null);
    const [taskToEdit, setTaskToEdit] = useState(null);
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
    function clearEditMode(){

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
           <EntryContainer save={onSave} taskToEdit={taskToEdit} replaceTask={replaceTask}/>
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