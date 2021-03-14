import React, { Component } from 'react'
import App from '../App.js'
import './index.css'

class index extends Component {

    Goto = () => {
        return <App />;
    }

    render() {
        return (
            <>
                <div className="themain">
                    <h1 style={{textAlign: 'center'}}>WELCOME TO NOMAD !</h1>
                        <div class="ex2">
                        <label for="item-2">Toggle Div</label>
                        <input type="checkbox" name="rwo" id="item-2" />
                        <div class="inner">
                        <div class="hide2">
                        <div className="buton1"><a href="#"><button onClick={this.Goto}>SIGN UP</button></a></div>
                        <div className="buton2"><a href="#"><button>SIGN IN</button></a></div>
                        </div>
                        </div>
                        </div>
                </div>
            </>
        )
    }
}

export default index
