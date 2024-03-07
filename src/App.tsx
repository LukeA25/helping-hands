import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./layout/Layout";
import Event from "./pages/Event";
import SignUp from "./pages/SignUp";
import { UserProvider } from "./UesrContext";

const App = () => {
  const location = useLocation();

  return (
    <UserProvider>
      <Layout>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Event />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Layout>
    </UserProvider>
  );
};

export default App;
