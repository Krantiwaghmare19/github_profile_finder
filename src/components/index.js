import React, { useState, useEffect } from "react";
import User from "./user";
import './styles.css';

const GithubProfileFinder = () => {
    const [userName, setUserName] = useState("krantiwaghmare19");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchGithubUserData() {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(`https://api.github.com/users/${userName}`);
            if (!res.ok) {
                throw new Error("User not found");
            }
            const data = await res.json();
            setUserData(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetchGithubUserData();
    }

    useEffect(() => {
        fetchGithubUserData();
    }, []);

    return (
        <div className="github-profile-container">
            <form className="input-wrapper" onSubmit={handleSubmit}>
                <input
                    name="search-by-username"
                    type="text"
                    placeholder="Search Github Username..."
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {userData && <User user={userData} />}
        </div>
    );
};

export default GithubProfileFinder;
