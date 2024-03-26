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

const Bouquet2 = () => {
    return(
        <div>
            {bouquet.map(item => item.price > 2000 ? (
                <ol>
                {item.flowers.map(item => (
                    <p>{item}</p>
                ))}
                </ol>
            ) : "")} 
        </div>
    )
}

export default Bouquet2