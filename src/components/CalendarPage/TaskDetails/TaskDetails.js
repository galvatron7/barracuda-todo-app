import React,{useEffect,useState} from "react";

const TaskDetails = ({selectedTask}) => {

    const [currTask, setCurrTask] = useState(selectedTask);

    return(
        <div className="task-details">
            {/*<span>Task Details</span>*/}
            {/*<div>{JSON.stringify(selectedTask)}</div>*/}
        </div>
    )
};

export default TaskDetails;