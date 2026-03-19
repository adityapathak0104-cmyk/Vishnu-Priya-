import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {base: '/VishPerfect! I can see your `vite.config.ts` file is now open. Here's what I see:

## **Image Description:**

You're viewing the **vite.config.ts** file in your Vishnu-Priya repository. The file shows:

- **Left sidebar**: List of all your files (Files panel)
- **Main content area**: The actual vite.config.ts code (24 lines)

### **Current Configuration (What's There):**
```typescript
- Imports from tailwindcss, react, vite, path
- defineConfig with:
  - plugins: [react(), tailwindcss()]
  - define: (for environment variables like GEMINI_API_KEY)
  - resolve: (alias configuration)
  - server: (HMR disabled settingsnu-Priya/',
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
