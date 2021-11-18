import logo from './logo.svg';
import './App.css';
import Dashboard from './view/defaultLayout/dashboard';
import AdminHome from './view/adminpanel';
import QuestionPanel from './view/quizz/questionpanel';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link ,
  Redirect
} from "react-router-dom";
import React, { Component, Suspense } from 'react';
import routes from './routes';
import TandD from './view/theme/components/TandD';
import Android from './view/AndroidComponent/components/Android';





function App() {

  const loading = ()=>{
    return <div> Loading ...</div>
  }
  return (
    <div className="">
      {/* <Android/> */}
     
      {/* <TandD/>  */}
      <Router>
        <div>
          <Suspense 
          fallback={loading()}
          >
            <Switch>
              {routes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => <route.component {...props} />}
                  />
                ) : null;
              })}
              <Redirect from="/" to="/dashboard" />
            </Switch>
          </Suspense>
          {/* <Switch>
            <Route path="/admin">
              <AdminHome />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
            <Route path="/quiz/:id">
              <QuestionPanel />
            </Route>
          </Switch> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
