import './App.css';
import React,{useState, Suspense, FC} from 'react'
import { createContext } from 'use-context-selector';
import routes from "./route/route";
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'

        const authContext = createContext<{} | null>(null)
        const userListContext = createContext<{} | null>(null)

type IUser={
    imgLink:string;
    name:string;
    username:string | null;
}

type IUserList={
    _id: number | string;
    name: string;
    username: string | null;
    role: string;
}


function App() {

    const AuthProvider:FC=({children})=>{
        const[userData, setUserData] = useState<IUser[]>([])
        const[token, setToken] = useState<string | null>("")
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
