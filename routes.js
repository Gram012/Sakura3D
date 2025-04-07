import { createReactRouter, createRouteConfig } from "@tanstack/react-router";
import Home from "./pages/Home";
import About from "./pages/About";

const rootRoute = createRouteConfig({
  component: () => <div>Root Layout</div>,
});

const homeRoute = rootRoute.createRoute({
  path: "/",
  component: Home,
});

const aboutRoute = rootRoute.createRoute({
  path: "/about",
  component: About,
});

export const routeConfig = rootRoute.addChildren([homeRoute, aboutRoute]);

export const router = createReactRouter({ routeConfig });
