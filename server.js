const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  let aL = req.headers["accept-language"]
  let uA = req.headers["user-agent"]
  console.log(req.headers);
  console.log(`Here is my UserLanguage header information: "${aL}" and UserAgent output "${uA}"`)
});


app.listen(port, () => console.log(`App listening on ${port}`))


