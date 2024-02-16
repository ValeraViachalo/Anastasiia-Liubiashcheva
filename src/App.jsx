import React from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home/Home";
import ReactLenis from "@studio-freight/react-lenis";
import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

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
        // {
        //   path: 'blog',
        //   element: <Blog />,
        // },
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
          <Footer />
        </main>
      </ReactLenis>
    </QueryClientProvider>
  );
}

export default App;
