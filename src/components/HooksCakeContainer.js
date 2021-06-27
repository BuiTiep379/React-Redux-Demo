import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {buyCake} from '../redux'
function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of Cakes - {numOfCakes}</h2>
            <button className="btn btn-primary" onClick = {() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer
