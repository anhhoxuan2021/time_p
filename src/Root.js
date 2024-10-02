import React  from 'react';
//import {Route, IndexRoute} from 'react-router';
import {
  BrowserRouter as Router,  Route,  Link,Switch } from 'react-router-dom'

import LoginForm from './components/login/LoginForm'
import ProjectContainer from './components/containers/admin/project/ProjectContainer'
import ActivitiesContainer from './components/containers/admin/activities/ActivitiesContainer'
import ClientsContainer from './components/containers/admin/clients/ClientsContainer'
import CompanyContainer from './components/containers/admin/project/CompanyContainer'
import Download from './components/containers/admin/project/Download'
import EmployeeContainer from './components/containers/admin/employee/EmployeeContainer'
//import App from './components/App'
import Header from './components/Header'

const Root = () => {
  return (
    <Router>
      <div>
      <Header />
      <Route exact path="/" component={LoginForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/projects" component={ProjectContainer} />
        <Route exact path = "/activities" component = {ActivitiesContainer} />
        <Route exact path="/clients" component={ClientsContainer} />
        <Route exact path="/employees" component={EmployeeContainer} />
        <Route exact path="/download" component={Download} />
      </div>
    </Router>
  )
};

export default Root;
