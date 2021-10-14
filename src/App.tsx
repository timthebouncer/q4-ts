import './App.css';
import React, {useState, Suspense, FC, ReactNode, Dispatch, SetStateAction} from 'react'
import { createContext } from 'use-context-selector';
import routes from "./route/route";
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import {IUserInfo,IUserList} from './types/storeTypes'

       export const authContext = createContext<{ userData: IUserInfo | null, setUserData: Dispatch<SetStateAction<IUserInfo | null>> }>(null as any)
       export const userListContext = createContext<{ userList: IUserList | null, setUserList:Dispatch<SetStateAction<IUserList | null>> }>(null as any)






function App() {

    const AuthProvider:FC=({children})=>{
        const[userData, setUserData] = useState<IUserInfo | null>(null)
        const[token, setToken] = useState<string>("")
        return(
        <authContext.Provider value={{userData, setUserData}}>
            {children}
        </authContext.Provider>
        )
    }

    const UserListProvider:FC=({children})=>{
        const [userList, setUserList] = useState<IUserList | null>(null)
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
