import type { NextConfig } from "next";

// O GitHub Pages serve o repositório em /port, não na raiz do domínio.
// A variável só existe no workflow, então `npm run dev` continua em /.
const basePath = process.env.GITHUB_PAGES === "true" ? "/port" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
