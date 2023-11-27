import { RouterProvider } from "react-router-dom"
import router from "./router/AppRouter.jsx"
import AuthProvider from "./contexts/AuthContext.jsx"
import AdminProvider from "./contexts/AdminContext.jsx"
import ActionProvider from "./contexts/ActionContext.jsx"
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <>
      <Toaster position="top-right"
        toastOptions={{
          // Define default options

          className: 'text-sm pr-8',
          style: {
            border: '1px solid #db0404',
            paddingRight: '50px',
            padding: '10px'
          },
        }} />
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
