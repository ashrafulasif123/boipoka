import { FaStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
    // console.log(singleBook);
    const {bookId, bookName, image, rating, category, tags, yearOfPublishing, publisher } = singleBook
    // console.log("from book page",typeof bookId)
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 shadow-sm pt-4 px-4">
                <figure className="py-6 rounded-lg bg-[#F3F3F3]">
                    <img className="w-[134px] h-[166px] rounded-lg"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="flex justify-center gap-10">
                        {
                            tags.map(tag => <button>{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <p>Book by: {publisher}</p>
                    <div className="border-t-1 border-dashed"></div>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating} <span><FaStarHalfStroke /></span></div>

                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;