import React from 'react'
import ModalAnswer from './ModalAnswer'


class OneAlgorithm extends React.Component {


    state=({
        show: false
        // answer: ""

    })


    showAnswer=()=> {
        console.log("show Answer called", this.state.show)
        this.setState({
            show: !this.state.show
            // answer: code
        })
    }


    render (){
    const {show}= this.state
    return ( <div className="item">
    <i className="linkify icon"></i>
    <div className="content">
    <div className="header" onClick={()=> this.showAnswer()} ><a>{this.props.algo.name}</a></div>
    </div>
    <ModalAnswer show={show} answer={this.props.algo.javascript_code}/>
 </div>)
    }
}

export default OneAlgorithm