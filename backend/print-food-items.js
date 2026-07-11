const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./config/config.env" });

const Fooditem = require("./models/foodItem");

async function check() {
  await mongoose.connect(process.env.DB_URI);
  const items = await Fooditem.find({}).limit(5);
  console.log("Sample Food Items:");
  items.forEach(item => {
    console.log({
      name: item.name,
      images: item.images
    });
  });
  await mongoose.connection.close();
}

check();
