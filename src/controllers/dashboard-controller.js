export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const viewData = {
        title: "Place Mark Dashboard",
      };
      return h.view("dashboard-view", viewData);
    },
  },
};