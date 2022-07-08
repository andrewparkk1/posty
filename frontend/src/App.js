import Header from "./components/Header";
import PostList from "./components/PostList";

function App() {
  return (
    <>

      <div className="p-5 mb-20 md:w-10/12 mx-auto">
        <Header></Header>
        <PostList></PostList>
      </div>

    </>


  );
}

export default App;
