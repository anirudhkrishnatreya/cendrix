const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const explicitBasePath = process.env.NEXT_PUBLIC_BASE_PATH
const basePath = explicitBasePath ?? (repoName && !repoName.endsWith('.github.io') ? `/${repoName}` : '')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
