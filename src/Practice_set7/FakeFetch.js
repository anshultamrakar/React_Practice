// export const fakeFetch = (url) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (url === 'https://example.com/api/weather') {
//           resolve({
//             status: 200,
//             message: 'Success',
//             data: {
//               temperature: 21,
//               humidity: 50,
//               windSpeed: 10,
//             },
//           })
//         } else {
//           reject({
//             status: 404,
//             message: 'Weather data not found.',
//           })
//         }
//       }, 2000)
//     })
//   }


  // export const fakeFetch = (url) => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (url === 'https://example.com/api/user') {
  //         resolve({
  //           status: 200,
  //           message: 'Success',
  //           data: {
  //             name: 'John Doe',
  //             email: 'john.doe@example.com',
  //             phone: '+1 555-555-5555',
  //             address: {
  //               street: '123 Main St',
  //               suite: 'Suite 456',
  //               city: 'Anytown',
  //               zipcode: '12345',
  //             },
  //           },
  //         })
  //       } else {
  //         reject({
  //           status: 404,
  //           message: 'User not found.',
  //         })
  //       }
  //     }, 2000)
  //   })
  // }


  // export const fakeFetch = (url) => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (url === 'https://example.com/api/movies') {
  //         resolve({
  //           status: 200,
  //           message: 'Success',
  //           data: [
  //             { title: 'The Dark Knight', year: 2008, rating: 9.0 },
  //             { title: 'Inception', year: 2009, rating: 8.8 },
  //             { title: 'Interstellar', year: 2010, rating: 8.6 },
  //             { title: 'Tenet', year: 2009, rating: 7.5 },
  //             { title: 'Real Steal', year: 2007, rating: 7.5 },
  //           ],
  //         })
  //       } else {
  //         reject({
  //           status: 404,
  //           message: 'Movies list not found.',
  //         })
  //       }
  //     }, 2000)
  //   })
  // }

  // export const fakeFetch = (url) => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (url === 'https://example.com/api/users') {
  //         resolve({
  //           status: 200,
  //           message: 'Success',
  //           data: [
  //             {
  //               name: 'John Doe',
  //               email: 'john@example.com',
  //               website: 'example.com',
  //               company: 'ABC Inc',
  //             },
  //             {
  //               name: 'Jane Doe',
  //               email: 'jane@example.com',
  //               website: 'example.com',
  //               company: 'XYZ Corp',
  //             },
  //             {
  //               name: 'Bob Smith',
  //               email: 'bob@example.com',
  //               website: 'example.com',
  //               company: 'ABC Inc',
  //             },
  //             {
  //               name: 'Alice Brown',
  //               email: 'alice@example.com',
  //               website: 'example.com',
  //               company: 'ACME Corp',
  //             },
  //             {
  //               name: 'Charlie Green',
  //               email: 'charlie@example.com',
  //               website: 'example.com',
  //               company: 'XYZ Corp',
  //             },
  //           ],
  //         })
  //       } else {
  //         reject({
  //           status: 404,
  //           message: 'Users list not found.',
  //         })
  //       }
  //     }, 2000)
  //   })
  // }


  // export const fakeFetch = () => {
  //   const quotes = [
  //     {
  //       content: 'Be yourself; everyone else is already taken.',
  //       author: 'Oscar Wilde',
  //     },
  //     {
  //       content:
  //         "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  //       author: 'Albert Einstein',
  //     },
  //     {
  //       content: 'So many books, so little time.',
  //       author: 'Frank Zappa',
  //     },
  //     {
  //       content: 'A room without books is like a body without a soul.',
  //       author: 'Marcus Tullius Cicero',
  //     },
  //     {
  //       content:
  //         "In three words I can sum up everything I've learned about life: it goes on.",
  //       author: 'Robert Frost',
  //     },
  //   ]
  
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  //       resolve(randomQuote)
  //     }, 1000)
  //   })
  // }

  export const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/movies') {
          resolve({
            status: 200,
            message: 'Success',
            data: [
              {
                title: 'The Godfather',
                year: 1972,
                genre: 'Crime',
              },
              {
                title: 'The Shawshank Redemption',
                year: 1994,
                genre: 'Drama',
              },
              {
                title: 'The Dark Knight',
                year: 2008,
                genre: 'Action',
              },
              {
                title: 'Forrest Gump',
                year: 1994,
                genre: 'Comedy',
              },
              {
                title: 'The Matrix',
                year: 1999,
                genre: 'Science Fiction',
              },
              {
                title: 'Jurassic Park',
                year: 1993,
                genre: 'Science Fiction',
              },
              {
                title: 'Star Wars: Episode IV - A New Hope',
                year: 1977,
                genre: 'Science Fiction',
              },
              {
                title: 'The Terminator',
                year: 1984,
                genre: 'Action',
              },
              {
                title: 'Die Hard',
                year: 1988,
                genre: 'Action',
              },
              {
                title: 'Pulp Fiction',
                year: 1994,
                genre: 'Crime',
              },
            ],
          })
        } else {
          reject({
            status: 404,
            message: 'Movies list not found.',
          })
        }
      }, 2000)
    })
  }