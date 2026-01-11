import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PulseLink from './pages/PulseLink';
import BetaMax from './pages/BetaMax';
import QAVerify from './pages/QAVerify';
import Books from './pages/Books';
import About from './pages/About';
import PulseLinkPromo from './pages/PulseLinkPromo';
import Privacy from './pages/Privacy';
import FacebookSearch from './pages/FacebookSearch';
import BugReport from './pages/BugReport';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "pulselink",
        element: <PulseLink />,
      },
      {
        path: "betamax",
        element: <BetaMax />,
      },
      {
        path: "qa-verify",
        element: <QAVerify />,
      },
      {
        path: "books",
        element: <Books />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "facebook-search",
        element: <FacebookSearch />,
      },
      {
        path: "bug-report",
        element: <BugReport />,
      },
    ],
  },
  {
    path: "/pulselink/promo",
    element: <PulseLinkPromo />, // Landing page without main layout
  },
  {
    path: "/privacy",
    element: <Privacy />, // Privacy policy page
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
