module.exports = {
  apps: [{
      name: "gdg-staging",
      script: "npm",
      args: "run dev",
      watch: true,
      watch: ["server", "client"],
      // Delay between restart
      // watch_delay: 1000,
      ignore_watch: ["node_modules", "Tests"],
      watch_options: {
        followSymlinks: false
        // "usePolling": true
      }
    },
    {
      name: "gdg-production",
      script: "npm",
      args: "run start"
    }
  ]
};