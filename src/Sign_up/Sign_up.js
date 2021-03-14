import React, { Component } from 'react'
import './Sign_up.css'
import $ from "jquery";

class Sign_in extends Component {
    componentDidMount() {
        $("#login-button").click(function(event){
		 event.preventDefault();
	 
	 $('form').fadeOut(500);
	 $('.wrapper').addClass('form-success');
});
    }

    render() {
        return (
                <div class="wrapper">
                <div class="container">
                <h1>Welcome</h1>

                <form class="form">
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Email id" />
                <input type="password" placeholder="Password" />
                <button type="submit" id="login-button">Sign Up</button>
                </form>
                </div>

                <ul class="bg-bubbles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                </ul>
                </div> 
        )
    }
}

export default Sign_in
