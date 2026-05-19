import { toast } from "react-toastify"

const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem("readList")
    if (storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR)
        return storedBookData
    }
    else {
        return []
    }
}

// const getWishListBook = () => {
//     return JSON.parse(localStorage.getItem("wishList")) || []
// }

const addToStoredDB = (id) => {
    const storedBookData = getStoredBook()
    if (storedBookData.includes(id)) {
        toast("You have already added as read")
    }
    else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData)
        localStorage.setItem("readList", data)
        toast("You have successfully added mark as read")
    }

}

export { addToStoredDB, getStoredBook }