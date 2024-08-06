import { FcGoogle } from "react-icons/fc";

export default function Auther() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">

            <div className="flex justify-center items-center gap-3 bg-blue-600 p-4 w-[300px] cursor-pointer hover:bg-blue-500 duration-100">
                <div className="">
                    <FcGoogle />
                </div>
                <div className="">
                    <h1 className="text-sm font-normal">Sign in with Google</h1>
                </div>
            </div>

        </div>
    )
}
