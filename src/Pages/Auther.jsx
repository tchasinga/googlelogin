import { FcGoogle } from "react-icons/fc";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from "../firebase"; // Ensure this file correctly initializes Firebase

export default function Auther() {
    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth(app);
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result.user);
        } catch (error) {
            console.error("Error signing in with Google: ", error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div 
                onClick={signInWithGoogle}
                className="flex justify-center items-center gap-3 bg-blue-600 p-4 w-[300px] cursor-pointer hover:bg-blue-500 duration-100"
            >
                <div>
                    <FcGoogle />
                </div>
                <div>
                    <h1 className="text-sm font-normal">Sign in with Google</h1>
                </div>
            </div>
        </div>
    );
}
