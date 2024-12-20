import React, { useEffect, useState } from 'react';
import './Card.css';
import axios from 'axios';
import Card1 from './Card1';
import Card2 from './Card2';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importing icons

function Card() {
    const [index, setIndex] = useState(0);
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDetails();
    }, []);

    const fetchDetails = async () => {
        try {
            const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
            setUserData(response.data.results);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const cardComponents = [
        (data) =>
            data.map((item) => (
                <div className="card-container" key={item.login.uuid}>
                    <div id="image-con">
                        <img src={item.picture.large} id="user-img" alt={`${item.name.first} ${item.name.last}`} />
                    </div>
                    <div id="details-con">
                        <div className="name">
                            {item.name.title}. {item.name.first} {item.name.last}
                        </div>
                        <div className="gender">{item.gender}</div>
                        <div className="phone">{item.phone}</div>
                    </div>
                </div>
            )),
        () => <Card1 userData = {userData} />,
        () => <Card2 userData = {userData}  />,
    ];

    const changeCard = () => {
        setIndex((prevIndex) => (prevIndex + 1) % cardComponents.length);
    };

    const prevCard = () => {
        setIndex((prevIndex) => (prevIndex - 1 + cardComponents.length) % cardComponents.length); // For circular navigation
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="card-wrapper">
       
            {cardComponents[index](userData)}
        

        <div className="card-navigation">
            <div className="prev-icon" onClick={prevCard}>
                <FaArrowLeft size={30} />
            </div>
            <div className="next-icon" onClick={changeCard}>
                <FaArrowRight size={30} />
            </div>
        </div>
    </div>
    );
}

export default Card;
