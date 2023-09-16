// import Home from "./BT-Buoi1/BaiTapThucHanhLayout/Home";
import GlassesApp from "./BT-Buoi2/GlassesApp";
import Main from "./BT-DatVe/Main";
import ShoeShop from "./BT-ShoeShop/ShoeShop";
// import Main from "./Create-Code-Products/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Movie/modules/Home";
import Details from "./Movie/modules/Details";
import NotFound from "./Movie/components/NotFound";
import MainLayout from "./Movie/layouts/MainLayout";

function App() {
  return (
    // <Home/>
    // <GlassesApp/>
    // <Main/>
    // <ShoeShop/>
    <Main/>
   
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<MainLayout/>}>
    //       <Route index element={<Home />} />
    //       <Route path="movies/:movieId" element={<Details />} />
    //       {/* <Route path="tickets/:showtimeId" element={<Tickets/>}/> */}
    //     </Route>

    //     <Route path="*" element={<NotFound />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
