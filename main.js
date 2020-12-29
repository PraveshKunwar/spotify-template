require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const request = require("request");

const PORT = 5000;
const redirect_uri = `http://localhost:${PORT}/callback`;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

app.use(cors({ origin: true, credentials: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.get("/callback", (req, res) => {
  const code = req.query.code;
  let options = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      code: code,
      redirect_uri,
      grant_type: "authorization_code",
    },
    headers: {
      Authorization:
        "Basic " +
        new Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
    },
    json: true,
  };
  request.post(options, (err, response, body) => {
    let uri = "http://localhost:3000";
    res.redirect(`${uri}`);
  });
});

app.listen(PORT, console.log("Listening to 5000"));
