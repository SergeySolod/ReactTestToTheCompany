import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Home from './pages/home/home'
import Task from './pages/task/task'
import Navbar from './components/navbar/navbar'

const App = () =>   {
    return (
        <div>
            <Navbar/>
                       <div className="container pt-4">
                <Switch>
                    <Route path='/' exact render={() => <Home/>}/>
                    <Route path='/task' exact render={() => <Task/>}/>
                </Switch>
            </div>
        </div>
    );
}


export default App