import { useEffect, useState } from "react"

const useFirebase = () => {
    const [user, setUser] = useState({});
    useEffect(() => {

    }, []);

    const signWithGoogle = () => {
        console.log('Singin');
    }
    return [user, setUser];
}
export default useFirebase;