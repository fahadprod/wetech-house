import MainDashboard from "@/components/admin/main-dashboard";
import ProtectedRoute from "@/components/auth/protected";



export default function Dashboard() {
  return  <ProtectedRoute requiredRole='admin'>
            <MainDashboard />
          </ProtectedRoute>
}
