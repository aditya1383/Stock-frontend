import React from "react";
import { Link } from 'react-router-dom';

const OpenAccount = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="row text-center mt-5">
                <h1 className="mt-5">Open a Dhansetu account</h1>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <Link to="/signup">
  <button className="btn btn-primary fs-5">Sign Up</button>
</Link>
            </div>
        </div>
    )
}

export default OpenAccount
