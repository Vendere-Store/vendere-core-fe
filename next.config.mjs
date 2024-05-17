import {NextFederationPlugin} from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const remotes = (isServer) => {
    const location = isServer ? 'ssr' : 'chunks';
    return {
        // specify remotes
        products: `products@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
        // remote: `remote@https://products.vendere.store/_next/static/${location}/remoteEntry.js`,

    };
}

const nextConfig = {
    reactStrictMode: true,
    webpack(config, { isServer }) {
        config.plugins.push(
            new NextFederationPlugin({
                name: 'host',
                filename: 'static/chunks/remoteEntry.js',
                remotes: remotes(isServer),
                exposes: {
                    // Host app also can expose modules
                }
            })
        );


        return config;
    },
}

export default nextConfig;
