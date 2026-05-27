import { BrowserRouter, Routes, Route } from "react-router-dom";

/* WEBSITE COMPONENTS */
import Navbar from "./components/Navbar";

/* WEBSITE PAGES */
import Home from "./pages/Home";
import About from "./pages/About";
import Admission from "./pages/Admission";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

/* ADMIN PAGES */
import AdminLogin from "./pages/admin/AdminLogin";
import AdminMessages from "./pages/admin/AdminMessages";
import AdminAdmissions from "./pages/admin/AdminAdmissions";
import AdminEvents from "./pages/admin/AdminEvents";
import AdminGallery from "./pages/admin/AdminGallery";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminNotice from "./pages/admin/AdminNotice";

/* ADMIN COMPONENTS */
import AdminLayout from "./components/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminPamphlet from "./pages/admin/AdminPamphlet";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* ================= WEBSITE ROUTES ================= */}

        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />

        <Route
          path="/admission"
          element={
            <>
              <Navbar />
              <Admission />
            </>
          }
        />

        <Route
          path="/events"
          element={
            <>
              <Navbar />
              <Events />
            </>
          }
        />

        <Route
          path="/gallery"
          element={
            <>
              <Navbar />
              <Gallery />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
            </>
          }
        />



        {/* ================= ADMIN LOGIN ================= */}

        <Route
          path="/admin-login"
          element={<AdminLogin />}
        />



        {/* ================= ADMIN PANEL ================= */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >

          <Route
            path="messages"
            element={<AdminMessages />}
          />
          <Route
              path="admissions"
              element={<AdminAdmissions />}
           />
           <Route
            path="events"
            element={<AdminEvents />}
            />
            <Route
              path="gallery"
              element={<AdminGallery />}
            />
            <Route
             path="dashboard"
             element={<AdminDashboard />}
            />
            <Route
              path="/admin/notices"
              element={<AdminNotice />}
            />
            <Route
              path="/admin/pamphlets"
              element={<AdminPamphlet />}
            />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;