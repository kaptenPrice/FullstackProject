import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import { UserContext } from '../../utils/global/provider/UserProvider'
import './Profile.css'

export const Profile = () => {
    const history = useHistory()
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

const logout=()=>{
    localStorage.removeItem("username")
    setAuthenticatedUser(false)
    history.push(RoutingPath.homeView)
}

    return (
        <div className="profileWrapper">
            <img className="profileImg" src={"https://thispersondoesnotexist.com/image"} alt="" />
            <span className="displayesusername">{authenticatedUser}</span>
            <div className="profiledropdown">
                <a onClick={()=>history.push(RoutingPath.settingsView)}>Settings</a>
                <a onClick={()=>history.push(RoutingPath.profileView)}>Profile</a>
                <hr></hr>
                <a onClick={()=>logout()}>Logout</a>
            </div>
        </div>
    )
}