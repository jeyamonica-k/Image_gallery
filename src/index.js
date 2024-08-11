import React from "react"
import ReactDOM from "react-dom/client"
import Gallery  from "./Gallery"
import "./style.css"
const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<div><h1 className="header">Favourite cartoon</h1>
<Gallery></Gallery></div>)
