import React,{useState, useEffect} from "react";

const EntryContainer = ({save, editTask, taskToEdit, replaceTask}) => {

    const [month, setMonth] = useState("01");
    const [day, setDay] = useState("01");
    const [year, setYear] = useState("2021");
    const [itemName, setItemName] = useState("");
    const [inEditMode, setEditMode] = useState(false);
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
        const editDate = taskToEdit.endDate.split("/");
        setItemName(taskToEdit.title);
        setMonth(editDate[0]);
        setDay(editDate[1]);
        setYear(editDate[2]);
    }

    const months = [
        {value:"01", label:"January"},
        {value:"02", label:"February"},
        {value:"03", label:"March"},
        {value:"04", label:"April"},
        {value:"05", label:"May"},
        {value:"06", label:"June"},
        {value:"07", label:"July"},
        {value:"08", label:"August"},
        {value:"09", label:"September"},
        {value:"10", label:"October"},
        {value:"11", label:"November"},
        {value:"12", label:"December"}
    ];
    const days = [
        "01", "02", "03", "04", "05", "06", "07", "08", "09", "10",
        "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
        "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"
    ];
    let years = [];

    function setToday(){
        let d = new Date();
        let currYear = parseInt(d.getFullYear());
        let i = 0;
        years.push(currYear);
        while(i < 9){
            let nextYear = years[i] + 1;
            years.push(nextYear);
            i++;
        }
    }

    setToday();

    function onSave(){
        save({
            id:null,
            title: itemName,
            endDate: month + "/" + day + "/" + year
        })
    }
    function onCancel(){
        clearEditMode()
    }
    function onEdit(){
        replaceTask({
            id:taskToEdit?.id,
            title: itemName,
            endDate: month + "/" + day + "/" + year
        });
        clearEditMode()
    }

    function clearEditMode(){
        setItemName("");
        setMonth("01");
        setDay("01");
        setYear("2021");
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
                <select className="selectr">
                    {
                        months.map((month, idx) =>
                            <option key={idx} value={month.value}>{month.label}</option>
                        )
                    }
                </select>
                <select className="selectr">
                    {
                        days.map((day, idx) =>
                            <option key={idx} value={day}>{day}</option>
                        )
                    }
                </select>
                <select className="selectr">
                    {
                        years.map((year, idx) =>
                            <option key={idx} value={year}>{year}</option>
                        )
                    }
                </select>
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