import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from '@vercel/analytics/next';
import Home from "./pages/Home";
import Music from "./pages/Music";
import Mission from "./pages/Mission";
import Travel from "./pages/Travel";
import { Experience } from "./pages/Experience";

function App() {
  return (
    <>
      <meta
        name="viewport"
        content="user-scalable=no, width=device-width, initial-scale=1.0"
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap');
      </style>
      <BrowserRouter>
        <Routes>
          {/*<Route path="/" element={<NavBar />}>*/}
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="experience" element={<Experience />} />
            <Route path="mission" element={<Mission />} />
            <Route path="music" element={<Music />} />
            <Route path="travel" element={<Travel />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Analytics />
    </>
  );
}

export default App;
