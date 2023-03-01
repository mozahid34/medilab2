import LogIn from "../../LogIn/LogIn";
import About from "../../Pages/About/About";
import RootAppoint from "../../Pages/Appointment/Root/RootAppoint";
import Contact from "../../Pages/Contact/Contact";
import Review from "../../Pages/Review/Review";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/appoint',
                element: <RootAppoint></RootAppoint>
            },
            {
                path: '/review',
                element: <Review></Review>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            
            {
                path: '/logIn',
                element: <LogIn></LogIn>
            },

        ]
    }
])

export default router;