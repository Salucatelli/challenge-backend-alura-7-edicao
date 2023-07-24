const express = require("express");
const fileUpload = require("express-fileupload");
const router = require("./src/routes/index.js");
const app = express();
const path = require("path");
const cors = require("cors");


//DataBase
require("./src/database/db.js");
const PORT = process.env.PORT;

app.use(cors({ origin: "*", }));
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use("/files", express.static(path.resolve(__dirname, "src", "images")));
router(app);

app.listen(PORT || 3000, () => {
    console.log(`Server running on http://localhost:${PORT || 3000}`);
});