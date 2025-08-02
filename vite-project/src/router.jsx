import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contacts from './pages/Contacts.jsx'


import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/" element={<Home/>} /> 
        <Route path="/about" element={<About/>} /> 
        <Route path="/contacts" element={<Contacts/>} /> 

        </>
    )
);
export default router;