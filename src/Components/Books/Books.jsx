import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <h2 className="text-3xl text-center font-bold mb-16">Books</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-36 ml-[25px] md:ml-0 lg:ml-[50px]">
            {
                books.map(book => <Book book={book} key={book.bookId}></Book>)
            }
           </div>
        </div>
    );
};

export default Books;

/**
 * -> state to store the book
 * 
 * -> useEffect
 * 
 * -> fetch to load data
 * 
 * -> set the data to state
 * 
 * 
 */