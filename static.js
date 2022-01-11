const express = require('express');
const app = express();

app.use(express.static('./dist/traderinsideme/browser'));

const port = process.env.PORT || 4300;

app.listen(port, () => { console.log(`Listening on http://localhost:${port}`) });