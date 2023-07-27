import { Link, Route, Routes, NavLink, Navigate } from "react-router-dom";
import { AuthData } from "../AuthWrapper";
import { nav } from "./navigation";
import { AppBar } from '@mui/material'


export const RenderRoutes = () => {

        const { user } = AuthData();
        
        return (
             <Routes>
             { nav.map((r, i) => {
                  
                  if (r.isPrivate && user.isAuthenticated) {
                       return <Route key={i} path={r.path} element={r.element}/>
                  } else if (!r.isPrivate) {
                       return <Route key={i} path={r.path} element={r.element}/>
                  } else return false
             })}
             
             </Routes>
        )
   }
   
   export const RenderMenu = () => {
   
        const { user, logout } = AuthData()
   
        const MenuItem = ({r}) => {
             return (
                  <div className="menuItem"><NavLink 
                  to={r.path}
                  style={({ isActive, isPending }) => {
                    return {
                      fontSize: isActive ? "25px" : "",
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "red" : "white",
                    };
                  }}
                  >{r.name}</NavLink></div>
             )
        }
        return (
             <div className="menu">
                    <div className="logooo">
                         <img src="/JEM2.png" alt="Kodie" height={'50px'}/>
                    </div>
                  {nav.map((r, i) => {
   
                       if (!r.isPrivate && r.isMenu) {

                            return (
                                 <MenuItem key={i} r={r}/>

                            )
                       } else if (user.isAuthenticated && r.isMenu) {
                            return (
                                 <MenuItem key={i} r={r}/>
                            )
                       } else return false
                  }                   
                  )}
                  { user.isAuthenticated ?
                  <div className="menuItem"><NavLink to={'#'} onClick={logout}>Log out</NavLink></div>
                  :
                  <div className="menuItem"><NavLink 
                  to={'login'}
                  style={({ isActive, isPending }) => {
                    return {
                      fontSize: isActive ? "25px" : "",
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "red" : "white",
                    };
                  }}
                  >Log in</NavLink></div> }
             </div>
        )
   }