import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logIn, logOut } from '../actions'

const ListSomeOtherData = () => {
    const isLoggedIn = useSelector(state => state.isLoggedRedcer)
    const dispatch = useDispatch()
    return (
        <div>
            {
                isLoggedIn ?
                    <div>
                        <p>Im LoggedIn</p>
                        <button onClick = {() => dispatch(logOut())}>LogOut</button>
                    </div> : <div>
                        <p>I'm not logged in</p>
                        <button onClick={() => dispatch(logIn())}>LogIn</button>
                    </div>
            }
        </div>
    )
}

export default ListSomeOtherData