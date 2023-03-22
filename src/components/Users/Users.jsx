import React from 'react'
import './Users.css'

const Users = ({ele}) => {
  console.log(ele)
  return (
    <div className='users'>
        <img src={ele.avatar} alt="" />
        <div style={{marginTop:'1rem'}}>
            <h3>{ele.first_name+" "+ele.last_name}</h3>
            <p>{ele.email}</p>
        </div>
    </div>
  )
}

export default Users