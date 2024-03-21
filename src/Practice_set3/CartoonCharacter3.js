const CartoonCharacter3 = (props) => {
    return(
        <div>
         <h2>Cartoon character 3 </h2>
         {props.cartoons.map(cartoon => cartoon.superpower === "Intelligence" ? (
            <h1>{cartoon.name} - {cartoon.superpower} - {cartoon.magnitude}</h1>
            ) : "")}
        </div>
    )
}

export default CartoonCharacter3