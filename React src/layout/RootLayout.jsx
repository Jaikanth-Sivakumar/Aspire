import { useState } from "react";
import Navbar from "../component/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch(query) {
    setSearchQuery(query);
  }
  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Outlet />
    </>
  );
}

export default RootLayout;
