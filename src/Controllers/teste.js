const data = { img: "batata.jpeg" };

const img = { ...data };

delete data.img;

console.log(data);

console.log(img);