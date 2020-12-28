import express, { json } from "express";
import { Item } from "./model/sensor_item.js";
import { connect } from "./db_connect.js";
import cors from "cors";

connect();

const app = express();
const port = 2000;

app.use(cors());

app.use(express.static("public"));
app.use(express.json());

app.post("/", (req, res) => {
  Item.find(
    { date: req.body.date, sensor_id: req.body.sensor },
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(
          `Pobrano dane z dnia ${req.body.date} z czujnika ${req.body.sensor} , wysłano do klienta`
        );
        res.send(data);
      }
    }
  );
});

app.listen(port, () => console.log("Serwer uruchomiono na porcie " + port));
