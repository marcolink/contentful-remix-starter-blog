/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
    // appDirectory: "app",
    // assetsBuildDirectory: "public/build",
    // publicPath: "/build/",
    // serverBuildDirectory: "api/_build",
    ignoredRouteFiles: [".*"],
    serverDependenciesToBundle: ["@apollo/client", "zen-observable-ts"],
    future: {
        v2_dev: true,
    }
};
