import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteModal } from "./modal";
import ReactPaginate from "react-paginate";
import { findAllWithPage, remove } from "../serviceAPI/bookServiceAPI";
import { findAll } from "../serviceAPI/bookTypeServiceAPI";
import { Formik, Form, Field } from "formik";
import { toast } from "react-toastify";

function BookList() {
  const [books, setBooks] = useState([]);

  const [bookTypes, setBookTypes] = useState([]);

  const [pageCount, setPageCount] = useState(0);

  const [filters, setFilters] = useState({
    page: 0,
    name: "",
    type: "",
  });

  const handlePageClick = (event) => {
    setFilters((previous) => ({ ...previous, page: event.selected }));
  };

  const [deleteBook, setDeleteBook] = useState({
    bookId:"",
    bookName: "",
  });

  const handleInfo = (deleteBook) => {
    setDeleteBook((previous) => ({ ...previous, ...deleteBook }));
  };


  const handleDeleteProduct =  async () => {
      try {
        await remove(bookId);
        const book = {...filters}
        setFilters(book)
        toast("Success")
      } catch {
        toast("Fail")
      }
    };

  const getBookList = async () => {
    const bookData = await findAllWithPage(filters);
    // console.log(bookData.data.content);
    setBooks(bookData.data.content);
    setPageCount(bookData.data.totalPages);
  };

  const getBookTypeList = async () => {
    const bookTypeData = await findAll();
    console.log(bookTypeData.data);
    setBookTypes(bookTypeData.data);
  };

  useEffect(() => {
    getBookList();
  }, [filters]);

  useEffect(() => {
    getBookTypeList();
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          name: filters.name,
          type: filters.type,
        }}
        onSubmit={(values) => {
          setFilters((previous) => {
            return { ...previous, ...values, page: 0 };
          });
        }}
      >
    
        <div className="row b-0 p-0" style={{ height: "50px" }}>
        <Link to="/book">List</Link>
          <div className="col-4 px-0">
            <Link
              to="/book/create"
              style={{
                width: "50%",
                height: "100%",
                backgroundColor: "#f0715f",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // margin: "15px 0px"
              }}
              type="button"
              className="btn "
              data-bs-toggle="modal"
              data-bs-target="#modalCreate"
            >
              Create
            </Link>
          </div>
          <div className="col-8 ">
            <Form className="container d-flex p-0" style={{ margin: 15 }}>
              <div className="col-6 p-0">
                <Field
                  type="text"
                  className="form-control "
                  name="name"
                  placeholder="Search"
                  style={{ width: "400px", float: "right" }}
                />
              </div>
              <div className="col-4 p-0">
                <Field
                  as="select"
                  className="form-control "
                  name="type"
                  placeholder="Search"
                  style={{ width: "400px", float: "right" }}
                >
                  <option value={""}>select</option>
                  {bookTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </Field>
              </div>
              <div className="col-2 p-0">
                <span>
                  <button
                    className=" btn btn-secondary ml-1"
                    style={{ height: "100%" }}
                    type="submit"
                  >
                    Search
                  </button>
                </span>
              </div>
            </Form>
          </div>
        </div>
      </Formik>
      <div>
        <table className="table table-striped" style={{ marginTop: "75px" }}>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Code</th>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Date</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book.id}>
                <td>{++index}</td>
                <td>{book.code}</td>
                <td>{book.name}</td>
                <td>
                  {
                    bookTypes.filter(
                      (type) => type.id === book.bookTypeDTO.id
                    )[0]?.name
                  }
                </td>
                <td>{book.date}</td>
                <td>{book.quantity}</td>
                <td>
                  <Link
                    to={`/book/edit/${book.id}`}
                    className="btn btn-primary"
                  >
                    Update
                  </Link>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => 
                      handleInfo({
                        bookId: book.id,
                        bookName: book.name
                    })}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-grid">
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageCount={pageCount}
            previousLabel="< "
            containerClassName="pagination"
            pageLinkClassName="page-num"
            nextLinkClassName="page-next"
            previousLinkClassName="page-previous"
            activeClassName="active"
            disabledClassName="d-none"
          />
        </div>
      </div>
    </>
  );
}
export default BookList;
