import React from 'react';
import  {HashRouter as Router,Route,Switch}  from  'react-router-dom';
import AppComponent from './js/App';
export default class RouterComponent extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Router>
                    <React.Fragment>
                        <Switch>
                            <Route path="/" exact component={AppComponent}></Route>
                            <Route path="/detail" component={AppComponent}></Route>
                        </Switch>
                    </React.Fragment>
                </Router>
            </React.Fragment>
        )
    }
}
