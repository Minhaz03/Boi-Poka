import { key } from "localforage";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, tags, category, rating } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl p-6">
        <figure className="bg-lime-200 py-8 rounded-2xl">
          <img src={image} className="h-[166px]" alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex gap-5">
            {tags.map((tag, idx) => (
              <button key={idx} className="btn btn-xs bg-lime-100 text-green-800">
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{author}</p>
          <div className="border-t-2 border-dashed"></div>
          <div className="card-actions justify-between mt-3">
            <div className="badge badge-outline">{category}</div>

            <div className="rating">
              <div className="text-xl font-bold mr-2">{rating}</div>
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
