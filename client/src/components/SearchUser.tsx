import { useState, useEffect } from "react";

function SearchUser() {
    const [backendData, setBackendData] = useState("");
    const [status, setStatus] = useState(0);
    const [statusText, setStatusText] = useState("");
    const [input, setInput] = useState("");
    const [searching, setSearching] = useState(false);

    useEffect(() => {
        if (status) {
            if (status === 400) {
                setStatusText("Wrong UID format");
            } else if (status === 404) {
                setStatusText("Player does not exist");
            } else if (status === 424) {
                setStatusText("Game maintenance");
            } else if (status === 429) {
                setStatusText("Rate-limited");
            } else if (status === 500) {
                setStatusText("General server error");
            } else if (status === 503) {
                setStatusText("ENKA SCREWED UP");
            } else {
                setStatusText("");
            }
        }
    }, [status]);

    const handleClick = () => {
        setBackendData("");
        setStatus(0);
        setSearching(true);

        if (!input) {
            setStatusText("Please provide a UID");
        }

        if (!input.match(/([1,2,5-9])\d{8}/)) {
            setStatus(404);
            return;
        }

        fetch(`/api/${input}`)
            .then((res) => {
                setSearching(false);
                setStatus(res.status);
                return res.json();
            })
            .then((data) => setBackendData(data.playerInfo.nickname))
            .catch((error) => console.log(error));
    };

    return (
        <div className="search-user-container">
            <div>
                <input
                    className="search-user-input"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
            <div>
                <button className="saearch-btn" onClick={handleClick}>
                    Submit
                </button>
            </div>

            <p>
                {backendData ||
                    (status && statusText) ||
                    (searching && "Searching...")}
            </p>
        </div>
    );
}

export default SearchUser;
