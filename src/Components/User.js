import React from 'react'
import {Link} from 'react-router-dom'

function User({user}) {
    return (
        <div style={{borderRadius:'10px', border:'1px solid black', margin:'15px', width:'300px', boxShadow:'5px 5px 8px'}}>
            <h5 style={{fontSize:'x-large', fontWeight:'bold'}}>{user.name}</h5>
            <h5>{user.email}</h5>
            <Link to={`/Details/${user.id}`}><h6>Full informations</h6></Link>
        </div>
    )
}
export default User;
