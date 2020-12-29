import { useEffect, useState } from "react";
import fetch from "node-fetch";

const Playlists = (props) => {
  const [playlistItems, setPlaylistItems] = useState([]);
  useEffect(() => {
    fetch("https://api.spotify.com/v1/me/playlists?limit=50", {
      headers: {
        Authorization: "Bearer " + props.token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.items.map((items) => {
          return console.log(items.images[0]);
        });
        setPlaylistItems(data.items);
      });
  }, []);
  return (
    <div className="playlists">
      Playlists time!
      {playlistItems.map((playlists) => {
        return (
          <div className="image-track">
            <p>{playlists.name}</p>
            <img
              width="300"
              height="300"
              src={playlists.images[0].url}
              alt="playlist"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Playlists;
