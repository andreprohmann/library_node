import express from "express";
import userRouters from "./src/routes/userRoutes.js";
const app = express();


app.use(express.json());
app.use(userRouters);


const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
