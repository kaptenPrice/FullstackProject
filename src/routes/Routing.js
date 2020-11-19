/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { UserContext } from '../utils/global/provider/UserProvider';
import { Homeview } from '../view/HomeView';
import { RecipeView } from '../view/RecipeView'
import { SettingsView } from '../view/SettingsView';
import { SignInView } from '../view/SignInView';
import { ProfileView } from '../view/ProfileView';
import RoutingPath from './RoutingPath'




export const Routing = (props) => {

    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const checkIfUserIsAuthenticated = () => {
        setAuthenticatedUser(localStorage.getItem("username"))

    }

    const blockRouteIFAuthenticated = (navigateToView) => {
        return authenticatedUser ? Homeview : navigateToView
    }
    const blockIfNotAuthenticated = (navigateToView) => {
        return !authenticatedUser ? SignInView : navigateToView
    }

    useEffect(() => {
        checkIfUserIsAuthenticated()
    }, [])

    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path={RoutingPath.recipeView} component={RecipeView} />
                <Route exact path={RoutingPath.signInView} component={blockRouteIFAuthenticated(SignInView)} />
                <Route exact path={RoutingPath.settingsView} component={blockIfNotAuthenticated(SettingsView)} />
                <Route exact path={RoutingPath.profileView} component={blockIfNotAuthenticated(ProfileView)} />
                <Route component={Homeview} />
            </Switch>
        </Router>

    )
}