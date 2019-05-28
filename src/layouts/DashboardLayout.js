import React, { Component } from 'react';  
import { Route } from 'react-router-dom';  
  
const DashboardLayout = ({children, ...rest}) => {  
  return (  
    <div className="page page-dashboard">  
      <div className="sidebar">This is the Second Layout</div>  
      <div className="main">{children}</div>  
    </div>  
  )  
}  
  
const DashboardLayoutRoute = ({component: Component, ...rest}) => {  
  return (  
    <Route {...rest} render={matchProps => (  
      <DashboardLayout>  
          <Component {...matchProps} />  
      </DashboardLayout>  
    )} />  
  )  
};  
  
export default DashboardLayoutRoute; 