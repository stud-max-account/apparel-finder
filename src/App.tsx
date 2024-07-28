import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Footer } from "./components/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import { MainPage } from "./pages/MainPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
