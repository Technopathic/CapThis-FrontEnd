import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'

import SignIn from '../Containers/SignIn'
import Root from '../Containers/RootContainer'
import Detail from '../Containers/Detail'
import EditProfile from '../Containers/EditProfile'
import Followers from '../Containers/Followers'
import Followings from '../Containers/Followings'
import Notifications from '../Containers/Notifications'
import Profile from '../Containers/Profile'
import Settings from '../Containers/Settings'

class NavigationRouter extends Component {
  render() {
    return(
      <Router>
        <Scene initial key='root' component={Root} title='Home' hideNavBar={true}/>
        <Scene key='detail' component={Detail} title='Detail' hideNavBar={true}/>
        <Scene key='editProfile' component={EditProfile} title='Edit Profile' hideNavBar={true}/>
        <Scene key='followers' component={Followers} title='Followers' hideNavBar={true}/>
        <Scene key='followings' component={Followings} title='Following' hideNavBar={true}/>
        <Scene key='notifications' component={Notifications} title='Notifications' hideNavBar={true}/>
        <Scene key='profile' component={Profile} title='Profile' hideNavBar={true}/>
        <Scene key='settings' component={Settings} title='Settings' hideNavBar={true}/>

        <Scene key='signin' component={SignIn} title='Sign In' hideNavBar={true}/>
      </Router>
    )
  }
}

export default NavigationRouter
