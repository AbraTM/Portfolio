import React from "react";
import "./styling/footer.css";

export default function Footer(){
    return(
        <div className="footer" id="contact">
            <div className="footer-left">
                <h3>CONTACT ME</h3>
                <div>tusharmalhan2564@gmail.com</div>
                <div>+91 7838122747</div>
                <div>New Delhi, India</div>
            </div>

            <div className="footer-right">
                <h4>Socials : </h4>
                <div className="right-top">
                    <div className="social-link">
                        <a href="#">
                            <img src="./assets/twitter.png" className="social"></img>
                        </a>
                    </div>
                    
                    <div className="social-link">
                        <a href="#">
                            <img src="./assets/instagram.png" className="social"></img>
                        </a>
                    </div>

                    <div className="social-link">
                        <a href="#">
                            <img src="./assets/linkedin.png" className="social"></img>
                        </a>
                    </div>
                </div>
                
                <div className="right-bottom">
                    Copyright @2024 | Designed By Tushar Malhan
                </div>
            </div>
           
        </div>
    )
}
