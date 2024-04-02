// export const fakeFetch = (url) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (url === 'https://example.com/api/products') {
//           resolve({
//             status: 200,
//             message: 'Success',
//             data: {
//               products: [
//                 {
//                   name: 'Shoes',
//                   price: 3000,
//                   desc: 'lorem ipsum dolor sit amit',
//                   src: 'https://picsum.photos/200/200',
//                 },
//                 {
//                   name: 'Tshirt',
//                   price: 500,
//                   inStock: false,
//                   desc: 'lorem ipsum dolor sit amit',
//                   src: 'https://picsum.photos/201/201',
//                 },
//                 {
//                   name: 'Trekking Bag',
//                   price: 2000,
//                   inStock: true,
//                   desc: 'lorem ipsum dolor sit amit',
//                   src: 'https://picsum.photos/205/205',
//                 },
//               ],
//             },
//           })
//         } else {
//           reject({
//             status: 404,
//             message: 'Items list not found.',
//           })
//         }
//       }, 2000)
//     })
//   }



//   export const fakeFetch = (url) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (url === 'https://example.com/api/todos') {
//           resolve({
//             status: 200,
//             message: 'Success',
//             data: {
//               todos: [
//                 {
//                   title: 'Go Outside',
//                   desc: 'lorem ipsum dolor sit amit',
//                   todos: ['shopping', 'cricket', 'walking'],
//                 },
//                 {
//                   title: "Let's Work",
//                   desc: 'lorem ipsum dolor sit amit',
//                   todos: ['Feature update', 'Team Meet', 'Code Walkthrough'],
//                 },
//                 {
//                   title: 'Home Work',
//                   desc: 'lorem ipsum dolor sit amit',
//                   todos: ['Fix tap', 'Wedding function'],
//                 },
//               ],
//             },
//           })
//         } else {
//           reject({
//             status: 404,
//             message: 'Todo list not found.',
//           })
//         }
//       }, 2000)
//     })
//   }


// export const fakeFetch = (url) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (url === 'https://example.com/api/habits') {
//           resolve({
//             status: 200,
//             message: 'Success',
//             data: {
//               habits: [
//                 {
//                   title: 'Drinking enough water',
//                   desc: 'Aim to drink 5-6L of water each day to stay hydrated',
//                   daysFollowed: 7,
//                   daysSkipped: 3,
//                 },
//                 {
//                   title: 'Exercise',
//                   desc: 'Track your workouts and aim to exercise a certain number of days per week',
//                   daysFollowed: 10,
//                   daysSkipped: 4,
//                 },
//                 {
//                   title: 'Meditation',
//                   desc: 'Track your daily meditation practice and try to increase the length of your sessions over time',
//                   daysFollowed: 30,
//                   daysSkipped: 7,
//                 },
//                 {
//                   title: 'Gratitude',
//                   desc: 'Write down something you are grateful for each day',
//                   daysFollowed: 11,
//                   daysSkipped: 5,
//                 },
//                 {
//                   title: 'Saving Money',
//                   desc: 'Track your expenses and set a goal to save a certain amount of money each month',
//                   daysFollowed: 40,
//                   daysSkipped: 15,
//                 },
//               ],
//             },
//           })
//         } else {
//           reject({
//             status: 404,
//             message: 'Habits not found.',
//           })
//         }
//       }, 2000)
//     })
//   }


  export const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/posts') {
          resolve({
            status: 200,
            message: 'Success',
            data: {
              posts: [
                {
                  caption: 'Delicious chocolate cake recipe',
                  src: 'https://picsum.photos/300/301',
                  views: 1000,
                  likes: 100,
                  category: 'Bakery',
                },
                {
                  caption: '5-minute breakfast ideas',
                  src: 'https://picsum.photos/300/300',
                  views: 500,
                  likes: 50,
                  category: 'Food',
                },
                {
                  caption: "The best bread recipe you'll ever taste",
                  src: 'https://picsum.photos/300/302',
                  views: 2000,
                  likes: 200,
                  category: 'Bakery',
                },
                {
                  caption: '10 DIY home decor ideas',
                  src: 'https://picsum.photos/300/303',
                  views: 100,
                  likes: 10,
                  category: 'DIY',
                },
                {
                  caption: 'Healthy snacks for work',
                  src: 'https://picsum.photos/300/304',
                  views: 300,
                  likes: 30,
                  category: 'Food',
                },
                {
                  caption: 'How to make sourdough bread at home',
                  src: 'https://picsum.photos/300/305',
                  views: 1500,
                  likes: 150,
                  category: 'Bakery',
                },
              ],
            },
          })
        } else {
          reject({
            status: 404,
            message: 'Post not found.',
          })
        }
      }, 2000)
    })
  }