import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import NavBar from './components/NavBar.tsx';
import {createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutUs from './pages/AboutUs.tsx';
import Academics from './pages/Academics.tsx';
import Admission from './pages/Admission.tsx';
import StudentFaculty from './pages/StudentFaculty.tsx';
import ContactUs from './components/ContactUs.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <App/>
  },
  {
    path: "/about-us",
    element: <AboutUs/>,
  },
  {
    path: "/academics",
    element: <Academics/>,
  },
  {
    path:"/admission",
    element:<Admission/>,
  },
  {
    path:"/student-faculty",
    element:<StudentFaculty/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavBar/>
    <RouterProvider router={router} />
    <ContactUs/>
  </React.StrictMode>,
)
