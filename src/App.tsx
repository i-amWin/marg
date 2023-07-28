import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/Dashboard";
import OuterWrapper from "./components/OuterWrapper";

export default function App() {
  return (
    <div>
      <OuterWrapper>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </OuterWrapper>
    </div>
  );
}
