import './App.scss';
import Header from "./components/Header/header";
import {Route,Routes} from "react-router-dom";
import Home from "./components/Home/home";
import Fill from "./pages/Fill/fill";
import Todo from "./pages/Todo/todo";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/fill'} element={<Fill/>}/>
                <Route path={'/todo'} element={<Todo/>}/>
            </Routes>
        </div>
    );
}

export default App;
