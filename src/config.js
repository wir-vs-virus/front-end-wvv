const isDev = process.env.NODE_ENV === "development";

const backendHost = isDev
  ? "http://localhost:50123"
  : "https://wvv.fgeckeler.de";

module.exports = {
  appName: "Wir-vs-Virus",
  backendHost
};
