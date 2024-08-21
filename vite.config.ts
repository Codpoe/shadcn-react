import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { tsAlias } from 'vite-plugin-ts-alias';

const pkgEntry = 'src/index.ts';
const uiEntry = 'src/ui.ts';
const iconsEntry = 'src/icons.tsx';
const rechartsEntry = 'src/recharts.ts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsAlias(),
    react(),
    {
      name: 'build-lib',
      apply() {
        return process.env.LIB === '1';
      },
      enforce: 'pre',
      config() {
        const commonCode = `// This file is auto generated by plugin.
import './styles/globals.css';`;

        const pkgEntryCode = `${commonCode}\n${fs
          .readdirSync('./src', 'utf-8')
          .filter(
            name =>
              fs.statSync(path.resolve('src', name)).isDirectory() &&
              /^[A-Z]/.test(name),
          )
          .map(name => `export * from './${name}';\n`)
          .join('')}`;

        const uiEntryCode = `${commonCode}\n${fs
          .readdirSync('./src/ui', 'utf-8')
          .map(name => `export * from './ui/${name}';\n`)
          .join('')}`;

        fs.writeFileSync(pkgEntry, pkgEntryCode, 'utf-8');
        fs.writeFileSync(uiEntry, uiEntryCode, 'utf-8');

        return {
          build: {
            lib: {
              entry: {
                index: pkgEntry,
                ui: uiEntry,
                icons: iconsEntry,
                recharts: rechartsEntry,
              },
              formats: ['es'],
            },
            rollupOptions: {
              external: ['react', 'react/jsx-runtime', 'react-dom'],
              output: {
                chunkFileNames: 'assets/[name]-[hash].js',
              },
            },
            copyPublicDir: false,
          },
        };
      },
    },
  ],
});
