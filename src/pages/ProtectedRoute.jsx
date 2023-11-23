import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, requiredAdmin }) {
  // login 한 사용자가 있는지 확인
  // 그 사용자가 admin인지 확인
  // requiredAdmin true인 경우에는 login도 되어 있어야 하고, admin 권한도 가지고 있어야 함 조건에 맞자 아니면 상위 경로로 이동!
  // 조건에 맞는 경우에만 전달 된 children을 보여줌
  const { user } = useAuthContext();
  if (!user || (requiredAdmin && !user.isAdmin)) {
    return <Navigate to="/" replace />;
  }
  return children;
}
