const express = require("express");
const path = require("path"); 
const app = express();
const routes = require("./src/routes/cancionesRoutes");
const cors= require( "cors") ;

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));
app.use(cors()); 
app.use("/", routes);

app.listen(PORT, () => console.log(`Escuchamdo en port ${PORT}`));