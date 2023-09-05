import { useState, useEffect } from "react";
import { User } from "enka-network-api";

function App() {
    const [backendData, setBackendData] = useState<User>();

    useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setBackendData(data));
    }, []);

    return (
        <div>
            {typeof backendData === "undefined" ? (
                <p>Loading...</p>
            ) : (
                <p>{JSON.stringify(backendData)}</p>
            )}
        </div>
    );
}

export default App;
