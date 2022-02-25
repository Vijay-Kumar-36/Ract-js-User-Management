export function adduser(user)
{
    return{
        type:"ADD_USER",
        playload:user,
    }
}
 export function deleteuser(id)
 {
     return{
         type:"DELETE_USER",
         playload:id,
     }
 }