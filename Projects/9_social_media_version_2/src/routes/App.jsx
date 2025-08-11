import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";
import { useState } from "react";
import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTabPassed={selectedTab}
          setSelectedTabPassed={setSelectedTab}
        />
        <div className="content">
          <Header />
          {/* Below line commented as we applied react-router now */}
          {/* {selectedTab === "Home" ? <PostList /> : <CreatePost />} */}
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
