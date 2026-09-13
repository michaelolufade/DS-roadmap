import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import { GlobalProvider } from "./GlobalContext"
import TestView from "./components/TestPage"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="test/:topicId" element={<TestView />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
