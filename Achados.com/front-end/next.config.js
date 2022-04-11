/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return {
			afterFiles: [
				{
					source: "/:path*",
					destination: `http://localhost:8080/:path*`,
				},
			],
		};
	},
	reactStrictMode: true,
};

module.exports = nextConfig;
