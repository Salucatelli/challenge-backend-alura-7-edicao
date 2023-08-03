const path = require("path");
const fs = require("fs");

module.exports = (img1, img2) => {
    const uploadPath1 = path.join(__dirname, "../", "images", img1.name);
    const uploadPath2 = path.join(__dirname, "../", "images", img2.name);

    if (fs.existsSync(uploadPath1) || fs.existsSync(uploadPath2)) {
        return false;
    }

    img1.mv(uploadPath1, function (error) {
        if (error) return console.log(error);
    })
    img2.mv(uploadPath2, function (error) {
        if (error) return console.log(error);
    })
    return true;
}

