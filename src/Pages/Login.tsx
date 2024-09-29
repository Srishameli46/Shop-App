import { Link } from "react-router-dom";
import { Input } from "../Components/Input";
import { Button } from "../Components/Button";

export function Login() {
    return (
        <>
            <div className="bg-gray-100 min-h-screen flex items-center justify-center">

                <div className="absolute inset-0 z-0">
                    <img src="https://source.unsplash.com/random/1920x1080" alt=""
                        className="w-full h-full object-cover filter blur-lg brightness-50" />
                </div>
                <div className="relative z-10 bg-white p-8 rounded-md shadow-lg">
                    <h1 className="text-xl font-bold mb-4">Login</h1>
                    <form action="#" method="POST">
                        <Input id="email" label="Email" type="email" placeholder="Email" />
                        <Input id="password" label="Password" type="password" placeholder="Password" />

                        <div className="flex items-center justify-between gap-8">
                            <Link to='/home'>
                                {/* <button
                                    className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button">
                                    Sign In
                                </button> */}
                                <Button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" childern="Sign In"
                                ></Button>
                            </Link>
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