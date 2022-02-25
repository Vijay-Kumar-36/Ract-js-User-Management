import React from 'react'
import { useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { deleteuser } from '../Store/Action/user'
import List1 from './List1.css'
export const List = () => {
    
    const display = useSelector((state)=>{
        return state.data.users;
    })
    const dispatch=useDispatch();
    console.log(display);
  return (
    <div>
    <div className='list-box'>
        {
            display.map((list,index)=>{
                return(
                    
                    <div key={index} className='lb' >
                        <h2><img src="https://img.icons8.com/color/25/000000/user.png"/>User:{list.name}</h2>
                        <p><img src="https://img.icons8.com/color/25/000000/new-contact.png"/>Contact:{list.contact}</p>
                        <p><img src="https://img.icons8.com/color/25/000000/new-post.png"/>Email:{list.email}</p>
                        <p><img src="https://img.icons8.com/color/25/000000/comments--v1.png"/>Message:{list.address}</p>
                        <button onClick={()=>dispatch(deleteuser(index))}>Remove</button>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}
