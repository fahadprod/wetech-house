import ProtectedRoute from "@/components/auth/protected";
import SeminarPage from "@/components/seminar/seminar-page";


export default function Seminar() {
  return  <ProtectedRoute requiredRole='user'>
            <SeminarPage />
          </ProtectedRoute>
}
