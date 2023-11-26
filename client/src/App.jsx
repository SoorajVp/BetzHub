import { RouterProvider } from "react-router-dom"
import router from "./router/AppRouter.jsx"
import AuthProvider from "./contexts/AuthContext.jsx"
import AdminProvider from "./contexts/AdminContext.jsx"
import ActionProvider from "./contexts/ActionContext.jsx"

function App() {

  return (
    <>
      <AuthProvider>
        <AdminProvider>
          <ActionProvider>
            <RouterProvider router={router} />
          </ActionProvider>
        </AdminProvider>
      </AuthProvider>
    </>
  )
}

export default App
