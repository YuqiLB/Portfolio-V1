import Home from './pages/Home.jsx'


import { createBrowserRouter, createRoutesFromElements, creatRoutesFromElements, Route} from "react-router-dom";
const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/" element={<Home/>} /> 

        </>
    )
);
export default router;