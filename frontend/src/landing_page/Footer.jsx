import React from "react";

const Footer = () => {
    return (
        <footer className="border-top" style={{backgroundColor:"rgb(250, 250, 250"}}>
        <div className="container mt-5 mb-2 ">
            <div className="row  mb-5">
                <div className="col mt-5">
                    <img src="media/images/Dhansetu.png" alt="Logo" className="mb-3" style={{width:"55%"}} />
                    <p>&copy; 2010-2024, Not Dhansetu Broking Ltd. All rigths reserved.</p>
                </div>
                <div className="col">
                    <p>Company</p>

                    <p  ><a  style={{textDecoration:"none"}}>About</a></p>

                    <p className="text-muted" ><a  style={{textDecoration:"none"}}>Products</a></p>

                    <p className="text-muted" ><a style={{textDecoration:"none"}}>Pricing</a></p>

                    <p className="text-muted" ><a  style={{textDecoration:"none"}}>Referral programme</a></p>

                    <p className="text-muted" ><a  style={{textDecoration:"none"}}>Carreres</a></p>

                    <p className="text-muted" ><a  style={{textDecoration:"none"}}>Dhansetu Technology</a></p>

                    <p className="text-muted" ><a style={{textDecoration:"none"}}>Press & media</a></p>

                    <p className="text-muted"> <a  style={{textDecoration:"none"}}>Dhansetu cares (CSR)</a></p>
                </div>

                <div className="col">
                    <p>Support</p>

                    <p className="text-muted"><a style={{textDecoration:"none"}}>Contact</a></p>

                    <p className="text-muted"><a style={{textDecoration:"none"}}>Support portal</a></p>

                    <p className="text-muted"><a style={{textDecoration:"none"}}>Z-Connect blog</a></p>

                    <p className="text-muted"><a style={{textDecoration:"none"}}>List of charges</a></p>

                   <p className="text-muted"><a style={{textDecoration:"none"}}> Downloads and resources</a></p>
                </div>

                <div className="col">
                    <p>Account</p>

                    <p className="text-muted"><a style={{textDecoration:"none"}}>Open an account</a></p>

                    <p className="text-muted"><a style={{textDecoration:"none"}}>Fund transfer</a></p>

                    <p className="text-muted"><a style={{textDecoration:"none"}}>60 day challenge</a></p>
                </div>
            </div>

            <p className="text-muted" style={{fontSize:"14px"}}>Dhansetu is a conceptual stock trading platform developed solely for educational and demonstration purposes. All market data, user interactions, and trade simulations are fictitious and not tied to any real-world financial institutions or exchanges. The project aims to showcase full-stack proficiency, including React-based dashboard design, secure authentication flows, backend API integration via Express, session management, and UI/UX finesse through custom branding and responsive layout.</p>

            <p className="text-muted" style={{fontSize:"14px"}}>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

            <p className="text-muted" style={{fontSize:"14px"}}>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

            <p className="text-muted" style={{fontSize:"14px"}}>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>

            <div className="p-3" style={{display:"flex", justifyContent:"space-around"}}>
                
                <p>NSE</p>
                <p>BSE</p>
                <p>MCX</p>
                <p>Terms & conditions</p>
                <p>Policies & Procedures</p>
                <p>Privacy policy</p>
                <p>Disclosure</p>
            </div>
        </div>
        </footer>
    )
}

export default Footer;
