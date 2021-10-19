import './App.css';
import React, {useState, Suspense, FC, ReactNode, Dispatch, SetStateAction} from 'react'
import { createContext } from 'use-context-selector';
import routes from "./route/route";
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import {IUserInfo,IUserList, IAllUserList,IProp,IRoutes} from './types/storeTypes'

       export const authContext = createContext<{ userData: IUserInfo | null, setUserData: Dispatch<SetStateAction<IUserInfo | null>> }>(null as any)
       export const userListContext = createContext<{ userList: IUserList | null, setUserList:Dispatch<SetStateAction<IUserList | null>> }>(null as any)
        export const UserWaterFall = createContext<{waterFall: IProp[], setWaterFall:Dispatch<SetStateAction<IProp[]>>,
            totalPage:number, setTotalPage:Dispatch<SetStateAction<number>>,scrollState:number, setScrollState:Dispatch<SetStateAction<number>>,
            currentPage:number, setCurrent:Dispatch<SetStateAction<number>> }>(null as any)



function App() {

    const AuthProvider:FC=({children})=>{
        const[userData, setUserData] = useState<IUserInfo | null>(null)
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

    const UserWaterFallProvider:FC=({children})=>{
        const [waterFall, setWaterFall] = useState<IProp[]>([])
        const [totalPage, setTotalPage] = useState(0)
        const [scrollState, setScrollState] = useState(0)
        const [currentPage, setCurrent] = useState(0)
        return(
            <UserWaterFall.Provider value={{waterFall,setWaterFall,totalPage, setTotalPage,scrollState, setScrollState,currentPage, setCurrent}}>
                {children}
            </UserWaterFall.Provider>
        )
    }


  return (
      <Router>
        <div className='app-wrapper'>
          <Suspense fallback={"Loading..."}>
            <AuthProvider>
              <UserListProvider>
               <UserWaterFallProvider>
               <Switch>
                   {routes.map((item, i) => {
                       return(
                           <Route key={i} {...item} path={item.path} exact={item.exact} component={item.routes? ()=>{
                               return (item.routes as IRoutes[]).map((route,idx)=>{
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
               </UserWaterFallProvider>
              </UserListProvider>
            </AuthProvider>
          </Suspense>
        </div>
      </Router>
  );
}

export default App;
