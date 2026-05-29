import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Appointments from "./pages/Appointments";
import Contacts from "./pages/Contact";
import Enquiries from "./pages/Enquiries";
import Blogs from "./pages/Blogs";

import { jwtDecode }
from "jwt-decode";

const ProtectedRoute = ({
  children
}) => {

  const token =
    localStorage.getItem(
      "token"
    );

  if (!token) {

    return <Navigate to="/" />;
  }

  try {

    const decoded =
      jwtDecode(token);

    const currentTime =
      Date.now() / 1000;

    if (
      decoded.exp < currentTime
    ) {

      localStorage.removeItem(
        "token"
      );

      return <Navigate to="/" />;
    }

  } catch (error) {

    localStorage.removeItem(
      "token"
    );

    return <Navigate to="/" />;
  }

  return children;
};

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

       <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

        <Route
  path="/appointments"
  element={
    <ProtectedRoute>
<Appointments />
    </ProtectedRoute>
  
  }
/>

<Route
path="/contacts"
element={
    <ProtectedRoute>
      <Contacts/>
    </ProtectedRoute>


}
/>

<Route
  path="/enquiries"
  element={
    <ProtectedRoute>
        <Enquiries />
    </ProtectedRoute>

  }
/>

<Route
  path="/blogs"
  element={<Blogs />}
/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;