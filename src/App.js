import a from './App.module.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Import from "./Pages/Import/Import";
import ContactsPage from "./Pages/Contacts/ContactsPage";
import Export from "./Pages/Export/Export";
import Page404 from "./Pages/404/404";
import Choose from "./Pages/Choose/Choose";

function App() {
    return (
        <div className={a.MainWrapper}>

            <div>
                <CustomCursor
                    targets={['.link', '.your-css-selector']}
                    customClass='custom-cursor'
                    dimensions={30}
                    fill='#FFF'
                    smoothness={{
                        movement: 0.2,
                        scale: 0.1,
                        opacity: 0.2,
                    }}
                    targetOpacity={0.5}
                />
            </div>

            <BrowserRouter>
                <div className={a.AppWrapper}>
                </div>
                <Routes>
                    <Route path="/Import" element={<Import/>}/>
                    <Route path="/Export" element={<Export/>}/>
                    <Route path="/contactsPage" element={<ContactsPage/>}/>
                    <Route path="/*" element={<Page404/>}/>
                    <Route path="/Choose" element={<Choose/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
        ;
}

export default App;


