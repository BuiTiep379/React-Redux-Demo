import React , {useState}from 'react'
import { buyCake } from '../redux'
import {connect} from 'react-redux'
function NewCakeContainer(props) {
    const [number, setNumber] = useState(1);

    return (
        <div className="container">
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)}></input>
            <button onClick={() => props.buyCake(number)} className="btn btn-primary">Buy {number} Cake</button>
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
        buyCake: number => dispatch(buyCake(number))
    }
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(NewCakeContainer)    