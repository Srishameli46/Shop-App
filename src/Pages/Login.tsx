import { Link, useNavigate } from "react-router-dom";
import { Input } from "../Components/Input";
import { Button } from "../Components/Button";
import { useState } from "react";

export function Login() {
    const [email, setEmail] = useState<String>("");
    const [errorEmail, setErrorEmail] = useState<String>("")
    const [password, setPassword] = useState<String>("");
    const [errorPassword, setErrorPassword] = useState<String>("")
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log("fghj" + email + "dfg");
        console.log(password);
        if (email == "" && password == "") {
            setErrorEmail("Email is required.")
            setErrorPassword("Password is required.")
        } else if (email == "") {
            setErrorEmail("Email field is required.")
        } else if (password == "") {
            setErrorPassword("Password field is required.")
        } else {
            navigate("/home")
        }
    }

    return (
        <>
            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <img src="https://source.unsplash.com/random/1920x1080" alt=""
                        className="w-full h-full object-cover filter blur-lg brightness-50" />
                </div>
                <div className="relative z-10 bg-white p-8 rounded-md shadow-lg">
                    <h1 className="text-xl font-bold mb-4 text-center">Login</h1>
                    <form action="#" method="POST">
                        <Input id="email" label="Email" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <div className="text-red-500 mb-3">{errorEmail}</div>
                        <Input id="password" label="Password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <div className="text-red-500 mb-3">{errorPassword}</div>
                        <div className="flex items-center justify-between gap-8">
                            <Button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" children="Sign In" onClick={handleLogin}></Button>
                            <a className="inline-block align-baseline font-bold text-sm text-cyan-500 hover:text-cyan-800"
                                href="#">
                                Forgot Password?
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}