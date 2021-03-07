import React from 'react'

import './Footer.css'

function Footer() {
    return (
        <div className="footerr">
            <div class="footer-basic">
            <footer>
            <div class="sociall"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
            <ul class="list-inline">
            <li class="list-inline-item"><a href="#">Home</a></li>
            <li class="list-inline-item"><a href="#">Services</a></li>
            <li class="list-inline-item"><a href="#">About</a></li>
            <li class="list-inline-item"><a href="#">Terms</a></li>
            <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p class="copyright">Nomad india © 2021</p>
            </footer>
            </div>
        </div>
    )
}

export default Footer
