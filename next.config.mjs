import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

// On GitHub Pages this deploys to a *project* site (…github.io/docs), so the
// build needs a basePath. CI sets PAGES_BASE_PATH=/docs; local dev leaves it unset.
const basePath = process.env.PAGES_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default withMDX(config);
