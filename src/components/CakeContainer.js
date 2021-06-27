import React from 'react'
import { buyCake } from '../redux'
import {connect} from 'react-redux'
function CakeContainer(props) {
    return (
        <div className="container">
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake} className="btn btn-primary">Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}


const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(CakeContainer)    