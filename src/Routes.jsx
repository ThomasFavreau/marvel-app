import Layout from "./Layout";
import AboutPage from "./pages/AboutPage";
import CharacterPage from "./pages/CharacterPage";
import ContactPage from "./pages/ContactUs";

const routes = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            { path: "/", element: <CharacterPage/> },
            { path: "/about", element: <AboutPage/> },
            { path: "/contact", element: <ContactPage/> },
        ],
    },
];

export default routes;