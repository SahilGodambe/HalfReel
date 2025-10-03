import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server";

// https://vitejs.dev/config/
export default defineConfig({
  root: "client",
  server: {
    host: "0.0.0.0",
    port: 8080,
    allowedHosts: true,
    fs: {
      allow: [
        path.resolve(__dirname, "client"),
        path.resolve(__dirname, "shared")
      ],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"]
    }
  },
  build: {
    outDir: "../dist/spa"
  },
  plugins: [
    react(),
    expressPlugin()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
      "@shared": path.resolve(__dirname, "./shared")
    }
  }
});

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve",
    configureServer(server) {
      const app = createServer();
      server.middlewares.use(app);
    }
  };
}
