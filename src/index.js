import React from "react"
import ReactDOM from "react-dom/client"
import Gallery  from "./Gallery"

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<div><h1 style={{textAlign:"center", fontSize:"3rem"}}>Favourite cartoon</h1>
<Gallery></Gallery></div>)
