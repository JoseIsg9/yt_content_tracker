const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("appInfo", {
  name: "YT Content Tracker",
});
