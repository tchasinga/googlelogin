import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from "../firebase"; // Ensure this file correctly initializes Firebase

export default function Auther() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const signInWithGoogle = async () => {
        setLoading(true);
        setError(null);
        const provider = new GoogleAuthProvider();
        const auth = getAuth(app);
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
        } catch (error) {
            setError("Error signing in with Google: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            {user ? (
                <div className="text-center">
                    <h2 className="text-lg font-bold mb-2">Welcome, {user.displayName}</h2>
                    <img src={user.photoURL} alt="Profile" className="rounded-full w-24 h-24 mb-2" />
                    <p className="text-sm text-gray-600">Email: {user.email}</p>
                </div>
            ) : (
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
            )}
            {loading && <p className="mt-4 text-blue-500">Loading...</p>}
            {error && <p className="mt-4 text-red-500">{error}</p>}
        </div>
    );
}
