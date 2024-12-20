import React from 'react';
import './Card2.css';

function Card2({ userData }) {
    return (
        <div className="card2-container">
            <div className="card2-header">
                <div className="card2-img-wrapper">
                    <img src={userData[0]?.picture?.large} alt="User" className="card2-img" />
                </div>
                <div className="card2-title">
                    <h2>{userData[0]?.name?.first} {userData[0]?.name?.last}</h2>
                    <p>{userData[0]?.gender}</p>
                </div>
            </div>

            <div className="card2-body">
                <p className="card2-bio">{userData[0]?.location?.city}, {userData[0]?.location?.country}</p>
                <p><strong>Phone:</strong> {userData[0]?.phone}</p>
                <p><strong>Email:</strong> {userData[0]?.email}</p>
            </div>

            <div className="card2-footer">
                <button className="card2-btn">Follow</button>
                <button className="card2-btn">Message</button>
            </div>
        </div>
    );
}

export default Card2;
