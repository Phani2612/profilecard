import React from 'react';
import './Card1.css';

function Card1({ userData }) {
    return (
        <div className="card1-container">
            <div className="card1-header">
                <img src={userData[0]?.picture?.large} alt="User" className="card1-img" />
                <div className="card1-title">
                    <h2>{userData[0]?.name?.first} {userData[0]?.name?.last}</h2>
                    <p>{userData[0]?.gender}</p>
                </div>
            </div>

            <div className="card1-body">
                <div className="card1-info">
                    <p><strong>Phone:</strong> {userData[0]?.phone}</p>
                    <p><strong>Email:</strong> {userData[0]?.email}</p>
                    <p><strong>Location:</strong> {userData[0]?.location?.city}, {userData[0]?.location?.country}</p>
                </div>
            </div>

            <div className="card1-footer">
                <button className="card1-btn">Follow</button>
                <button className="card1-btn">Message</button>
            </div>
        </div>
    );
}

export default Card1;
