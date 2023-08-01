
console.log("Hello World Server Silde Javascript");


import express from 'express';
import path from "path"
const __dirname = path.resolve();
import apiv1 from "./apiv1/index.mjs"
// import apiv2 from "./apiv2/index.mjs"





const app = express()
app.use(express.json()); //body parse
const PORT = process.env.PORT || 3000


// app.use(authRouter)
app.use("/api/v1", apiv1)
// app.use("/api/v2", apiv2)




// /static/vscode_windows,exe
app.use("/static", express.static(path.join(__dirname, "static")))
app.use(express.static(path.join(__dirname, 'public')))
app.listen(PORT, () => {
  console.log(`Example server listening on port ${PORT}`)
})






