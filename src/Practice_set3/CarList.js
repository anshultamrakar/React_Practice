const cars = [
    {
      id: 1,
      name: 'supra',
      price: 500000,
      category: 'sports',
    },
    {
      id: 2,
      name: 'A5',
      price: 700000,
      category: 'luxury',
    },
    {
      id: 3,
      name: 'huyara',
      price: 1500000,
      category: 'sports',
    },
    {
      id: 4,
      name: 'agera R',
      price: 3500000,
      category: 'sports',
    },
  ]

const CarList = () => {
    const myarr = cars.reduce((ac,a) => (ac[a.category] = ac[a.category] + 1 || 1,ac),{})
    console.log(myarr)
    return(
        <div>
          <h2>Count Number of Cars</h2>
          <p> luxury : {myarr.luxury} </p>
          <p> sports :  {myarr.sports}</p>
        </div>
    )
}

export default CarList