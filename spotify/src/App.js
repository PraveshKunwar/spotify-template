import { accessUrl } from "./Spotify";
import { SpotifyToken } from "./Spotify";
import { useState, useEffect } from "react";

const App = () => {
  const [token, setToken] = useState(" ");
  useEffect(() => {
    const hash = SpotifyToken();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
    }
  }, []);
  return (
    <div className="app">
      {token === " " ? (
        <div className="login">
          <a href={accessUrl}>Login</a>
        </div>
      ) : (
        <div className="welcome">
          \<p>I am authenticated!!</p>
        </div>
      )}
    </div>
  );
};

export default App;
