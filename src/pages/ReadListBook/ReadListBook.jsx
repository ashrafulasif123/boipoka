import { useContext } from "react";
import { FaStarHalfStroke } from "react-icons/fa6";
import { UnreadContext } from "../ReadList/ReadList";


const ReadListBook = ({ readListBook }) => {
    const { bookId, bookName, image, rating, category, tags, yearOfPublishing, publisher } = readListBook
    const handleUnreadBookList = useContext(UnreadContext)
    return (

        <div className="card bg-base-100 shadow-sm pt-4 px-4">
            <figure className="py-6 rounded-lg bg-[#F3F3F3]">
                <img className="w-33.5 h-41.5 rounded-lg"
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
                <div className="border-t border-dashed"></div>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">{rating} <span><FaStarHalfStroke /></span></div>
                </div>
                <button onClick={() => handleUnreadBookList(bookId)} className="btn btn-error w-20 mx-auto">Unread</button>
            </div>
        </div>


    );
};

export default ReadListBook;
