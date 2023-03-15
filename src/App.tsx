import { QueryClient, QueryClientProvider, useQueryClient } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBlog from "./components/AddBlog";
import GetAllBlogs from "./components/GetAllBlogs";
import Home from "./components/Home";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<GetAllBlogs />} />
            <Route path="/addblog" element={<AddBlog />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
