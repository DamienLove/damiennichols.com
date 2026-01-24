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
import OmniRemote from './pages/OmniRemote';
import Login from './pages/Login';
import Admin from './pages/Admin';
import UniverseConnectedReader from './pages/UniverseConnectedReader';
import TheMAG from './pages/TheMAG';
import { AuthProvider } from './context/AuthContext';

// Wiki Pages
import PulseLinkGuide from './pages/wiki/pulselink/PulseLinkGuide';
import RingerSongManual from './pages/wiki/pulselink/RingerSongManual';
import VisionAndLore from './pages/wiki/betamax/VisionAndLore';
import SystemArchitecture from './pages/wiki/betamax/SystemArchitecture';
import UserManual from './pages/wiki/betamax/UserManual';
import DeveloperGuide from './pages/wiki/betamax/DeveloperGuide';
import QAVerifyWiki from './pages/wiki/qaverify/QAVerifyWiki';
import FacebookSearchWiki from './pages/wiki/facebooksearch/FacebookSearchWiki';
import OmniRemoteWiki from './pages/wiki/omniremote/OmniRemoteWiki';

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
      {
        path: "omni-remote",
        element: <OmniRemote />,
      },
      {
        path: "omniremote",
        element: <OmniRemote />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
      {
        path: "reader/universe-connected",
        element: <UniverseConnectedReader />,
      },
      {
        path: "themag",
        element: <TheMAG />,
      },
      {
        path: "themagdev",
        element: <TheMAG />,
      },
      {
        path: "pulselink/wiki/guide",
        element: <PulseLinkGuide />,
      },
      {
        path: "pulselink/wiki/ringersong",
        element: <RingerSongManual />,
      },
      {
        path: "betamax/wiki/vision",
        element: <VisionAndLore />,
      },
      {
        path: "betamax/wiki/architecture",
        element: <SystemArchitecture />,
      },
      {
        path: "betamax/wiki/manual",
        element: <UserManual />,
      },
      {
        path: "betamax/wiki/dev-guide",
        element: <DeveloperGuide />,
      },
      {
        path: "qa-verify/wiki",
        element: <QAVerifyWiki />,
      },
      {
        path: "facebook-search/wiki",
        element: <FacebookSearchWiki />,
      },
      {
        path: "omniremote/wiki",
        element: <OmniRemoteWiki />,
      },
      {
        path: "omni-remote/wiki",
        element: <OmniRemoteWiki />,
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

import { EnvironmentProvider } from './styles/EnvironmentProvider';

function App() {
  return (
    <EnvironmentProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </EnvironmentProvider>
  );
}

export default App;
