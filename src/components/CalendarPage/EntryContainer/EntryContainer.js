import React,{useState, useEffect} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

const EntryContainer = ({save, taskToEdit, replaceTask}) => {

    const [itemName, setItemName] = useState("");
    const [inEditMode, setEditMode] = useState(false);
    const [actionDate, setActionDate] = useState(new Date());

    function handleChange(e) {
        setItemName(e.target.value);
    }

    useEffect(() => {
        if(taskToEdit){
            setToEdit();
            setEditMode(true);
        } else {
            setEditMode(false);
        }
    },[taskToEdit]);

    function setToEdit() {
        setItemName(taskToEdit.title);
        setActionDate(moment(taskToEdit.endDate, 'MM/DD/YYYY').toDate());
    }

    function onSave(){
        save({
            id:null,
            title: itemName,
            endDate: moment(actionDate).format('MM/DD/YYYY'),
            isCompleted: taskToEdit?.isCompleted
        })
    }

    function onCancel(){
        clearEditMode();
    }

    function onEdit(){
        replaceTask({
            id:taskToEdit?.id,
            title: itemName,
            endDate: moment(actionDate).format('MM/DD/YYYY'),
            isCompleted: taskToEdit?.isCompleted
        });
        clearEditMode();
    }

    function clearEditMode(){
        setItemName("");
        setActionDate(new Date());
        setEditMode(false);
    }

    return (
        <div className={`entry-container ${inEditMode ? "edit-mode" : ""} `}>
            <div className="task-form-grp">
                <label>Task:</label>
                <input
                    type="text"
                    value={itemName}
                    onChange={handleChange}
                    className="task-form-npt"
                    placeholder="Create new item..." />
            </div>
            <div className="task-date-cluster">
                <span>End Date:</span>
                <DatePicker selected={actionDate} onChange={date => setActionDate(date)}/>
            </div>
            <span>{inEditMode}</span>
            <div className="action-btns">
                <div className="save-btn">
                    {
                        (inEditMode)?
                        <a onClick={onEdit}>Edit</a>:
                            <a onClick={onSave}>Save</a>
                    }
                </div>
                {
                    (inEditMode)?
                    <div className="cancel-btn">
                        <a onClick={onCancel}>Cancel</a>
                    </div> : null
                }
            </div>
        </div>
    )
};

export default EntryContainer;