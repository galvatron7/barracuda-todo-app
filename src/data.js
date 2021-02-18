import moment from "moment";
const todaysDate = moment(new Date()).format('MM/DD/YYYY');

 const Tasks = [
    {
        id:0, title: "Pick up the dog0!",
        endDate:todaysDate,
        isCompleted: false
    }, {
        id:1,
        title: "Pick up the dog1!",
        endDate: moment(new Date()).add(1,'days').format('MM/DD/YYYY'),
        isCompleted: false
    }, {
        id:2, title: "Pick up the dog2!",
        endDate:moment(new Date()).add(1,'months').format('MM/DD/YYYY'),
        isCompleted: false
    }, {
        id:3, title: "Pick up the dog3!",
        endDate:moment(new Date()).add(4,'months').format('MM/DD/YYYY'),
        isCompleted: false
    }, {
        id:4, title: "Pick up the dog4!",
        endDate:moment(new Date()).add(5,'months').format('MM/DD/YYYY'),
        isCompleted: false
    }, {
        id:5, title: "Pick up the dog5!",
        endDate:moment(new Date()).add(3,'months').format('MM/DD/YYYY'),
        isCompleted: true
    }, {
        id:6, title: "Pick up the dog6!",
        endDate:moment(new Date()).add(5,'days').format('MM/DD/YYYY'),
        isCompleted: false
    }
];

export default Tasks;