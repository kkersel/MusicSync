import './App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Import from "./Pages/Import";
import ContactsPage from "./Pages/ContactsPage";

function App() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Import/>} />
                    <Route path="/contactsPage" element={<ContactsPage/>} />
                </Routes>
        </BrowserRouter>
    )
        ;
}

export default App;


