import { useState } from "react"

const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" },
    { id: 3, title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Classic" },
    { id: 4, title: "1984", author: "George Orwell", genre: "Dystopian" },
    { id: 5, title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian" },
    { id: 6, title: "The Hunger Games", author: "Suzanne Collins", genre: "Young Adult" },
    { id: 7, title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", genre: "Young Adult" },
  ];

const MyBook = () => {
    const [filteredBooks , setFilteredBooks]  = useState(books)


    const getAll = () => {
      setFilteredBooks(books)
    }

    const getClassic = () => {
     const filterList = books.filter(item => item.genre === "Classic")
     setFilteredBooks(filterList)
    }

    const getDystopian = () => {
        const newData = books.filter(item => item.genre === "Dystopian")
        setFilteredBooks(newData)
    }

    const getYoungAdult = () => {
        const newData = books.filter(item => item.genre === "Young Adult")
        setFilteredBooks(newData)
    }



    return(
        <div>
            <div>
            <button onClick={getAll}>All Genre</button>
            <button onClick={getClassic}>Classic</button>
             <button onClick={getDystopian}>Dystopian</button>
             <button onClick={getYoungAdult}>Young Adult</button>
            </div>
            <div>
                {filteredBooks.map(book => (
                    <div key = {book.id}>
                    <h4>{book.title}</h4>
                     <p>{book.author}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyBook
