import { useState } from "react";
import LoginForm from "./components/LoginForm";
import DataDisplay from "./components/DataDisplay";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const [apiData, setApiData] = useState([]);

  const Login = (details) => {
    console.log(details);
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("you're logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
      setError("");
    } else {
      setError("Please try again!");
    }
  };

  async function SubmitData({ searchValues }) {
    const data = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        // searchValues.city
        "Seoul" +
        "&appid=3a6db61ccae0f26e0883affe7aaa929e",
    )
      .then((res) => res.json())
      .then((result) => {
        setError(null);
        setApiData([...apiData]);
        console.log(apiData);
      })
      .catch((error) => {
        setError(error);
      });
  }

  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <div className="App">
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
          <h2>Please fill out:</h2>
          <DataDisplay SubmitData={SubmitData} error={error} />
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
