import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../pages/CartContext';

import axios from 'axios';

const handlePlaceOrder = async () => {
  if (!user) return alert("Please log in to place an order");

  const orderData = {
    userId: user._id,
    items: cartItems,
    deliveryAddress,
    paymentMethod,
    totalAmount: totalAmount + 500 + tax,
  };

  try {
    await axios.post('http://localhost:5000/api/orders/place', orderData);
    alert("Order placed successfully!");
    // Clear cart or redirect to order summary
  } catch (err) {
    console.error("Error placing order", err);
    alert("Something went wrong. Try again.");
  }
};
const ShoppingCart = () => {
    const [showAddressDropdown, setShowAddressDropdown] = React.useState(false);
    const [receiveDate, setReceiveDate] = React.useState("");
    const [returnDate, setReturnDate] = React.useState("");
    const [selectedAddress, setSelectedAddress] = React.useState("No address selected");
    const [paymentMethod, setPaymentMethod] = React.useState("COD");

    const { cartItems, increment, decrement } = useCart();
    const user = JSON.parse(localStorage.getItem("user"));

    const calculateRentalDays = () => {
        if (!receiveDate || !returnDate) return 1;
        const start = new Date(receiveDate);
        const end = new Date(returnDate);
        const diffTime = end.getTime() - start.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays > 0 ? diffDays : 1;
    };

    const rentalDays = calculateRentalDays();
    const totalAmount = cartItems.reduce(
        (acc, item) => acc + item.offerPrice * item.quantity * rentalDays,
        0
    );
    const tax = totalAmount * 0.02;

    const handlePlaceOrder = () => {
        if (!user) {
            alert("Please login to place an order.");
            return;
        }

        if (!selectedAddress || selectedAddress === "No address selected") {
            alert("Please select a delivery address.");
            return;
        }

        alert(`Order placed successfully!\nPayment: ${paymentMethod}\nAddress: ${selectedAddress}`);
    };

    return (
        <div className="flex flex-col md:flex-row py-16 max-w-6xl w-full px-6 mx-auto">
            {/* Cart Items */}
            <div className='flex-1 max-w-4xl'>
                <h1 className="text-3xl font-medium mb-6">
                    Shopping Cart <span className="text-sm text-indigo-500">{cartItems.length} Items</span>
                </h1>

                <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
                    <p className="text-left">Product Details</p>
                    <p className="text-center">Subtotal</p>
                    <p className="text-center">Action</p>
                </div>

                {cartItems.map((product, index) => (
                    <div key={index} className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3">
                        <div className="flex items-center md:gap-6 gap-3">
                            <div className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded">
                                <img className="max-w-full h-full object-cover" src={product.image} alt={product.name} />
                            </div>
                            <div>
                                <p className="hidden md:block font-semibold">{product.name}</p>
                                <div className="font-normal text-gray-500/70">
                                    <p>Size: <span>{product.size || "N/A"}</span></p>
                                    <div className='flex items-center gap-2'>
                                        <p>Qty:</p>
                                        <div className="flex items-center gap-1">
                                            <button onClick={() => decrement(product.id)} className="px-2 border">-</button>
                                            <span>{product.quantity}</span>
                                            <button onClick={() => increment(product.id)} className="px-2 border">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-center">Rs {(product.offerPrice * product.quantity * rentalDays).toFixed(2)}</p>
                        <button className="cursor-pointer mx-auto" onClick={() => decrement(product.id)}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="m12.5 7.5-5 5m0-5 5 5m5.833-2.5a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0"
                                    stroke="#FF532E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                ))}

                <Link to={"/products"}>
                    <button className="group cursor-pointer flex items-center mt-8 gap-2 text-indigo-500 font-medium">
                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
                            <path d="M14.09 5.5H1M6.143 10 1 5.5 6.143 1" stroke="#615fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Continue Shopping
                    </button>
                </Link>
            </div>

            {/* Order Summary */}
            <div className="max-w-[360px] w-full bg-gray-100/40 p-5 max-md:mt-16 border border-gray-300/70">
                <h2 className="text-xl font-medium">Order Summary</h2>
                <hr className="border-gray-300 my-5" />

                <div className="mb-6 space-y-4">
                    {/* Rental Duration */}
                    <div>
                        <p className="text-sm font-medium">Rental Duration</p>
                        <div className="flex flex-col gap-2 mt-2">
                            <label className="text-sm text-gray-600">Receive Date</label>
                            <input
                                type="date"
                                className="w-full px-3 py-2 border border-gray-300"
                                value={receiveDate}
                                onChange={(e) => setReceiveDate(e.target.value)}
                            />
                            <label className="text-sm text-gray-600">Return Date</label>
                            <input
                                type="date"
                                className="w-full px-3 py-2 border border-gray-300"
                                value={returnDate}
                                onChange={(e) => setReturnDate(e.target.value)}
                            />
                        </div>
                        <p className="mt-2 text-gray-500 text-sm">Rental Days: <strong>{rentalDays}</strong></p>
                    </div>

                    {/* Delivery Address */}
                    <div>
                        <p className="text-sm font-medium uppercase">Delivery Address</p>
                        <div className="relative mt-2">
                            <p className="text-gray-600">{selectedAddress}</p>
                            <button
                                onClick={() => setShowAddressDropdown(!showAddressDropdown)}
                                className="text-indigo-500 hover:underline text-sm mt-1"
                            >
                                Change
                            </button>
                            {showAddressDropdown && (
                                <div className="absolute top-full mt-2 bg-white border rounded shadow w-full z-10">
                                    {["Karachi, Pakistan", "Lahore, Pakistan", "Add Address"].map((addr, idx) => (
                                        <p
                                            key={idx}
                                            onClick={() => {
                                                setSelectedAddress(addr === "Add Address" ? "Custom Address (To be implemented)" : addr);
                                                setShowAddressDropdown(false);
                                            }}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                        >
                                            {addr}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div>
                        <p className="text-sm font-medium uppercase">Payment Method</p>
                        <select
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none"
                        >
                            <option value="COD">Cash On Delivery</option>
                            <option value="Online">Online Payment</option>
                        </select>
                    </div>
                </div>

                <hr className="border-gray-300" />

                <div className="text-gray-500 mt-4 space-y-2">
                    <p className="flex justify-between">
                        <span>Rental Price</span><span>Rs {totalAmount.toFixed(2)}</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Security Deposit</span><span>Rs 500.00</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Tax (2%)</span><span>Rs {tax.toFixed(2)}</span>
                    </p>
                    <p className="flex justify-between text-lg font-medium mt-3">
                        <span>Total Amount:</span><span>Rs {(totalAmount + 500 + tax).toFixed(2)}</span>
                    </p>
                </div>

                <button
                    onClick={handlePlaceOrder}
                    className="w-full py-3 mt-6 cursor-pointer bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition"
                >
                    Place Order
                </button>
            </div>
        </div>
    );
};

export default ShoppingCart;
