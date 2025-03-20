import { SigninContainer } from "@/components/organisms/Auth/SigninContainer"
import { SignupContainer } from "@/components/organisms/Auth/SignupContainer"
import { Auth } from "@/pages/Auth/Auth"
import { NotFound } from "@/pages/NotFound/NotFound"
import { Route, Routes } from "react-router-dom"
import { ProtectRoute } from "@/components/molecules/ProtectedRoute/ProtectedRoute"
import { Home } from "@/pages/Home/Home"

export const AppRoutes = () => {
    return(
        <Routes>
          <Route path='/auth/signup' element={<Auth><SignupContainer /></Auth>}/>
          <Route path='/auth/signin' element={<Auth><SigninContainer /></Auth>}/>
          <Route path='/home' element={<ProtectRoute><Auth><Home /></Auth></ProtectRoute>} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
    )
}