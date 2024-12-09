
import {createStore} from "redux"


const Init= {Statecart: []}//array inicial

const reducer =(state= Init, action)=>{
    switch (action.type) {
        case "INCREMENT":
            console.log(action.payload)
            return {...state, Statecart: [...state.Statecart, action.payload]}
    
        default:
            return state
            break;
    }
}

const Creatreducer= createStore(reducer)


export default Creatreducer

