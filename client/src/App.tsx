import { useState, useEffect } from "react";

function App() {
    const [backendData, setBackendData] = useState();

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
                <p>{JSON.stringify(backendData["playerInfo"])}</p>
            )}
        </div>
    );
}

export default App;
