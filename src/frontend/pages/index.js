import React, { createRef } from "react";
import { info } from "@randajan/simple-app/fe";
import jet from "@randajan/jet-core";


import { LandingPage } from "./LandingPage/LandingPage";
import { Error404 } from "./Error404/Error404";
import { createRouter } from "@randajan/jet-react/dom/router";

import page from "@randajan/jet-react/base/page";
import tab from "@randajan/jet-react/base/tab";


const pages = [
  { title:"", path:"/", content:<LandingPage/> },
  { title:"", path:"(.*)", content:<Error404/> }
];

export const Router = createRouter(pages);


let _int;

tab.fit((next, v)=>{
  v = Object.jet.tap(v);
  
  v.title = info.title;

  clearTimeout(_int);

  if (v.visible !== false) { v.title += " ⛅"; }
  else { v.title += " ☁️"; }

  return v;
});

page.watch(_=>tab.set("title"));