import React from 'react'

const Body = () => {
  const fruits=['apple','grapes','mango']
  
  const user={
    name:'dink',
    age:44,
    education:'doctor',
    ismarried:true,
    address:{
      district:'chitwan',
      town:'bagh'
    }
  }
  const showfruits = fruits.map((val,index)=> {
     return ( 
      <li>
        {(index+1) +val + 'taste like fruits'}
      </li>
     )
    })
   
 
  return (
    <div>this is a Body
      <ol>{showfruits}</ol>
      <p className='font-bold text-green-700 text-xl'>my name is <span className='underline text-red-700'>{user.name}</span>.my age is<span className='underline text-red-700'>{user.age}</span>. my address is <span>{user.address.district} </span> in town called <span className='underline text-red-700'>{user.address.town}</span></p>
    </div>

  )
}

export default Body