import React,{useState,useEffect} from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

const TaskCalendar = ({selectedTask}) => {

    const [taskDate, setTaskDate] = useState(null);
    useEffect(() => {
        if(selectedTask){
            setTaskDate(moment(selectedTask.endDate, 'MM/DD/YYYY').toDate());
        }
    },[selectedTask]);

    return(
        <div className="task-calendar">
            <div className="task-header">
                <h3>Calendar View</h3>
            </div>
            <Calendar className={`${selectedTask?.isCompleted ? "task-done" : "active-task-calendar"}`} value={taskDate} />
        </div>
    )
};

export default TaskCalendar;