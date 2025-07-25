
import Contact from './pages/contact.jsx';

import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Index />} />
    <Route path="/contact" element={<Contact />} />
    </>
  )
);

export default router;