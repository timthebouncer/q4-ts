import './App.css';
import React, {useState, Suspense, FC, ReactNode} from 'react'
import { createContext } from 'use-context-selector';
import routes from "./route/route";
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'

       export const authContext = createContext<{} | null>(null)
       export const userListContext = createContext<{} | null>(null)

type IUser={
    imgLink:string;
    name:string;
    username:string | null;
}

type IUserList={
    _id: string;
    name: string | null;
    username: string;
    role: string;
}


function App() {

    const AuthProvider:FC=({children})=>{
        const[userData, setUserData] = useState<IUser[]>([])
        const[token, setToken] = useState<string>("")
        return(
        <authContext.Provider value={{userData, setUserData}}>
            {children}
        </authContext.Provider>
        )
    }

    const UserListProvider:FC=({children})=>{
        const [userList, setUserList] = useState<IUserList[]>([])
        return(
            <userListContext.Provider value={{userList, setUserList}}>
                {children}
            </userListContext.Provider>
        )
    }



  return (
      <Router>
        <div className='app-wrapper'>
          <Suspense fallback={"Loading..."}>
            <AuthProvider>
              <UserListProvider>
                <Switch>
                  {routes.map((item, i) => {
                    return(
                        <Route key={i} {...item} path={item.path} exact={item.exact} component={item.routes? ()=>{
                          return item.routes.map((route,idx)=>{
                            return(
                                <Switch>
                                  <Route key={idx} path={route.path} component={route.component} />
                                </Switch>
                            )
                          })
                        }:item.component} />
                    )
                  })}
                </Switch>
              </UserListProvider>
            </AuthProvider>
          </Suspense>
        </div>
      </Router>
  );
}

export default App;
