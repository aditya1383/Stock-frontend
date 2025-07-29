import React from "react";
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="container mb-5 p-4">
            <div className="row text-center mb-5">
                <img src="media/images/homeHero.png" alt="home" className="mb-5 mt-5" style={{width:"100%"}}/>

                <h1 className="mt-5">Invest in EveryThing</h1>
                <p>Online Platform to invest in stocks, derivatives, mutual funds, and more</p>
                <Link to="/signup"><button className="p-2 btn btn-primary fs-5 mb-5" style={{width:"15%", margin:"0 auto"}}>Signup Now</button></Link>
                
            </div>
        </div>
    )
}

export default Hero;
