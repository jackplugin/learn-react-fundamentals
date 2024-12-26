export default function SecondComponent({ numbers, books, message }) {
  return (
    <div>
      <h1>Receive data through deconstructing props</h1>
      <h2>Received string literal: {message}</h2>
      <h2>Received integer array: {JSON.stringify(numbers)}</h2>
      <h2>Received book array: {JSON.stringify(books)}</h2>
    </div>
  );
}
