import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Perfumes from "./pages/Perfumes";
import PerfumeDetail from "./pages/PerfumeDetail";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Agent/Dashboard";
import Income from "./pages/Agent/Income";
import Reviews from "./pages/Agent/Reviews";
import AgentLayout from "./components/layout/AgentLayout";
import AgentPerfumeDetail from "./pages/Agent/AgentPerfumeDetail";
import PerfumesAgent from "./pages/Agent/PerfumesAgent";
import DetailInfo from "./pages/Agent/AgentPerfume/DetailInfo";
import PhotosInfo from "./pages/Agent/AgentPerfume/PhotosInfo";
import PricingInfo from "./pages/Agent/AgentPerfume/PricingInfo";
import NotFoundPage from "./pages/NotFoundPage";
import ErrorLoading from "./components/Error";

import Login, { action as formAction } from "./pages/Login";
import AuthRequired from "./components/AuthRequired";
import { loader as PerfumesLoader } from "./pages/Perfumes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} errorElement={<ErrorLoading />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' action={formAction} element={<Login />} />
      <Route
        path='/perfumes'
        element={<Perfumes />}
        loader={PerfumesLoader}
        errorElement={<ErrorLoading />}
      />
      <Route path='/perfumes/:id' element={<PerfumeDetail />} />
      <Route element={<AuthRequired />}>
        <Route path='/agent' element={<AgentLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='perfumes' element={<PerfumesAgent />} />
          <Route path='income' element={<Income />} />
          <Route path='reviews' element={<Reviews />} />
          <Route path='perfumes/:id' element={<AgentPerfumeDetail />}>
            <Route index element={<DetailInfo />} />
            <Route path='pricing' element={<PricingInfo />} />
            <Route path='photos' element={<PhotosInfo />} />
          </Route>
        </Route>
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
