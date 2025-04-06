import { SigninContainer } from "@/components/organisms/Auth/SigninContainer"
import { SignupContainer } from "@/components/organisms/Auth/SignupContainer"
import { Auth } from "@/pages/Auth/Auth"
import { NotFound } from "@/pages/NotFound/NotFound"
import { Route, Routes } from "react-router-dom"
import { ProtectRoute } from "@/components/molecules/ProtectedRoute/ProtectedRoute"
import { Home } from "@/pages/Home/Home"
import { WorkspaceLayout } from "@/pages/Workspace/Layout";
import { JoinPage } from "./pages/Workspace/JoinPage"
import { Channel } from "./pages/Workspace/Channel/Channel"
import { Payments } from "./pages/Payments/Payments"

export const AppRoutes = () => {
    return(
        <Routes>
          <Route path='/auth/signup' element={<Auth><SignupContainer /></Auth>}/>
          <Route path='/auth/signin' element={<Auth><SigninContainer /></Auth>}/>
          <Route path='/home' element={<ProtectRoute><Auth><Home /></Auth></ProtectRoute>} />
          <Route path='/workspaces/:workspaceId' element={<ProtectRoute><WorkspaceLayout>
            Workspace  
          </WorkspaceLayout></ProtectRoute>} />
          <Route path="/workspaces/:workspaceId/channels/:channelId" element={<ProtectRoute><WorkspaceLayout><Channel /></WorkspaceLayout></ProtectRoute>}/>
          <Route path="/makepayment" element={<ProtectRoute><Payments /></ProtectRoute>} />
          <Route path="workspaces/join/:workspaceId" element={<JoinPage />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
    )
}