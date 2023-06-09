import axios from "axios"
import { useState } from "react"

//! https://users-crud.academlo.tech/swagger/ 
// http://users-crud.academlo.tech/swagger/ //Para netlify (por Protocol: http/1.1) ¿?

const useUserCrud = () => {

    const [users, setUsers] = useState()

    const url = 'https://users-crud.academlo.tech/users/'

    //!GET
    const getAllUsers = () => {
        axios.get(url)
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }

    //!POST
    const createNewUser = data => {
        axios.post(url, data)
            .then(res => getAllUsers()) //NOTA 1
            .catch(err => console.log(err))
    }

    //!DELETE
    const deleteUserById = id => {
        const urlDelete = `${url}${id}/`
        axios.delete(urlDelete)
            .then(res => getAllUsers())
            .catch(err => console.log(err))
    }

    //!UPDATE
    const updateUserById = (id, data) => {
        const urlUpdate = `${url}${id}/`
        axios.patch(urlUpdate, data)
            .then(res => getAllUsers())
            .catch(err => console.log(err))
    }

    return { users, getAllUsers, createNewUser, deleteUserById, updateUserById }
}


export default useUserCrud


//NOTA 1: el then() es porque si se Posteo en el servidor, asi que ahora nomas me falta renderizar