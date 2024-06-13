
const ReviewOrder = () => {
    return(
        <div className="border-solid border-4 border-green-500 p-4 m-8 flex flex-col gap-4 w-80 mx-auto">
         <h2 className="text-2xl font-bold">Review Order</h2>
         <div className="flex justify-between">
         <ul>
            <li className="font-bold">ITEM</li>
            <li className="w-12"><img src = "https://picsum.photos/200" /></li>
         </ul>
         <ul>
            <li className="font-bold">QTY</li>
            <li className="font-bold text-center">1</li>
         </ul>
         </div> 
         <div>
            <p>limited addition cactus print bag <br/>1 litre , green color </p>
         </div>
         <div className="flex justify-between">
        <ul>
            <li>Subtotal</li>
            <li className="my-2">GST</li>
            <li className="font-bold my-2">Grand Total</li>
        </ul>
        <ul>
            <li className="font-bold">INR 999</li>
            <li className="font-bold my-2">INR 179</li>
            <li className="font-bold my-2">INR 1178</li>
        </ul>
        </div>
         <button className="bg-green-600 text-white font-bold p-1">PLACE ORDER</button>
         <p className="text-center italic ">Cart Secured by Razorpay</p>
        </div>
    )
}

export default ReviewOrder
