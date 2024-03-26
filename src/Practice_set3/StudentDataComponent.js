const studentData = [
    {
      id: 1,
      name: 'Nitin',
      marks: 78,
    },
    {
      id: 2,
      name: 'Mehak',
      marks: 95,
    },
    {
      id: 3,
      name: 'Mehul',
      marks: 65,
    },
    {
      id: 4,
      name: 'Nina',
      marks: 56,
    },
  ]

const StudentDataComponent = () => {
    const calculateMean = studentData.reduce((acc , value) => acc + value.marks , 0)/studentData.length

    return(
        <div>
         {calculateMean > 80 ? <p>Certification Approved</p> : <p>Certification Unapproved</p>}
        </div>
    )
}


export default StudentDataComponent