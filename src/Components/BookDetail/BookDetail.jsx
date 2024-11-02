import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);

  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);

  // console.log(id, bookId, book, data)

  //   console.log(book);

  const {
    image,
    bookId: currentBookId,
    bookName,
    author,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
    category,
  } = book;

  return (
    <div>
      <h2 className="text-3xl text-center font-bold">Book Details: {bookId}</h2>
      <div className="hero bg-base-200 h-[600px] mb-36">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={image}
            className="max-w-sm h-[500px] rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{bookName}</h1>
            <h1 className="text-5xl font-bold">{author}</h1>
            <div className="divider"></div>
            {category}
            <div className="divider"></div>
            <p className="py-6"> Review: {review}</p>
            <div className="flex gap-5">
              {tags.map((tag, idx) => (
                <button
                  key={idx}
                  className="btn btn-xs bg-lime-100 text-green-800"
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="flex gap-5 mt-5">
              <button className="btn btn-outline btn-primary">Read</button>
              <button className="btn btn-primary">Wish List</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
