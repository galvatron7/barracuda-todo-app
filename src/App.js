import './App.scss';
import React,{useState} from "react";
import Header from "./components/Header/Header";
import CalendarPage from "./components/CalendarPage/CalendarPage";
import Tasks from "./data";

function App() {
  const [initialList, setList] = useState(Tasks);

  return (
    <div className="app">
      <Header></Header>
        <main className="main">
            <CalendarPage startingTasks={initialList}/>
        </main>
    </div>
  );
}

export default App;
