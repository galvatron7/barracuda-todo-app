import React from "react";

const TaskList = (props) => {
    const {tasks, selectTask, deleteTask, editTask, toggleComplete} = props;

    function handleClick(e, tsk) {
        e.preventDefault();
        selectTask(tsk);
    }
    function handleDelete(e, tsk) {
        e.preventDefault();
        if(tsk.isCompleted)
            return;
        deleteTask(tsk);
    }
    function handleEdit(e, tsk){
        e.preventDefault();
        if(tsk.isCompleted)
            return;
        editTask(tsk);
    }
    function handleComplete(tskId){
        toggleComplete(tskId);
    }
    return(
        <div className="task-list">
            <div className="task-header">
                <h3>List of tasks</h3>
            </div>
            <ul>
                {
                    tasks.map((task, idx) =>
                        <li key={idx} className={`${task.isCompleted ? "task-done" : ""}`}>
                            <div className="task-item">
                                <div
                                    className="task-list-info" onClick={(e) => handleClick(e, task)}>
                                    <span style={{ textDecoration: task.isCompleted ? "line-through" : "" }}>Task: {task.title}</span>
                                    <span style={{ textDecoration: task.isCompleted ? "line-through" : "" }}>End date:{task.endDate}</span>
                                </div>
                                <div className="task-actions">
                                    <div className="cpt-chk">
                                        <label>
                                            Complete
                                            <input
                                                onChange={(e) => handleComplete(idx)}
                                                type="checkbox"
                                                checked={task.isCompleted}/>
                                        </label>
                                    </div>
                                    <div className={`edit-btn ${task.isCompleted ? "disabled-btn" : ""}`} onClick={(e) => handleEdit(e, task)}>edit</div>
                                    <div className={`delete-btn ${task.isCompleted ? "disabled-btn" : ""}`} onClick={(e) => handleDelete(e, task)}>delete</div>
                                </div>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    )
};
export default TaskList;