import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: "localhost",
    port: 3000,
    open: true, // 개발 서버가 시작할 때 브라우저 자동으로 열기
  },
  build: {
    outDir: "dist", // 빌드 결과물이 저장될 디렉토리
    sourcemap: true, // 소스 맵 생성
  },
});
