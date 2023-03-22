import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Users from "./components/Users/Users";

function App() {
  const [apiData, setApiData] = useState([]);

  const fetchApi = async () => {
    const res = await fetch("https://reqres.in/api/users?page=1");
    const data = await res.json();
    setApiData(data.data);
    console.log("called");
    console.log(apiData);
  };
  return (
    <>
      <Navbar fetchApi={fetchApi} />
      <div className="App-container">
        <div className="App">
          {apiData.length !== 0 ? apiData.map((ele) => {
            return <Users ele={ele} />;
          }) : <h1>To get the user data, Click <u>Get Users</u> button</h1>}
        </div>
      </div>
    </>
  );
}

export default App;
