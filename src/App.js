import './App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./Pages/MainPage";
import ContactsPage from "./Pages/ContactsPage";

function App() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/mainPage" element={<MainPage/>} />
                    <Route path="/contactsPage" element={<ContactsPage/>} />
                </Routes>
        </BrowserRouter>
    )
        ;
}

export default App;


