import React from 'react';
import{
    BrowserRouter as Router,
    Route,
    Switch,
    useHistory
} from 'react-router-dom';
import Home from './components/views/Home/Home';
import Chat from './components/views/Chat/Chat';

const Routes= ()=>{

    const history= useHistory();

    return(
        //estructura del ruteo en react, en cada Route pongo el path
        // y su component, tambien hago el import
        <Router>
            <Switch history={history}>
                <Route exact path='/' component={Home}/>
                <Route exact path='/chat' component={Chat}/>
            </Switch>
        </Router>

    );
}

export default Routes;