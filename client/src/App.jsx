import { RouterProvider } from "react-router-dom"
import router from "./router/AppRouter.jsx"
import AuthProvider from "./contexts/AuthContext.jsx"
import AdminProvider from "./contexts/AdminContext.jsx"

function App() {

  return (
    <>
      <AuthProvider>
        <AdminProvider>
          <RouterProvider router={router} />
        </AdminProvider>
      </AuthProvider>
    </>
  )
}

export default App
