import Home from "../pages/Home"
import AboutUs from "../pages/AboutUs"
import AdminPage from "../pages/AdminPage"
import ContactUs from "../pages/ContactUs"
import Jobs from "../pages/Jobs"
import Services from "../pages/Services"
import Login from "../pages/Login"

export const nav = [
     { path:     "/",         name: "Home",        element: <Home />,       isMenu: true,     isPrivate: false  },
     { path:     "/services",    name: "Services",       element: <Services />,      isMenu: true,    isPrivate: false  },
     { path:     "/jobs",    name: "Jobs",       element: <Jobs />,      isMenu: true,    isPrivate: false  },
     { path:     "/aboutus",    name: "About",       element: <AboutUs />,      isMenu: true,     isPrivate: false  },
     { path:     "/contactus",    name: "Contact",       element: <ContactUs />,      isMenu: true,    isPrivate: false  },
     { path:     "/login",    name: "Login",       element: <Login />,      isMenu: false,    isPrivate: false  },
     { path:     "/adminpage",  name: "AdminPage",     element: <AdminPage />,    isMenu: true,     isPrivate: true  },
]