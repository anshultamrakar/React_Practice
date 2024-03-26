const DonationData = [
    {
      id: 1,
      name: 'Nitin',
      Donation: 7800,
    },
    {
      id: 2,
      name: 'Mehak',
      Donation: 9500,
    },
    {
      id: 3,
      name: 'Mehul',
      Donation: 65000,
    },
    {
      id: 4,
      name: 'Nina',
      Donation: 560,
    },
  ]

const DonationAmount = () => {
    const amount = DonationData.reduce((acc , value) => acc + value.Donation , 0)
    return(
        <div>
            <h2>Total Donation Collected : {amount} </h2>
        </div>
    )
}

export default DonationAmount