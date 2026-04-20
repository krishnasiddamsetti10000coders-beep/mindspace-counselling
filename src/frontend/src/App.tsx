import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Layout } from "./components/Layout";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import { ServicesPage } from "./pages/ServicesPage";

const rootRoute = createRootRoute({
  component: Layout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const howItWorksRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/how-it-works",
  component: HowItWorksPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  servicesRoute,
  aboutRoute,
  howItWorksRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
