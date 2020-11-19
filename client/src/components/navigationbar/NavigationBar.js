/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import LogoType from '../../utils/images/chef.svg'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../utils/global/provider/UserProvider'
import { Profile } from '../profile/Profile'
import './NavigationsBar.css'
import RoutingPath from '../../routes/RoutingPath'



export const NavigationBar = () => {
    const history = useHistory();
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

    const displayIfAuthenticated = () => {
        return (authenticatedUser)
            ? <div className="profile"> <Profile /></div>
            : <span onClick={() => history.push(RoutingPath.signInView)} className="signin">Sign in</span>  
    }

    return (
        <div className="navigationBarWrapper">
            <img onClick={() => history.push(RoutingPath.homeView)}
                className="logotype"
                src={LogoType}
                alt="chef.svg"
            />
            {displayIfAuthenticated()}
        </div>
    )
}