import { Routes, Route } from "react-router-dom";
import CommonLayout from "./layouts/CommonLayout";
import MainPage from "./pages/MainPage";
import Rooms from "./pages/Rooms";
import Room from "./pages/Room";
import Join from "./pages/Join";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const App = () => {
  
  return (
    <Routes>
      <Route element={<CommonLayout></CommonLayout>}>
        <Route path="/" element={<MainPage></MainPage>} />
        <Route path="/room" element={<Rooms />}  />
        <Route path="/room/:roomNo" element={<Room />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
};

export default App;