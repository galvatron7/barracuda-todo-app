import './App.scss';
import Header from "./components/Header/Header";
import CalendarPage from "./components/CalendarPage/CalendarPage";
function App() {
  return (
    <div className="app">
      <Header></Header>
        <main className="main">
            <CalendarPage/>
        </main>
    </div>
  );
}

export default App;
