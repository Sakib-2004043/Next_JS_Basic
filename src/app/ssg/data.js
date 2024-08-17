
async function getData() {
  return (await fetch("https://jsonplaceholder.typicode.com/users")).json()
}
export default getData;
