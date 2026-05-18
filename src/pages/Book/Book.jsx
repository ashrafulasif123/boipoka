import { FaStarHalfStroke } from "react-icons/fa6";

const Book = ({ singleBook }) => {
    console.log(singleBook);
    const {bookName, author, image, rating, category } = singleBook
    return (
        <div className="card bg-base-100 shadow-sm pt-4 px-4">
            <figure className="py-6 rounded-lg bg-[#F3F3F3]">
                <img className="w-[134px] h-[166px] rounded-lg"
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">{rating} <span><FaStarHalfStroke /></span></div>

                </div>
            </div>
        </div>
    );
};

export default Book;