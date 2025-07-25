import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Password } from "@mui/icons-material";
import './SignUp.css';

const SignUp = () => {

    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
        username: "",
    });

    const { email, password, username } = inputValue;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleError = (err) => {
        toast.error(err, {
            position: "bottom-left",
        })
    }

    const handleSuccess = (msg) => {
        toast.success(msg, {
            position: "bottom-right",
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("https://dhansetu-backend.onrender.com/signup", {
                ...inputValue
            }, {
                withCredentials: true
            });

            const { success, message } = data;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate("/dashboard");
                }, 1000);
            } else {
                handleError(message)
            }
        } catch (error) {
            console.log(error);
        }

        setInputValue({
            ...inputValue,
            email: "",
            password: "",
            username: "",
        })
    }

    return (
        <div className="signup-pastel-container">
            <h2>Signup Account</h2>
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} placeholder="Enter your email" onChange={handleOnChange} />
                </div>

                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" value={username} placeholder="enter Your Username" onChange={handleOnChange} />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} placeholder="Enter Your Password" onChange={handleOnChange} />
                </div>
                <button type="submit">SignUp</button>
                <div>
                <span>
                    Already have an account? <Link to={"/login"}>Login</Link>
                </span>
                </div>
            </form>
            <ToastContainer />
        </div>

    )
}

export default SignUp;