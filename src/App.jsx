import { RouterProvider } from "react-router-dom"
import router from "./router/AppRouter.jsx"
import AuthProvider from "./contexts/AuthContext.jsx"

function App() {

  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  )
}

export default App
