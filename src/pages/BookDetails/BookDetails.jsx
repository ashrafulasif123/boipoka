import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utilities/addToDB";

const BookDetails = () => {

    const { id } = useParams()
    const bookId = parseInt(id)
    const data = useLoaderData()

    const { bookName, image, rating, category, tags, yearOfPublishing, publisher } = data.find(book => book.bookId === bookId)

    const handleMarkAsRead = id => {
        addToStoredDB(id)
    }


    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200 md:flex">

                {/* Image */}
                <div className="md:w-1/3 bg-gray-100 flex items-center justify-center p-6">
                    <img
                        src={image}
                        alt={bookName}
                        className="w-64 object-cover rounded-xl"
                    />
                </div>

                {/* Content */}
                <div className="md:w-2/3 p-6 space-y-4">

                    <div>
                        <h2 className="text-3xl font-bold text-gray-800">
                            {bookName}
                        </h2>

                        <p className="text-gray-500 mt-1">
                            Publisher: {publisher}
                        </p>
                    </div>

                    {/* Category & Rating */}
                    <div className="flex items-center gap-4 flex-wrap">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                            {category}
                        </span>

                        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                            ⭐ {rating}
                        </span>
                    </div>

                    {/* Tags */}
                    <div>
                        <h4 className="font-semibold text-gray-700 mb-2">
                            Tags
                        </h4>

                        <div className="flex flex-wrap gap-2">
                            {
                                tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                                    >
                                        #{tag}
                                    </span>
                                ))
                            }
                        </div>
                    </div>

                    {/* Publishing Year */}
                    <div className="pt-2">
                        <p className="text-gray-600">
                            <span className="font-semibold">
                                Year of Publishing:
                            </span>{" "}
                            {yearOfPublishing}
                        </p>
                    </div>

                    {/* Button */}
                    <div className="pt-4 flex gap-4">
                        <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-primary rounded-xl">
                            Mark as Read
                        </button>
                        <button className="btn btn-info rounded-xl">
                            Add to Wishlist
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetails;