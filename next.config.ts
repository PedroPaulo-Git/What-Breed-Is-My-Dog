import type { NextConfig } from "next";
const nextConfig = {
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.dog.ceo',
        port: '', // deixe vazio se não houver uma porta específica
        pathname: '/**', // permite qualquer caminho
      },
    ],
  },
};

module.exports = nextConfig;