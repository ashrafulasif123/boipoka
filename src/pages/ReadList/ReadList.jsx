import { createContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredBook } from "../../utilities/addToDB";
import ReadListBook from "../ReadListBook/ReadListBook";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { toast } from "react-toastify";
export const UnreadContext = createContext(null);
const ReadList = () => {


    const [readList, setReadList] = useState([])
    const [unread, setUnread] = useState(false)
    const [sort, setSort] = useState("")
    const data = useLoaderData()


    useEffect(() => {
        const storedBooks = getStoredBook();
        const convertedStoredBooks = storedBooks.map(id => parseInt(id))
        const readListBooks = data.filter(book => convertedStoredBooks.includes(book.bookId))
        setReadList(readListBooks);
    }, [unread]);

    const handleUnreadBookList = id => {
        const readListBooks = readList.filter(book => book.bookId !== id)
        // setReadList(readListBooks)

        const updateReadListIds = readListBooks.map(readListBook => readListBook.bookId)
        localStorage.setItem("readList", JSON.stringify(updateReadListIds))
        setUnread(!unread) // useEffect 
        toast("You have successfully unread the book")
    }

    const handleSort = (type) =>{
        setSort(type)
        if(type === "pages"){
            const sortByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages)
            setReadList(sortByPage)
        }
        if(type === "ratings"){
            const sortByRatings = [...readList].sort((a, b) => b.rating - a.rating)
            setReadList(sortByRatings)
        }
    }

    return (
        <div>
            <details className="dropdown">
                <summary className="btn m-1">Sort By: {sort ? sort: "default"}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => handleSort("pages")}><a>Pages</a></li>
                    <li onClick={() => handleSort("ratings")}><a>Ratings</a></li>
                </ul>
            </details>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h1>ReadList: {readList.length}</h1>
                    <UnreadContext.Provider value={handleUnreadBookList}>
                        {
                            readList.map(readListBook => <ReadListBook key={readListBook.bookId} readListBook={readListBook}></ReadListBook>)
                        }
                    </UnreadContext.Provider>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ReadList;
