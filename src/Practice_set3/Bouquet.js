const bouquet = [
    {
      id: 1,
      flowers: ['rose', 'lily', 'marigold'],
      totalFlowers: 9,
      price: 1400,
    },
    {
      id: 2,
      flowers: ['snapdragon', 'sunflower'],
      totalFlowers: 10,
      price: 3400,
    },
  ]
  

const Bouquet = () => {
    return(
        <div>
         <h2>Show Price</h2>
         {bouquet.map(item => item.flowers.includes("rose") ? (
            <p>
             Price of bouquet with roses : INR {item.price}
            </p>
         ) : "")}
        </div>
    )
}

export default Bouquet