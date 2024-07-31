import React, { useState } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home/Home";
import ReactLenis from "@studio-freight/react-lenis";
import { Header } from "./components/Header/Header";
import Contact from "./pages/Contact/Contact";
import { Loader } from "./components/Loader/Loader";
import gsap from "gsap";
import LogoAnim from "./components/Loader/LogoAnim/LogoAnim";
import { ScrollBar } from "./components/ScrollBar/ScrollBar";
import { ScrollProvider } from "./helpers/scrollProvider";
import classNames from "classnames";

const queryC = new QueryClient();

function App() {
  const [loaderFinished, setLoaderFinished] = useState(false);
  // const [loaderFinished, setLoaderFinished] = useState(true);

  const element = useRoutes([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "logo-anim",
          element: <LogoAnim />,
        },
        // {
        //   path: 'blogs',
        //   children: [
        //     {
        //       path: ":blogId?",
        //       element: <BlogDetails />,
        //     },
        //   ],
        // }
      ],
    },
    // {
    //   path: "*",
    //   element: <ErrorPage />,
    // },
  ]);

  const location = useLocation();

  return (
    <QueryClientProvider client={queryC}>
      <ScrollProvider>
        {!loaderFinished && <Loader setLoaderFinished={setLoaderFinished} />}
        <main
          className={classNames("main", {
            "main--loading": !loaderFinished,
          })}
        >
          <Header />
          <AnimatePresence mode="wait" initial={false}>
            {React.cloneElement(element, { key: location.pathname })}
          </AnimatePresence>
        </main>
      </ScrollProvider>
    </QueryClientProvider>
  );
}

export default App;
