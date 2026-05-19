import { createContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredBook } from "../../utilities/addToDB";
import ReadListBook from "../ReadListBook/ReadListBook";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { toast } from "react-toastify";
export const UnreadContext = createContext(null);
const ReadList = () => {


    const [readListIds, setReadListIds] = useState([])
    const data = useLoaderData()
    const readListBooks = data.filter(book => readListIds.includes(book.bookId))

    useEffect(() => {
        setReadListIds(getStoredBook)
    }, [])

    const handleUnreadBookList = id => {
        const updateReadListId = readListIds.filter(readListId => readListId !== id)
        setReadListIds(updateReadListId)
        localStorage.setItem("readList", JSON.stringify(updateReadListId)) // Mine
        toast("You have successfully unread the book")
    }

    return (
        <div>

            <h1>ReadList: {readListIds.length}</h1>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>

                    <UnreadContext.Provider value={handleUnreadBookList}>
                        {
                            readListBooks.map(readListBook => <ReadListBook key={readListBook.bookId} readListBook={readListBook}></ReadListBook>)
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
