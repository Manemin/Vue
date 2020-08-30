import Home from "./components/Home";
import Contact from "./components/Contact";
import MyProject from "./components/MyProject";

export const routes = [
    {
        path: '', component: Home
    },
    {
        path: '/contact', component: Contact
    },
    {
        path: '/project', component: MyProject
    },
]