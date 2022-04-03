import { accountsController } from "./controllers/accounts-controller.js";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { themeController } from "./controllers/theme-controller.js";
import { placeController } from "./controllers/place-controller.js";

export const webRoutes = [
  { method: "GET", path: "/", config: accountsController.index },
  { method: "GET", path: "/signup", config: accountsController.showSignup },
  { method: "GET", path: "/login", config: accountsController.showLogin },
  { method: "GET", path: "/logout", config: accountsController.logout },
  { method: "POST", path: "/register", config: accountsController.signup },
  { method: "POST", path: "/authenticate", config: accountsController.login },
  { method: "GET", path: "/user", config: accountsController.showUser },
  { method: "POST", path: "/user/update", config: accountsController.updateUser },

  { method: "GET", path: "/dashboard", config: dashboardController.index },
  { method: "POST", path: "/dashboard/add", config: dashboardController.addTheme },
  { method: "GET", path: "/dashboard/delete/{id}", config: dashboardController.deleteTheme },
  { method: "POST", path: "/dashboard/update/{id}", config: dashboardController.updateTheme },

  { method: "GET", path: "/theme/{id}", config: themeController.index },
  { method: "POST", path: "/theme/{id}/add", config: themeController.addPlace },
  { method: "GET", path: "/theme/{id}/delete/{placeId}", config: themeController.deletePlace },

  { method: "GET", path: "/theme/{id}/{placeId}", config: placeController.index },
  { method: "POST", path: "/theme/{id}/update/{placeId}", config: placeController.updatePlace },

  { method: "GET", path: "/{param*}", handler: { directory: { path: "./public" } }, options: { auth: false } }
];
