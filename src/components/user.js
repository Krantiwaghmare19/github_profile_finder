import React from "react";

const User = ({ user }) => {
    const { avatar_url, followers, following, public_repos, name, login, created_at } = user;

    const createDate = new Date(created_at);
    return (
        <div className="user">
            <img src={avatar_url} alt="user" className="avatar" />
            <div className="name-container">
                <a href={`https://github.com/${login}`}>{name || login}</a>
                <p>User joined on {`${createDate.getDate()} ${createDate.toLocaleString('en-us', {
                    month: "short",
                })}${createDate.getFullYear()}`}</p>
            </div>
            
            <div className="profile-info">
                <p>Public Repositories: </p>
                <p>{public_repos}</p>

            </div>

            <div className="profile-info">
                <p>Followers: </p>
                <p>{followers}</p>
            </div>

            <div className="profile-info">
                <p>Following: </p>
                <p>{following}</p>
            </div>

        </div>
    );
};

export default User;
