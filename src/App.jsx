import React from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home/Home";
import ReactLenis from "@studio-freight/react-lenis";
import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FormSent from "./pages/Contact/FormSent/FormSent";
import Contact from "./pages/Contact/Contact";

const queryC = new QueryClient();

function App() {
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
