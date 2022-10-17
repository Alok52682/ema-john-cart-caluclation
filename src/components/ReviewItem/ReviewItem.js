import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ product, handle }) => {
    const { name, price, quantity, img, id } = product;
    return (
        <div className='reviewItem'>
            <div className="img-container">
                <img src={img} alt="" />
            </div>
            <div className='review-details-container'>
                <div className="review-details">
                    <h4>{name}</h4>
                    <p>Price : {price}$</p>
                    <p>Quantity : {quantity}</p>
                </div>
                <div className="btn-container">
                    <button onClick={() => handle(id)}>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;