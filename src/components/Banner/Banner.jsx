import bookImage from "../../assets/books.jpg"

const Banner = () => {
    return (
        <div className="flex justify-around items-center py-20 bg-gray-100">
            <div className="w-1/3">
                <h1 className="text-4xl font-bold mb-10">Books to freshen up your bookshelf</h1>
                <button className="btn btn-lg btn-success text-white">View The List</button>
            </div>
            <div className="w-1/3">
                <img className="" src={bookImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;