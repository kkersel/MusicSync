import a from './App.module.scss';
import {BrowserRouter, Route, Routes, Redirect} from "react-router-dom";
import Import from "./Pages/Import";
import ContactsPage from "./Pages/ContactsPage";
import Export from "./Pages/Export";
import {Fade} from "react-reveal";

function App() {
    return (
        <BrowserRouter>
            <div className={a.AppWrapper}>
            </div>
            <Routes>
                <Route exact path="/Import" element={<Import/>}/>
                <Route path="/Export" element={<Export/>}/>
                <Route path="/contactsPage" element={<ContactsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
        ;
}

export default App;


