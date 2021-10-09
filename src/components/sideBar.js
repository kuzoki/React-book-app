
import {useState} from 'react';
import { useContext } from "react"
import { UserGlobal } from "./useGlobal"

const SideBar = ()=>{

    const books = useContext(UserGlobal);

    // Follow Change On Input
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [pages, setPages] = useState('');
    const [read, setRead] = useState('read');
   

    // Handel Submit
    const handelSubmit = (e) =>{
        //Prevent Default Behave of Submit
        e.preventDefault();

        // Array For Local Storage
        var localBook = [];
        let i;
        // Dynamic Unique Id
        if(books.allBooks.length === 0){
             i =  1;
        }else{
            let lastItem = books.allBooks[books.allBooks.length - 1 ].id;
             i = lastItem + 1;
        }
        

        // Data Structure
        const book = {
            id: i,
            title : title,
            author : author,
            pages : pages,
            read : read,
        };
        // Return Global Value To Push In Books
        books.setAllBooks([...books.allBooks, book]);

        // Add Items To Local Storage
        localBook = [...books.allBooks, book];
        localStorage.setItem("my_books", JSON.stringify(localBook));
        
       

        // Empty Input Form After Submit
        setTitle('');
        setAuthor('');
        setPages('');
        setRead('no');
    }
    
    return (
       
            
        <div className="sidebar-widget"> 
               
                <div className="sidebar-widget">
                    <h2 className="sec-title display-5">Add a new book </h2>
                    <form className="add-book-form" onSubmit={handelSubmit}>
                        <input type="text" id="title"  placeholder="Book Title" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} required></input>
                        
                        <input type="text" id="author"name="author" placeholder="Author Name"  value={author} onChange={(e)=>setAuthor(e.target.value)} required></input>

                        <input type="number" id="pages" placeholder="Number of Pages" name="pages"  value={pages} onChange={(e)=>setPages(e.target.value)} required></input>
                        <select name="read" id="read" required="" value={read} onChange={(e)=>setRead(e.target.value)}>
                            
                            <option value="read">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <button type="submit" className="btn btn-submit" id="submit">New Book</button>
                    </form>

                    
                </div>
        </div>
        
    );
}
export default SideBar;