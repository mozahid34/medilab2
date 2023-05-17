import LogIn from "../../LogIn/LogIn";
import About from "../../Pages/About/About";
import RootAppoint from "../../Pages/Appointment/Root/RootAppoint";
import Contact from "../../Pages/Contact/Contact";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import NotFound from "../../Pages/NotFound/NotFound";
import Review from "../../Pages/Review/Review";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoute/PrivateRoutes";

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
                path: '/services',
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
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/dashboard',
                element: <PrivateRoutes> <Dashboard></Dashboard> </PrivateRoutes>
            },
           

        ],
        
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])

export default router;