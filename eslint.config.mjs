import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  globalIgnores([
    '.next/**',
    'node_modules/**',
    'out/**',
    'dist/**',
    'build/**',
    '__MACOSX/**',
    'public/**',
    'next-env.d.ts',

    // Legacy files pendientes de migrar/eliminar
    'components/**',
    '*.html',
    'fix_html.py',
    'fix_html.ps1',
  ]),

  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      '@next/next/no-img-element': 'off',
      'react/no-unescaped-entities': 'off',
    },
  },
]);

export default eslintConfig;