import React from "react";
import { createRoot } from 'react-dom/client';

import fe, { info } from "@randajan/simple-app/fe";

import jet from "@randajan/jet-react";
import { Modal } from "@randajan/jet-react/dom/modal";
import "@randajan/jet-react/dom/modal/css";
import "@randajan/jet-react/dom/img/css";
import "@randajan/jet-react/dom/tile/css";

import screen from "@randajan/jet-react/base/screen";

import "./styles/*";

import { Background } from "./frames/Background/Background";
import { Router } from "./pages";


const root = document.getElementById("root");
screen.watch("", _=>root.setAttribute("data-screen", screen.getList().join(" ")), true);

createRoot(root).render(
    <Modal className="App" closeOnBlur>
        <Background/>
        <Router/>
    </Modal>
);
