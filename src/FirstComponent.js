export default function SimpleComponent(props) {
  console.log(props);
  return (
    <div>
      <h1>Receive data through props</h1>
      <h2>Received string literal: {props.message}</h2>
      <h2>Received integer array: {JSON.stringify(props.numbers)}</h2>
      <h2>Received book array: {JSON.stringify(props.books)}</h2>
    </div>
  );
}
