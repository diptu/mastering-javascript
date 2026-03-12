import React from 'react'
import { useParams } from 'react-router'

const User = () => {
    const { user_id } = useParams()
    return (
        <div>
            User Id : {user_id}
        </div>
    )
}

export default User
