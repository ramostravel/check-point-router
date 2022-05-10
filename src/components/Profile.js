import React from 'react'
import {Link,Outlet, useNavigate} from 'react-router-dom'

const Profile = () => {
    const navigate=useNavigate()
    const goHome=()=>{
          navigate('/')
    }
  return (
    <div>Profile
<Link to="setting">Update your Profile</Link>
<button onClick={goHome}>goHome</button>
<Outlet/>

    </div>
  )
}

export default Profile