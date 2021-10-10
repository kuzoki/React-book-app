
import {useState} from 'react';
import { useContext } from "react"
import { UserGlobal } from "./useGlobal"

const EditPop = ({popstate, editPopId}) =>{

    const books = useContext(UserGlobal);

    let indexOf = books.allBooks.findIndex((el)=> el.id === editPopId);
    


    const [title, setTitle] = useState(books.allBooks[indexOf].title);
    const [author, setAuthor] = useState(books.allBooks[indexOf].author);
    const [pages, setPages] = useState(books.allBooks[indexOf].pages);
    const [read, setRead] = useState(books.allBooks[indexOf].read);



    // Send Close False State
    const closeThis = () => {
        popstate(false);
    }

    // Handel Update Values

    const handelUpdate = (e) => {
        //Prevent Default Behave of Submit
        e.preventDefault();

        // Set New Data Update
        
        books.allBooks[indexOf].title = title;
        books.allBooks[indexOf].author = author;
        books.allBooks[indexOf].pages = pages;
        books.allBooks[indexOf].read = read;
        console.log( books.allBooks);
        
        // Update State
        books.setAllBooks(books.allBooks);
        localStorage.setItem("my_books", JSON.stringify(books.allBooks));
        popstate(false);
    }
    return(
        <div className="popup active" id="popup">
            <div className="popup-overlay"></div>
            <div className="popup-content">
                <div className="popup-close" onClick={closeThis}>×</div>
                <h3 className="popup-title">Title</h3> 
                <form className="add-book-form" onSubmit={handelUpdate}>
                        <input type="text" id="title"  placeholder="Book Title" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} required></input>
                        
                        <input type="text" id="author"name="author" placeholder="Author Name"  value={author} onChange={(e)=>setAuthor(e.target.value)} required></input>

                        <input type="number" id="pages" placeholder="Number of Pages" name="pages"  value={pages} onChange={(e)=>setPages(e.target.value)} required></input>
                        <select name="read" id="read" required="" value={read} onChange={(e)=>setRead(e.target.value)}>
                            
                            <option value="read">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <button type="submit" className="btn btn-submit" id="submit">Save Edits</button>
                    </form>
            </div>
        </div>
    )
}

export default EditPop;