

const cartoons = [
    {
        id: 1,
        name: 'Mickey Mouse',
        superpower: 'Invisibility',
        magnitude: 1
      },
      {
        id: 2,
        name: 'Spongebob Squarepants',
        superpower: 'Super Strength',
        magnitude: 3
      },
      {
        id: 3,
        name: 'Bugs Bunny',
        superpower: 'Teleportation',
        magnitude: 9
      },
      {
        id: 4,
        name: 'Tom and Jerry',
        superpower: 'Intelligence',
        magnitude: 8
      },
      {
        id: 5,
        name: 'The Powerpuff Girls',
        superpower: 'Flight',
        magnitude: 10
      }
    ]

const CartoonCharacter  = () => {
    return(
        <div>
          <h2>Cartoon Characters</h2>
          <div>
            {cartoons.map(item => item.magnitude > 8 ? (
               <ul key = {item.id} style = {{listStyleType : "none"}}>
                <li>{item.name}</li>
               </ul>
            ) : "")}
          </div>
        </div>
    )
}

export default CartoonCharacter