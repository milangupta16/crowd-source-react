import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import {AddItem}  from '../Item';
import Navbar from '../NavBar/Navbar';
import ShowItems from '../Item/ShowItems';
import ShowReqItems from '../Item/ShowReqItems';
import BuyItem from '../Item/BuyItem';
import About from '../NavBar/About';
import {useFetch} from '../custom-hooks/useFetch';
import '../Item/indexelements.js';
import {ProfilePage} from '../Profile';
function App() {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, []);

    return (
        <div className="container-full-bg"> 
        <div>
            <div>
                    
                 <div> 
                    {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                    <Router history={history}>
                        <Navbar/>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Switch>
                           
                            <PrivateRoute exact path="/" component={LoginPage} />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/register" component={RegisterPage} />
                            <Route path="/about" component={About} />
                            <PrivateRoute path="/showallitems" component={() => <ShowItems url={`http://localhost:8088/getAllItems`} />}/>
                            <PrivateRoute path="/profile" component={ProfilePage}/>
                            {/* <Route path="/showuseritems" component={() => <ShowItems url={`http://localhost:8085/getAllItems`} />}/>
                            <Route path="/showallitems" component={() => <ShowItems url={`http://localhost:8085/getAllItems`} />}/> */}
                            <Route path="/showallreqitems" component={ShowReqItems}/>
                            <Route path="/logout" component={LoginPage}/>
                            <PrivateRoute path="/additem" component={AddItem} />
                            <PrivateRoute path="/buyitem" component={BuyItem} />
                            <PrivateRoute path ="/additem/:id" component={AddItem}/>
                            <Redirect from="*" to="/" />
                        </Switch>
                    </Router>
                 </div> 
            </div>
        </div>
        </div>
    );
}

export { App };