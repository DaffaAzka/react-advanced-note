import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import $ from "jquery";
import _ from "lodash";
import noUiSlider from "nouislider";
import "datatables.net";
import "dropzone/dist/dropzone-min.js";
import * as VanillaCalendarPro from "vanilla-calendar-pro";
import { AppLayout } from "./layouts/App.tsx";
import { Create as CreateNote } from "./pages/notes/Create.tsx";

window._ = _;
window.$ = $;
window.jQuery = $;
window.DataTable = $.fn.dataTable;
window.noUiSlider = noUiSlider;
window.VanillaCalendarPro = VanillaCalendarPro;



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<App />} />
      <Route path="create" element={<CreateNote />} />

      <Route path=":id">
        <Route index element={<h1>Show</h1>} />
        <Route path="edit" element={<h1>Edit</h1>} />
      </Route>

      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
