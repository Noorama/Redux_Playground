import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { increase, decrease } from '../actions'

const ListAllData = () => {
    const counter = useSelector(state => state.stateChange)
    const dispatch = useDispatch()
    return(
        <div>
            <p>Counter is: {counter}</p>
            <button onClick={() => dispatch(increase())}>+</button>
            <button onClick={() => dispatch(decrease())}>-</button>
        </div>
    )
}

export default ListAllData