import { RouterProvider } from "react-router-dom"
import router from "./router/appRouter.jsx"

function App() {

  return (
      <RouterProvider router={router} />
  )
}

export default App
