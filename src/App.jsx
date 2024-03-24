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

const queryC = new QueryClient();

function App() {
  const [loaderFinished, setLoaderFinished] = useState(false);

  const element = useRoutes([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'contact',
          element: <Contact />,
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
      <ReactLenis root options={{ duration: 1.5 }}>
        {/* {!loaderFinished && (
          <Loader setLoaderFinished={setLoaderFinished} />
        )} */}
        <main>
          <Header />
          <AnimatePresence mode="wait" initial={false}>
            {React.cloneElement(element, { key: location.pathname })}
          </AnimatePresence>
        </main>
      </ReactLenis>
    </QueryClientProvider>
  );
}

export default App;
