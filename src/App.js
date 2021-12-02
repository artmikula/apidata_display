import { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import FarmlandDataEntry from "./components/FarmlandDataEntry";
import SignupPage from "./components/SignupPage";
import Results from "./components/Results";

function App() {
  const adminUser = {
    name: "admin",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "" });
  const [error, setError] = useState("");
  const [apiData, setApiData] = useState();
  const [searchValues, setSearchValues] = useState({ city: "" });
  const [signupPage, setSignupPage] = useState("");

  const Login = (details) => {
    console.log(details);
    if (
      details.name === adminUser.name &&
      details.password === adminUser.password
    ) {
      setUser({
        name: details.name,
      });
      setError("");
    } else {
      setError("Please try again!");
    }
  };

  const Signup = (newUserData) => {
    console.log(newUserData.name);
    if (
      newUserData.name &&
      newUserData.password &&
      newUserData.password === newUserData.passwordConfirm
    ) {
      alert("New user successfully created");
      setSignupPage("");
      setError("");
    } else {
      setError("Please try again");
    }
  };

  async function SubmitFarmData() {
    // let cityname =
    //   "https://api.openweathermap.org/data/2.5/weather?q=" +
    //   searchValues.city +
    //   "&appid=3a6db61ccae0f26e0883affe7aaa929e";
    // const data = await fetch(cityname)
    //   .then((res) => res.json())
    //   .then((result) => {
    //     setError(null);
    //     setApiData(result);
    //   })
    //   .catch((error) => {
    //     setError(error);
    //   });
  }

  useEffect(() => {
    console.log(apiData);
  }, [apiData]);

  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <div className="App">
      {user.name && signupPage === "" && (
        <div id="mainCont">
          <div className="welcome">
            <h2>
              Welcome, <span>{user.name}</span>
            </h2>
            <button onClick={Logout}>Logout</button>
          </div>
          <div className="enterdata">
            <FarmlandDataEntry
              SubmitFarmData={SubmitFarmData}
              error={error}
              setApi={setApiData}
            />
            {apiData && <Results apiData={apiData} />}
          </div>
        </div>
      )}
      {user.name === "" && signupPage === "" && (
        <LoginForm Login={Login} error={error} setSignupPage={setSignupPage} />
      )}
      {signupPage && (
        <SignupPage
          Signup={Signup}
          error={error}
          setSignupPage={setSignupPage}
        />
      )}
    </div>
  );
}

export default App;
