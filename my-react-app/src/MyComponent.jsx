import React, { useState } from 'react';
function MyComponent() {
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState();
    const [shipping, setShipping] = useState("Delivery");

    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }
    function handlePaymentChange(event){
        setPayment(event.target.value);
    }
    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <input value={name} type="text" onChange={handleNameChange} />

            <p>Quantity: {quantity}</p>
            <input value={quantity} type="number" onChange={handleQuantityChange} />

            <p>Comment: {comment}</p>
            <textarea value={comment} onChange={handleCommentChange} placeholder='Please write the instruction for delivery'></textarea>

            <p>Payment: {payment}</p>
            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select payment option</option>
                <option value="Gcash">Gcash</option>
                <option value="PayMaya">PayMaya</option>
                <option value="CreditCard">Credit Card</option>
                <option value="DebitCard">Debit Card</option>
            </select>
            
            <p>Shipping: {shipping}</p>
            <label>
                <input type="radio" value={"Pick Up"} checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
                Pick Up
            </label><br />

            <label>
                <input type="radio" value={"Delivery"} checked={shipping === "Delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>
        </div>
    );
}export default MyComponent