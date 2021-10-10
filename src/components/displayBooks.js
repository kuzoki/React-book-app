
import { useContext, useState } from "react"
import EditPop from "./editPop";
import { UserGlobal } from "./useGlobal"




const DisplayBooks = () => {
    const [editPop, setPop] = useState(false);
    const [editPopId, setPopId] = useState(null);
    const books = useContext(UserGlobal);

    //Delete Function
    const deleteBook = (x) =>{
        
        const newAfter = books.allBooks.filter((el) => {
            return el.id !== x;
        });
        //console.log(newAfter);
        books.setAllBooks(newAfter);
        localStorage.setItem("my_books", JSON.stringify(newAfter));
    };
    // Pop Up Function

    const popUp = (y) =>{
        setPop(!editPop);
        // console.log(y)
        setPopId(y);   
    }
    
    const close = (c) =>{
        setPop(c);    
    }
    return(
        <div className="book-list">
                
            <div className="row" id="books-list-grid">
                { books.allBooks.map((book)=>(
                    <div className="col-4" key={book.id}>
                      <div className="book-card" >
                          <h4 className="title" ><span className="first"> Title</span> : {book.title}</h4>
                          <p className="author"><span className="first">Author</span> : {book.author}</p>
                          <p className="pages"><span className="first">Pages </span>: {book.pages}</p>
                          <p className="status"><span className="first">State : </span>{ book.read === 'no' ? <span className="notread">Not Read Yet</span> : <span className="read">All Page Read</span>}</p>
                          <button className="btn btn-edit" onClick={()=>popUp(book.id)}>Edit</button>
                          <button className="btn btn-delete" onClick={()=>deleteBook(book.id)}>Delete</button>
                          
                      </div>
                    </div>
                ))}
            </div>
            {editPop && <EditPop popstate={close} editPopId={editPopId}/>}
                       
        </div>
        
    ) 
}

export default DisplayBooks;