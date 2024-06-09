const Book = (props) => {
  return (
    <div>
      <h2>Book - {props.title}</h2>
      <p>Book - {props.price}</p>
    </div>
  );
};
export default Book;
