

const CartoonCharacter2 = (props) => {
    return(
        <div>
         <h2>Cartoon Character 2</h2>
         {props.cartoons.map(cartoon => cartoon.magnitude % 2 === 0 ? (
            <ul key = {cartoon.id}>
                <li>{cartoon.name}</li>
            </ul>
         ) : "")}
        </div>
    )
}


export default CartoonCharacter2