# SkillBridge

A full consolidated snapshot of the SkillBridge code base is provided below. This includes root config files, application entry points, routes, layout components, pages, services, and styles.

```text
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

```text
{
  "singleQuote": true,
  "jsxSingleQuote": true,
  "arrowParens": "avoid",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

```json
{
  "name": "template-repo-2",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@google/genai": "^2.3.0",
    "@supabase/supabase-js": "^2.105.4",
    "@tailwindcss/vite": "^4.1.18",
    "@tanstack/react-query": "^5.100.11",
    "lucide-react": "^1.16.0",
    "motion": "^12.39.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-hook-form": "^7.76.0",
    "react-hot-toast": "^2.6.0",
    "react-router": "^7.15.1",
    "tailwindcss": "^4.1.18"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "prettier": "^3.7.4",
    "prettier-plugin-tailwindcss": "^0.7.2",
    "vite": "^7.2.4"
  }
}
```

```json
{
  "name": "template-repo-2",
  "version": "0.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "template-repo-2",
      "version": "0.0.0",
      "dependencies": {
        "@google/genai": "^2.3.0",
        "@supabase/supabase-js": "^2.105.4",
        "@tailwindcss/vite": "^4.1.18",
        "@tanstack/react-query": "^5.100.11",
        "lucide-react": "^1.16.0",
        "motion": "^12.39.0",
        "react": "^19.2.0",
        "react-dom": "^19.2.0",
        "react-hook-form": "^7.76.0",
        "react-hot-toast": "^2.6.0",
        "react-router": "^7.15.1",
        "tailwindcss": "^4.1.18"
      },
      "devDependencies": {
        "@eslint/js": "^9.39.1",
        "@types/react": "^19.2.5",
        "@types/react-dom": "^19.2.3",
        "@vitejs/plugin-react": "^5.1.1",
        "eslint": "^9.39.1",
        "eslint-plugin-react-hooks": "^7.0.1",
        "eslint-plugin-react-refresh": "^0.4.24",
        "globals": "^16.5.0",
        "prettier": "^3.7.4",
        "prettier-plugin-tailwindcss": "^0.7.2",
        "vite": "^7.2.4"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.27.1.tgz",
      "integrity": "sha512-cjQ7ZlQ0Mv3b47hABuTevyTuYN4i+loJKGeV9flcCgIK37cCXRh+L1bd3iBHlynerhQ7BhCkn2BPbQUL+rGqFg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.27.1",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.28.5.tgz",
      "integrity": "sha512-6uFXyCayocRbqhZOB+6XcuZbkMNimwfVGFji8CTZnCzOHVGvDqzvitu1re2AU5LROliz7eQPhB8CpAMvnx9EjA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.28.5.tgz",
      "integrity": "sha512-e7jT4DxYvIDLk1ZHmU/m/mB19rex9sv0c2ftBtjSBv+kVM/902eh0fINUzD7UwLLNR+jU585GxUJ8/EBfAM5fw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.5",
        "@babel/helper-compilation-targets": "^7.27.2",
        "@babel/helper-module-transforms": "^7.28.3",
        "@babel/helpers": "^7.28.4",
        "@babel/parser": "^7.28.5",
        "@babel/template": "^7.27.2",
        "@babel/traverse": "^7.28.5",
        "@babel/types": "^7.28.5",
        "@jridgewell/remapping": "^2.3.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.28.5.tgz",
      "integrity": "sha512-3EwLFhZ38J4VyIP6WNtt2kUdW9dokXA9Cr4IVIFHuCpZ3H8/YFOl5JjZHisrn1fATPBmKKqXzDFvh9fUwHz6CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.28.5",
        "@babel/types": "^7.28.5",
        "@jridgewell/gen-mapping": "^0.3.12",
        "@jridgewell/trace-mapping": "^0.3.28",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.27.2",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.27.2.tgz",
      "integrity": "sha512-2+1thGUUWWjLTYTHZWK1n8Yga0ijBz1XAhUXcKy81rd5g6yh7hGqMp45v7cadSbEHc9G3OTv45SyneRN3ps4DQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.27.2",
        "@babel/helper-validator-option": "^7.27.1",
        "browserslist": "^4.24.0",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-globals": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-globals/-/helper-globals-7.28.0.tgz",
      "integrity": "sha512-+W6cISkXFa1jXsDEdYA8HeevQT/FULhxzR99pxphltZcVaugps53THCeiWA8SguxxpSp3gKPiuYfSWopkLQ4hw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.27.1.tgz",
      "integrity": "sha512-0gSFWUPNXNopqtIPQvlD5WgXYI5GY2kP2cCvoT8kczjbfcfuIljTbcWrulD1CIPIX2gt1wghbDy08yE1p+/r3w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.27.1",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.28.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.28.3.tgz",
      "integrity": "sha512-gytXUbs8k2sXS9PnQptz5o0QnpLL51SwASIORY6XaBKF88nsOT0Zw9szLqlSGQDP/4TljBAD5y98p2U1fqkdsw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.27.1",
        "@babel/traverse": "^7.28.3"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-plugin-utils": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.27.1.tgz",
      "integrity": "sha512-1gn1Up5YXka3YYAHGKpbideQ5Yjf1tDa9qYcgysz+cNCXukyLl6DjPXhD3VRwSb8c0J9tA4b2+rHEZtc6R0tlw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.27.1.tgz",
      "integrity": "sha512-qMlSxKbpRlAridDExk92nSobyDdpPijUq2DW6oDnUqd0iOGxmQjyqhMIihI9+zv4LPyZdRje2cavWPbCbWm3eA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.28.5.tgz",
      "integrity": "sha512-qSs4ifwzKJSV39ucNjsvc6WVHs6b7S03sOh2OcHF9UHfVPqWWALUsNUVzhSBiItjRZoLHx7nIarVjqKVusUZ1Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.27.1.tgz",
      "integrity": "sha512-YvjJow9FxbhFFKDSuFnVCe2WxXk1zWc22fFePVNEaWJEu8IrZVlda6N0uHwzZrUM1il7NC9Mlp4MaJYbYd9JSg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.28.4",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.28.4.tgz",
      "integrity": "sha512-HFN59MmQXGHVyYadKLVumYsA9dBFun/ldYxipEjzA4196jpLZd8UjEEBLkbEkvfYreDqJhZxYAWFPtrfhNpj4w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.28.4"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.28.5.tgz",
      "integrity": "sha512-KKBU1VGYR7ORr3At5HAtUQ+TV3SzRCXmA/8OdDZiLDBIZxVyzXuztPjfLd3BV1PRAQGCMWWSHYhL0F8d5uHBDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.28.5"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-self": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-self/-/plugin-transform-react-jsx-self-7.27.1.tgz",
      "integrity": "sha512-6UzkCs+ejGdZ5mFFC/OCUrv028ab2fp1znZmCZjAOBKiBK2jXD1O+BPSfX8X2qjJ75fZBMSnQn3Rq2mrBJK2mw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-source": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-source/-/plugin-transform-react-jsx-source-7.27.1.tgz",
      "integrity": "sha512-zbwoTsBruTeKB9hSq73ha66iFeJHuaFkUbwvqElnygoNbj/jHRsSeokowZFN3CZ64IvEqcmmkVe89OPXc7ldAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.27.2",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.27.2.tgz",
      "integrity": "sha512-LPDZ85aEJyYSd18/DkjNh4/y1ntkE5KwUHWTiqgRxruuZL2F1yuHligVHLvcHY2vMHXttKFpJn6LwfI7cw7ODw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/parser": "^7.27.2",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.28.5.tgz",
      "integrity": "sha512-TCCj4t55U90khlYkVV/0TfkJkAkUg3jZFA3Neb7unZT8CPok7iiRfaX0F+WnqWqt7OxhOn0uBKXCw4lbL8W0aQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.5",
        "@babel/helper-globals": "^7.28.0",
        "@babel/parser": "^7.28.5",
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.28.5",
        "debug": "^4.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.28.5.tgz",
      "integrity": "sha512-qQ5m48eI/MFLQ5PxQj4PFaprjyCTLI37ElWMmNs0K8Lk3dVeOdNpB3ks8jc7yM5CDmVC73eMVk/trk3fgmrUpA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-string-parser": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.28.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@esbuild/aix-ppc64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.27.2.tgz",
      "integrity": "sha512-GZMB+a0mOMZs4MpDbj8RJp4cw+w1WV5NYD6xzgvzUJ5Ek2jerwfO2eADyI6ExDSUED+1X8aMbegahsJi+8mgpw==",
      "cpu": [
        "ppc64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.27.2.tgz",
      "integrity": "sha512-DVNI8jlPa7Ujbr1yjU2PfUSRtAUZPG9I1RwW4F4xFB1Imiu2on0ADiI/c3td+KmDtVKNbi+nffGDQMfcIMkwIA==",
      "cpu": [
        "arm"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.27.2.tgz",
      "integrity": "sha512-pvz8ZZ7ot/RBphf8fv60ljmaoydPU12VuXHImtAs0XhLLw+EXBi2BLe3OYSBslR4rryHvweW5gmkKFwTiFy6KA==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.27.2.tgz",
      "integrity": "sha512-z8Ank4Byh4TJJOh4wpz8g2vDy75zFL0TlZlkUkEwYXuPSgX8yzep596n6mT7905kA9uHZsf/o2OJZubl2l3M7A==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.27.2.tgz",
      "integrity": "sha512-davCD2Zc80nzDVRwXTcQP/28fiJbcOwvdolL0sOiOsbwBa72kegmVU0Wrh1MYrbuCL98Omp5dVhQFWRKR2ZAlg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.27.2.tgz",
      "integrity": "sha512-ZxtijOmlQCBWGwbVmwOF/UCzuGIbUkqB1faQRf5akQmxRJ1ujusWsb3CVfk/9iZKr2L5SMU5wPBi1UWbvL+VQA==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.27.2.tgz",
      "integrity": "sha512-lS/9CN+rgqQ9czogxlMcBMGd+l8Q3Nj1MFQwBZJyoEKI50XGxwuzznYdwcav6lpOGv5BqaZXqvBSiB/kJ5op+g==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.27.2.tgz",
      "integrity": "sha512-tAfqtNYb4YgPnJlEFu4c212HYjQWSO/w/h/lQaBK7RbwGIkBOuNKQI9tqWzx7Wtp7bTPaGC6MJvWI608P3wXYA==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.27.2.tgz",
      "integrity": "sha512-vWfq4GaIMP9AIe4yj1ZUW18RDhx6EPQKjwe7n8BbIecFtCQG4CfHGaHuh7fdfq+y3LIA2vGS/o9ZBGVxIDi9hw==",
      "cpu": [
        "arm"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.27.2.tgz",
      "integrity": "sha512-hYxN8pr66NsCCiRFkHUAsxylNOcAQaxSSkHMMjcpx0si13t1LHFphxJZUiGwojB1a/Hd5OiPIqDdXONia6bhTw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.27.2.tgz",
      "integrity": "sha512-MJt5BRRSScPDwG2hLelYhAAKh9imjHK5+NE/tvnRLbIqUWa+0E9N4WNMjmp/kXXPHZGqPLxggwVhz7QP8CTR8w==",
      "cpu": [
        "ia32"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.27.2.tgz",
      "integrity": "sha512-lugyF1atnAT463aO6KPshVCJK5NgRnU4yb3FUumyVz+cGvZbontBgzeGFO1nF+dPueHD367a2ZXe1NtUkAjOtg==",
      "cpu": [
        "loong64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.27.2.tgz",
      "integrity": "sha512-nlP2I6ArEBewvJ2gjrrkESEZkB5mIoaTswuqNFRv/WYd+ATtUpe9Y09RnJvgvdag7he0OWgEZWhviS1OTOKixw==",
      "cpu": [
        "mips64el"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ppc64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.27.2.tgz",
      "integrity": "sha512-C92gnpey7tUQONqg1n6dKVbx3vphKtTHJaNG2Ok9lGwbZil6DrfyecMsp9CrmXGQJmZ7iiVXvvZH6Ml5hL6XdQ==",
      "cpu": [
        "ppc64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-riscv64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.27.2.tgz",
      "integrity": "sha512-B5BOmojNtUyN8AXlK0QJyvjEZkWwy/FKvakkTDCziX95AowLZKR6aCDhG7LeF7uMCXEJqwa8Bejz5LTPYm8AvA==",
      "cpu": [
        "riscv64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-s390x": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.27.2.tgz",
      "integrity": "sha512-p4bm9+wsPwup5Z8f4EpfN63qNagQ47Ua2znaqGH6bqLlmJ4bx97Y9JdqxgGZ6Y8xVTixUnEkoKSHcpRlDnNr5w==",
      "cpu": [
        "s390x"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.27.2.tgz",
      "integrity": "sha512-uwp2Tip5aPmH+NRUwTcfLb+W32WXjpFejTIOWZFw/v7/KnpCDKG66u4DLcurQpiYTiYwQ9B7KOeMJvLCu/OvbA==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-arm64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.27.2.tgz",
      "integrity": "sha512-Kj6DiBlwXrPsCRDeRvGAUb/LNrBASrfqAIok+xB0LxK8CHqxZ037viF13ugfsIpePH93mX7xfJp97cyDuTZ3cw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-x64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.27.2.tgz",
      "integrity": "sha512-HwGDZ0VLVBY3Y+Nw0JexZy9o/nUAWq9MlV7cahpaXKW6TOzfVno3y3/M8Ga8u8Yr7GldLOov27xiCnqRZf0tCA==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-arm64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.27.2.tgz",
      "integrity": "sha512-DNIHH2BPQ5551A7oSHD0CKbwIA/Ox7+78/AWkbS5QoRzaqlev2uFayfSxq68EkonB+IKjiuxBFoV8ESJy8bOHA==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-x64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.27.2.tgz",
      "integrity": "sha512-/it7w9Nb7+0KFIzjalNJVR5bOzA9Vay+yIPLVHfIQYG/j+j9VTH84aNB8ExGKPU4AzfaEvN9/V4HV+F+vo8OEg==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openharmony-arm64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/openharmony-arm64/-/openharmony-arm64-0.27.2.tgz",
      "integrity": "sha512-LRBbCmiU51IXfeXk59csuX/aSaToeG7w48nMwA6049Y4J4+VbWALAuXcs+qcD04rHDuSCSRKdmY63sruDS5qag==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/sunos-x64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.27.2.tgz",
      "integrity": "sha512-kMtx1yqJHTmqaqHPAzKCAkDaKsffmXkPHThSfRwZGyuqyIeBvf08KSsYXl+abf5HDAPMJIPnbBfXvP2ZC2TfHg==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-arm64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.27.2.tgz",
      "integrity": "sha512-Yaf78O/B3Kkh+nKABUF++bvJv5Ijoy9AN1ww904rOXZFLWVc5OLOfL56W+C8F9xn5JQZa3UX6m+IktJnIb1Jjg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-ia32": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.27.2.tgz",
      "integrity": "sha512-Iuws0kxo4yusk7sw70Xa2E2imZU5HoixzxfGCdxwBdhiDgt9vX9VUCBhqcwY7/uh//78A1hMkkROMJq9l27oLQ==",
      "cpu": [
        "ia32"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-x64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.27.2.tgz",
      "integrity": "sha512-sRdU18mcKf7F+YgheI/zGf5alZatMUTKj/jNS6l744f9u3WFu4v7twcUI9vu4mknF4Y9aDlblIie0IM+5xxaqQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.9.0",
      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.9.0.tgz",
      "integrity": "sha512-ayVFHdtZ+hsq1t2Dy24wCmGXGe4q9Gu3smhLYALJrr473ZH27MsnSL+LKUlimp4BWJqMDMLmPpx/Q9R3OAlL4g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils/node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
      "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.12.2",
      "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.2.tgz",
      "integrity": "sha512-EriSTlt5OC9/7SXkRSCAhfSxxoSUgBm33OH+IkwbdpgoqsSsUg7y3uh+IICI/Qg4BBWr3U2i39RpmycbxMq4ew==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/config-array": {
      "version": "0.21.1",
      "resolved": "https://registry.npmjs.org/@eslint/config-array/-/config-array-0.21.1.tgz",
      "integrity": "sha512-aw1gNayWpdI/jSYVgzN5pL0cfzU02GT3NBpeT/DXbx1/1x7ZKxFPd9bwrzygx/qiwIQiJ1sw/zD8qY/kRvlGHA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/object-schema": "^2.1.7",
        "debug": "^4.3.1",
        "minimatch": "^3.1.2"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/config-helpers": {
      "version": "0.4.2",
      "resolved": "https://registry.npmjs.org/@eslint/config-helpers/-/config-helpers-0.4.2.tgz",
      "integrity": "sha512-gBrxN88gOIf3R7ja5K9slwNayVcZgK6SOUORm2uBzTeIEfeVaIhOpCtTox3P6R7o2jLFwLFTLnC7kU/RGcYEgw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/core": "^0.17.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/core": {
      "version": "0.17.0",
      "resolved": "https://registry.npmjs.org/@eslint/core/-/core-0.17.0.tgz",
      "integrity": "sha512-yL/sLrpmtDaFEiUj1osRP4TI2MDz1AddJL+jZ7KSqvBuliN4xqYY54IfdN8qD8Toa6g1iloph1fxQNkjOxrrpQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@types/json-schema": "^7.0.15"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/eslintrc": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-3.3.3.tgz",
      "integrity": "sha512-Kr+LPIUVKz2qkx1HAMH8q1q6azbqBAsXJUxBl/ODDuVPX45Z9DfwB8tPjTi6nNZ8BuM3nbJxC5zCAg5elnBUTQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "^6.12.4",
        "debug": "^4.3.2",
        "espree": "^10.0.1",
        "globals": "^14.0.0",
        "ignore": "^5.2.0",
        "import-fresh": "^3.2.1",
        "js-yaml": "^4.1.1",
        "minimatch": "^3.1.2",
        "strip-json-comments": "^3.1.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint/eslintrc/node_modules/globals": {
      "version": "14.0.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-14.0.0.tgz",
      "integrity": "sha512-oahGvuMGQlPw/ivIYBjVSrWAfWLBeku5tpPE2fOPLi+WHffIWbuh2tCjhyQhTBPMf5E9jDEH4FOmTYgYwbKwtQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@eslint/js": {
      "version": "9.39.2",
      "resolved": "https://registry.npmjs.org/@eslint/js/-/js-9.39.2.tgz",
      "integrity": "sha512-q1mjIoW1VX4IvSocvM/vbTiveKC4k9eLrajNEuSsmjymSDEbpGddtpfOoN7YGAqBK3NG+uqo8ia4PDTt8buCYA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      }
    },
    "node_modules/@eslint/object-schema": {
      "version": "2.1.7",
      "resolved": "https://registry.npmjs.org/@eslint/object-schema/-/object-schema-2.1.7.tgz",
      "integrity": "sha512-VtAOaymWVfZcmZbp6E2mympDIHvyjXs/12LqWYjVw6qjrfF+VK+fyG33kChz3nnK+SU5/NeHOqrTEHS8sXO3OA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/plugin-kit": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/@eslint/plugin-kit/-/plugin-kit-0.4.1.tgz",
      "integrity": "sha512-43/qtrDUokr7LJqoF2c3+RInu/t4zfrpYdoSDfYyhg52rwLV6TnOvdG4fXm7IkSB3wErkcmJS9iEhjVtOSEjjA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/core": "^0.17.0",
        "levn": "^0.4.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@google/genai": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/@google/genai/-/genai-2.3.0.tgz",
      "integrity": "sha512-rXDhXUBj31gZafcwQFbXvt8jMrMxZoK7ECjQpk88UfA/OkZls3PtZDprT9lM3jjqRtwRjQoNLoPoNq6MlV8qLw==",
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "dependencies": {
        "google-auth-library": "^10.3.0",
        "p-retry": "^4.6.2",
        "protobufjs": "^7.5.4",
        "ws": "^8.18.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "@modelcontextprotocol/sdk": "^1.25.2"
      },
      "peerDependenciesMeta": {
        "@modelcontextprotocol/sdk": {
          "optional": true
        }
      }
    },
    "node_modules/@humanfs/core": {
      "version": "0.19.1",
      "resolved": "https://registry.npmjs.org/@humanfs/core/-/core-0.19.1.tgz",
      "integrity": "sha512-5DyQ4+1JEUzejeK1JGICcideyfUbGixgS9jNgex5nqkW+cY7WZhxBigmieN5Qnw9ZosSNVC9KQKyb+GUaGyKUA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanfs/node": {
      "version": "0.16.7",
      "resolved": "https://registry.npmjs.org/@humanfs/node/-/node-0.16.7.tgz",
      "integrity": "sha512-/zUx+yOsIrG4Y43Eh2peDeKCxlRt/gET6aHfaKpuq267qXdYDFViVHfMaLyygZOnl0kGWxFIgsBy8QFuTLUXEQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanfs/core": "^0.19.1",
        "@humanwhocodes/retry": "^0.4.0"
      },
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
      "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/retry": {
      "version": "0.4.3",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/retry/-/retry-0.4.3.tgz",
      "integrity": "sha512-bV0Tgo9K4hfPCek+aMAn81RppFKv2ySDQeMoSZuvTASywNTnVJCArCZE2FWqpvIatKu7VMRLWlR1EazvVhDyhQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@protobufjs/aspromise": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@protobufjs/aspromise/-/aspromise-1.1.2.tgz",
      "integrity": "sha512-j+gKExEuLmKwvz3OgROXtrJ2UG2x8Ch2YZUxahh+s1F2HZ+wAceUNLkvy6zKCPVRkU++ZWQrdxsUeQXmcg4uoQ==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@protobufjs/base64": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@protobufjs/base64/-/base64-1.1.2.tgz",
      "integrity": "sha512-AZkcAA5vnN/v4PDqKyMR5lx7hZttPDgClv83E//FMNhR2TMcLUhfRUBHCmSl0oi9zMgDDqRUJkSxO3wm85+XLg==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@protobufjs/codegen": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@protobufjs/codegen/-/codegen-2.0.5.tgz",
      "integrity": "sha512-zgXFLzW3Ap33e6d0Wlj4MGIm6Ce8O89n/apUaGNB/jx+hw+ruWEp7EwGUshdLKVRCxZW12fp9r40E1mQrf/34g==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@protobufjs/eventemitter": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@protobufjs/eventemitter/-/eventemitter-1.1.0.tgz",
      "integrity": "sha512-j9ednRT81vYJ9OfVuXG6ERSTdEL1xVsNgqpkxMsbIabzSo3goCjDIveeGv5d03om39ML71RdmrGNjG5SReBP/Q==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@protobufjs/fetch": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@protobufjs/fetch/-/fetch-1.1.0.tgz",
      "integrity": "sha512-lljVXpqXebpsijW71PZaCYeIcE5on1w5DlQy5WH6GLbFryLUrBD4932W/E2BSpfRJWseIL4v/KPgBFxDOIdKpQ==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "@protobufjs/aspromise": "^1.1.1",
        "@protobufjs/inquire": "^1.1.0"
      }
    },
    "node_modules/@protobufjs/float": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/@protobufjs/float/-/float-1.0.2.tgz",
      "integrity": "sha512-Ddb+kVXlXst9d+R9PfTIxh1EdNkgoRe5tOX6t01f1lYWOvJnSPDBlG241QLzcyPdoNTsblLUdujGSE4RzrTZGQ==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@protobufjs/inquire": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@protobufjs/inquire/-/inquire-1.1.1.tgz",
      "integrity": "sha512-mnzgDV26ueAvk7rsbt9L7bE0SuAoqyuys/sMMrmVcN5x9VsxpcG3rqAUSgDyLp0UZlmNfIbQ4fHfCtreVBk8Ew==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@protobufjs/path": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@protobufjs/path/-/path-1.1.2.tgz",
      "integrity": "sha512-6JOcJ5Tm08dOHAbdR3GrvP+yUUfkjG5ePsHYczMFLq3ZmMkAD98cDgcT2iA1lJ9NVwFd4tH/iSSoe44YWkltEA==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@protobufjs/pool": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@protobufjs/pool/-/pool-1.1.0.tgz",
      "integrity": "sha512-0kELaGSIDBKvcgS4zkjz1PeddatrjYcmMWOlAuAPwAeccUrPHdUqo/J6LiymHHEiJT5NrF1UVwxY14f+fy4WQw==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@protobufjs/utf8": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@protobufjs/utf8/-/utf8-1.1.1.tgz",
      "integrity": "sha512-oOAWABowe8EAbMyWKM0tYDKi8Yaox52D+HWZhAIJqQXbqe0xI/GV7FhLWqlEKreMkfDjshR5FKgi3mnle0h6Eg==",
      "license": "BSD-3-Clause"
    },
    "node_modules/@rolldown/pluginutils": {
      "version": "1.0.0-beta.53",
      "resolved": "https://registry.npmjs.org/@rolldown/pluginutils/-/pluginutils-1.0.0-beta.53.tgz",
      "integrity": "sha512-vENRlFU4YbrwVqNDZ7fLvy+JR1CRkyr01jhSiDpE1u6py3OMzQfztQU2jxykW3ALNxO4kSlqIDeYyD0Y9RcQeQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@rollup/rollup-android-arm-eabi": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.54.0.tgz",
      "integrity": "sha512-OywsdRHrFvCdvsewAInDKCNyR3laPA2mc9bRYJ6LBp5IyvF3fvXbbNR0bSzHlZVFtn6E0xw2oZlyjg4rKCVcng==",
      "cpu": [
        "arm"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-android-arm64": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.54.0.tgz",
      "integrity": "sha512-Skx39Uv+u7H224Af+bDgNinitlmHyQX1K/atIA32JP3JQw6hVODX5tkbi2zof/E69M1qH2UoN3Xdxgs90mmNYw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-darwin-arm64": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.54.0.tgz",
      "integrity": "sha512-k43D4qta/+6Fq+nCDhhv9yP2HdeKeP56QrUUTW7E6PhZP1US6NDqpJj4MY0jBHlJivVJD5P8NxrjuobZBJTCRw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-darwin-x64": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.54.0.tgz",
      "integrity": "sha512-cOo7biqwkpawslEfox5Vs8/qj83M/aZCSSNIWpVzfU2CYHa2G3P1UN5WF01RdTHSgCkri7XOlTdtk17BezlV3A==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-arm64": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.54.0.tgz",
      "integrity": "sha512-miSvuFkmvFbgJ1BevMa4CPCFt5MPGw094knM64W9I0giUIMMmRYcGW/JWZDriaw/k1kOBtsWh1z6nIFV1vPNtA==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-x64": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.54.0.tgz",
      "integrity": "sha512-KGXIs55+b/ZfZsq9aR026tmr/+7tq6VG6MsnrvF4H8VhwflTIuYh+LFUlIsRdQSgrgmtM3fVATzEAj4hBQlaqQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-gnueabihf": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.54.0.tgz",
      "integrity": "sha512-EHMUcDwhtdRGlXZsGSIuXSYwD5kOT9NVnx9sqzYiwAc91wfYOE1g1djOEDseZJKKqtHAHGwnGPQu3kytmfaXLQ==",
      "cpu": [
        "arm"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-musleabihf": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.54.0.tgz",
      "integrity": "sha512-+pBrqEjaakN2ySv5RVrj/qLytYhPKEUwk+e3SFU5jTLHIcAtqh2rLrd/OkbNuHJpsBgxsD8ccJt5ga/SeG0JmA==",
      "cpu": [
        "arm"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-gnu": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.54.0.tgz",
      "integrity": "sha512-NSqc7rE9wuUaRBsBp5ckQ5CVz5aIRKCwsoa6WMF7G01sX3/qHUw/z4pv+D+ahL1EIKy6Enpcnz1RY8pf7bjwng==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-musl": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.54.0.tgz",
      "integrity": "sha512-gr5vDbg3Bakga5kbdpqx81m2n9IX8M6gIMlQQIXiLTNeQW6CucvuInJ91EuCJ/JYvc+rcLLsDFcfAD1K7fMofg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-loong64-gnu": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loong64-gnu/-/rollup-linux-loong64-gnu-4.54.0.tgz",
      "integrity": "sha512-gsrtB1NA3ZYj2vq0Rzkylo9ylCtW/PhpLEivlgWe0bpgtX5+9j9EZa0wtZiCjgu6zmSeZWyI/e2YRX1URozpIw==",
      "cpu": [
        "loong64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-ppc64-gnu": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-ppc64-gnu/-/rollup-linux-ppc64-gnu-4.54.0.tgz",
      "integrity": "sha512-y3qNOfTBStmFNq+t4s7Tmc9hW2ENtPg8FeUD/VShI7rKxNW7O4fFeaYbMsd3tpFlIg1Q8IapFgy7Q9i2BqeBvA==",
      "cpu": [
        "ppc64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-gnu": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.54.0.tgz",
      "integrity": "sha512-89sepv7h2lIVPsFma8iwmccN7Yjjtgz0Rj/Ou6fEqg3HDhpCa+Et+YSufy27i6b0Wav69Qv4WBNl3Rs6pwhebQ==",
      "cpu": [
        "riscv64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-musl": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-musl/-/rollup-linux-riscv64-musl-4.54.0.tgz",
      "integrity": "sha512-ZcU77ieh0M2Q8Ur7D5X7KvK+UxbXeDHwiOt/CPSBTI1fBmeDMivW0dPkdqkT4rOgDjrDDBUed9x4EgraIKoR2A==",
      "cpu": [
        "riscv64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-s390x-gnu": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.54.0.tgz",
      "integrity": "sha512-2AdWy5RdDF5+4YfG/YesGDDtbyJlC9LHmL6rZw6FurBJ5n4vFGupsOBGfwMRjBYH7qRQowT8D/U4LoSvVwOhSQ==",
      "cpu": [
        "s390x"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-gnu": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.54.0.tgz",
      "integrity": "sha512-WGt5J8Ij/rvyqpFexxk3ffKqqbLf9AqrTBbWDk7ApGUzaIs6V+s2s84kAxklFwmMF/vBNGrVdYgbblCOFFezMQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-musl": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.54.0.tgz",
      "integrity": "sha512-JzQmb38ATzHjxlPHuTH6tE7ojnMKM2kYNzt44LO/jJi8BpceEC8QuXYA908n8r3CNuG/B3BV8VR3Hi1rYtmPiw==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-openharmony-arm64": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-openharmony-arm64/-/rollup-openharmony-arm64-4.54.0.tgz",
      "integrity": "sha512-huT3fd0iC7jigGh7n3q/+lfPcXxBi+om/Rs3yiFxjvSxbSB6aohDFXbWvlspaqjeOh+hx7DDHS+5Es5qRkWkZg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ]
    },
    "node_modules/@rollup/rollup-win32-arm64-msvc": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.54.0.tgz",
      "integrity": "sha512-c2V0W1bsKIKfbLMBu/WGBz6Yci8nJ/ZJdheE0EwB73N3MvHYKiKGs3mVilX4Gs70eGeDaMqEob25Tw2Gb9Nqyw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-ia32-msvc": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.54.0.tgz",
      "integrity": "sha512-woEHgqQqDCkAzrDhvDipnSirm5vxUXtSKDYTVpZG3nUdW/VVB5VdCYA2iReSj/u3yCZzXID4kuKG7OynPnB3WQ==",
      "cpu": [
        "ia32"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-gnu": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-gnu/-/rollup-win32-x64-gnu-4.54.0.tgz",
      "integrity": "sha512-dzAc53LOuFvHwbCEOS0rPbXp6SIhAf2txMP5p6mGyOXXw5mWY8NGGbPMPrs4P1WItkfApDathBj/NzMLUZ9rtQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-msvc": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.54.0.tgz",
      "integrity": "sha512-hYT5d3YNdSh3mbCU1gwQyPgQd3T2ne0A3KG8KSBdav5TiBg6eInVmV+TeR5uHufiIgSFg0XsOWGW5/RhNcSvPg==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@supabase/auth-js": {
      "version": "2.105.4",
      "resolved": "https://registry.npmjs.org/@supabase/auth-js/-/auth-js-2.105.4.tgz",
      "integrity": "sha512-Ejfa37M5xoIwoxVebxRahnwubPo8g22qkXQ4p50+N9MIvU9UZoN+A8dwVPtczzGf8oV/YXN80ZPxK4aWXuSN/A==",
      "license": "MIT",
      "dependencies": {
        "tslib": "2.8.1"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@supabase/functions-js": {
      "version": "2.105.4",
      "resolved": "https://registry.npmjs.org/@supabase/functions-js/-/functions-js-2.105.4.tgz",
      "integrity": "sha512-JVNKbBft3Qkja+WlGaE026AJ2AH9K0UTsxsfvEIHgd4zFrBor4BYRCrYFrv9IDsvVqkF72wKDsODJl5GY/C4tA==",
      "license": "MIT",
      "dependencies": {
        "tslib": "2.8.1"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@supabase/phoenix": {
      "version": "0.4.2",
      "resolved": "https://registry.npmjs.org/@supabase/phoenix/-/phoenix-0.4.2.tgz",
      "integrity": "sha512-YSAGnmDAfuleFCVt3CeurQZAhxRfXWeZIIkwp7NhYzQ1UwW6ePSnzsFAiUm/mbCkfoCf70QQHKW/K6RKh52a4A==",
      "license": "MIT"
    },
    "node_modules/@supabase/postgrest-js": {
      "version": "2.105.4",
      "resolved": "https://registry.npmjs.org/@supabase/postgrest-js/-/postgrest-js-2.105.4.tgz",
      "integrity": "sha512-SppIyLo/kTwIlz1qpv2HN1EQqBg0GVktrDDFsXygYROha3MgVn4rT7p5EjFHFqXQm2rdRGb/BI7bc+jr10m91w==",
      "license": "MIT",
      "dependencies": {
        "tslib": "2.8.1"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@supabase/realtime-js": {
      "version": "2.105.4",
      "resolved": "https://registry.npmjs.org/@supabase/realtime-js/-/realtime-js-2.105.4.tgz",
      "integrity": "sha512-6ov6c59+8D9h7q4M4Gy/uDJlC0Akxl9/714Y+6vJ+Sijuc16TS/p5DwhfRCLNcIhNiej1gEt+CQUwsjiPt4PxQ==",
      "license": "MIT",
      "dependencies": {
        "@supabase/phoenix": "^0.4.2",
        "tslib": "2.8.1"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@supabase/storage-js": {
      "version": "2.105.4",
      "resolved": "https://registry.npmjs.org/@supabase/storage-js/-/storage-js-2.105.4.tgz",
      "integrity": "sha512-Jx+pzMP1Whjof2PWHoVBUA75/p7PQE9CqKBzn1oXVyJDOggMLSH2OzVWwsXYaxEpdC1K/KltwmOX44nL3LHl9g==",
      "license": "MIT",
      "dependencies": {
        "iceberg-js": "^0.8.1",
        "tslib": "2.8.1"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@supabase/supabase-js": {
      "version": "2.105.4",
      "resolved": "https://registry.npmjs.org/@supabase/supabase-js/-/supabase-js-2.105.4.tgz",
      "integrity": "sha512-cEnx+k49knU+qdIP7rXwR6fqEXPHZs+74xFK1R0S8MgQ7v9tbePVdGxvO03n3bPympMdJWVLadARBfU4TgNHCQ==",
      "license": "MIT",
      "dependencies": {
        "@supabase/auth-js": "2.105.4",
        "@supabase/functions-js": "2.105.4",
        "@supabase/postgrest-js": "2.105.4",
        "@supabase/realtime-js": "2.105.4",
        "@supabase/storage-js": "2.105.4"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@tailwindcss/node": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/node/-/node-4.1.18.tgz",
      "integrity": "sha512-DoR7U1P7iYhw16qJ49fgXUlry1t4CpXeErJHnQ44JgTSKMaZUdf17cfn5mHchfJ4KRBZRFA/Coo+MUF5+gOaCQ==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/remapping": "^2.3.4",
        "enhanced-resolve": "^5.18.3",
        "jiti": "^2.6.1",
        "lightningcss": "1.30.2",
        "magic-string": "^0.30.21",
        "source-map-js": "^1.2.1",
        "tailwindcss": "4.1.18"
      }
    },
    "node_modules/@tailwindcss/oxide": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide/-/oxide-4.1.18.tgz",
      "integrity": "sha512-EgCR5tTS5bUSKQgzeMClT6iCY3ToqE1y+ZB0AKldj809QXk1Y+3jB0upOYZrn9aGIzPtUsP7sX4QQ4XtjBB95A==",
      "license": "MIT",
      "engines": {
        "node": ">= 10"
      },
      "optionalDependencies": {
        "@tailwindcss/oxide-android-arm64": "4.1.18",
        "@tailwindcss/oxide-darwin-arm64": "4.1.18",
        "@tailwindcss/oxide-darwin-x64": "4.1.18",
        "@tailwindcss/oxide-freebsd-x64": "4.1.18",
        "@tailwindcss/oxide-linux-arm-gnueabihf": "4.1.18",
        "@tailwindcss/oxide-linux-arm64-gnu": "4.1.18",
        "@tailwindcss/oxide-linux-arm64-musl": "4.1.18",
        "@tailwindcss/oxide-linux-x64-gnu": "4.1.18",
        "@tailwindcss/oxide-linux-x64-musl": "4.1.18",
        "@tailwindcss/oxide-wasm32-wasi": "4.1.18",
        "@tailwindcss/oxide-win32-arm64-msvc": "4.1.18",
        "@tailwindcss/oxide-win32-x64-msvc": "4.1.18"
      }
    },
    "node_modules/@tailwindcss/oxide-android-arm64": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-android-arm64/-/oxide-android-arm64-4.1.18.tgz",
      "integrity": "sha512-dJHz7+Ugr9U/diKJA0W6N/6/cjI+ZTAoxPf9Iz9BFRF2GzEX8IvXxFIi/dZBloVJX/MZGvRuFA9rqwdiIEZQ0Q==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-arm64": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-arm64/-/oxide-darwin-arm64-4.1.18.tgz",
      "integrity": "sha512-Gc2q4Qhs660bhjyBSKgq6BYvwDz4G+BuyJ5H1xfhmDR3D8HnHCmT/BSkvSL0vQLy/nkMLY20PQ2OoYMO15Jd0A==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-x64": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-x64/-/oxide-darwin-x64-4.1.18.tgz",
      "integrity": "sha512-FL5oxr2xQsFrc3X9o1fjHKBYBMD1QZNyc1Xzw/h5Qu4XnEBi3dZn96HcHm41c/euGV+GRiXFfh2hUCyKi/e+yw==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-freebsd-x64": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-freebsd-x64/-/oxide-freebsd-x64-4.1.18.tgz",
      "integrity": "sha512-Fj+RHgu5bDodmV1dM9yAxlfJwkkWvLiRjbhuO2LEtwtlYlBgiAT4x/j5wQr1tC3SANAgD+0YcmWVrj8R9trVMA==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm-gnueabihf": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm-gnueabihf/-/oxide-linux-arm-gnueabihf-4.1.18.tgz",
      "integrity": "sha512-Fp+Wzk/Ws4dZn+LV2Nqx3IilnhH51YZoRaYHQsVq3RQvEl+71VGKFpkfHrLM/Li+kt5c0DJe/bHXK1eHgDmdiA==",
      "cpu": [
        "arm"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-gnu": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-gnu/-/oxide-linux-arm64-gnu-4.1.18.tgz",
      "integrity": "sha512-S0n3jboLysNbh55Vrt7pk9wgpyTTPD0fdQeh7wQfMqLPM/Hrxi+dVsLsPrycQjGKEQk85Kgbx+6+QnYNiHalnw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-musl": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-musl/-/oxide-linux-arm64-musl-4.1.18.tgz",
      "integrity": "sha512-1px92582HkPQlaaCkdRcio71p8bc8i/ap5807tPRDK/uw953cauQBT8c5tVGkOwrHMfc2Yh6UuxaH4vtTjGvHg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-gnu": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-gnu/-/oxide-linux-x64-gnu-4.1.18.tgz",
      "integrity": "sha512-v3gyT0ivkfBLoZGF9LyHmts0Isc8jHZyVcbzio6Wpzifg/+5ZJpDiRiUhDLkcr7f/r38SWNe7ucxmGW3j3Kb/g==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-musl": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-musl/-/oxide-linux-x64-musl-4.1.18.tgz",
      "integrity": "sha512-bhJ2y2OQNlcRwwgOAGMY0xTFStt4/wyU6pvI6LSuZpRgKQwxTec0/3Scu91O8ir7qCR3AuepQKLU/kX99FouqQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-wasm32-wasi/-/oxide-wasm32-wasi-4.1.18.tgz",
      "integrity": "sha512-LffYTvPjODiP6PT16oNeUQJzNVyJl1cjIebq/rWWBF+3eDst5JGEFSc5cWxyRCJ0Mxl+KyIkqRxk1XPEs9x8TA==",
      "bundleDependencies": [
        "@napi-rs/wasm-runtime",
        "@emnapi/core",
        "@emnapi/runtime",
        "@tybys/wasm-util",
        "@emnapi/wasi-threads",
        "tslib"
      ],
      "cpu": [
        "wasm32"
      ],
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.7.1",
        "@emnapi/runtime": "^1.7.1",
        "@emnapi/wasi-threads": "^1.1.0",
        "@napi-rs/wasm-runtime": "^1.1.0",
        "@tybys/wasm-util": "^0.10.1",
        "tslib": "^2.4.0"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-arm64-msvc": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-arm64-msvc/-/oxide-win32-arm64-msvc-4.1.18.tgz",
      "integrity": "sha512-HjSA7mr9HmC8fu6bdsZvZ+dhjyGCLdotjVOgLA2vEqxEBZaQo9YTX4kwgEvPCpRh8o4uWc4J/wEoFzhEmjvPbA==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-x64-msvc": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-x64-msvc/-/oxide-win32-x64-msvc-4.1.18.tgz",
      "integrity": "sha512-bJWbyYpUlqamC8dpR7pfjA0I7vdF6t5VpUGMWRkXVE3AXgIZjYUYAK7II1GNaxR8J1SSrSrppRar8G++JekE3Q==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/vite": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/vite/-/vite-4.1.18.tgz",
      "integrity": "sha512-jVA+/UpKL1vRLg6Hkao5jldawNmRo7mQYrZtNHMIVpLfLhDml5nMRUo/8MwoX2vNXvnaXNNMedrMfMugAVX1nA==",
      "license": "MIT",
      "dependencies": {
        "@tailwindcss/node": "4.1.18",
        "@tailwindcss/oxide": "4.1.18",
        "tailwindcss": "4.1.18"
      },
      "peerDependencies": {
        "vite": "^5.2.0 || ^6 || ^7"
      }
    },
    "node_modules/@tanstack/query-core": {
      "version": "5.100.11",
      "resolved": "https://registry.npmjs.org/@tanstack/query-core/-/query-core-5.100.11.tgz",
      "integrity": "sha512-lmE0994apShXPj8CUxgx4ch5yUJhE9k/+tVwihBvPOyerACWdBocfFg24t8+0RhtlTd7tEgchDkhlCxNssvDxw==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      }
    },
    "node_modules/@tanstack/react-query": {
      "version": "5.100.11",
      "resolved": "https://registry.npmjs.org/@tanstack/react-query/-/react-query-5.100.11.tgz",
      "integrity": "sha512-J0f9s5x3LE1450nNNfYx+e/n0DMa0uOBdFJUy5r0RvmsXd4nB/n0rbHtHI1vYXhikNFan+wf51p6Tmp4c8ucrg==",
      "license": "MIT",
      "dependencies": {
        "@tanstack/query-core": "5.100.11"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      },
      "peerDependencies": {
        "react": "^18 || ^19"
      }
    },
    "node_modules/@types/babel__core": {
      "version": "7.20.5",
      "resolved": "https://registry.npmjs.org/@types/babel__core/-/babel__core-7.20.5.tgz",
      "integrity": "sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.20.7",
        "@babel/types": "^7.20.7",
        "@types/babel__generator": "*",
        "@types/babel__template": "*",
        "@types/babel__traverse": "*"
      }
    },
    "node_modules/@types/babel__generator": {
      "version": "7.27.0",
      "resolved": "https://registry.npmjs.org/@types/babel__generator/-/babel__generator-7.27.0.tgz",
      "integrity": "sha512-ufFd2Xi92OAVPYsy+P4n7/U7e68fex0+Ee8gSG9KX7eo084CWiQ4sdxktvdl0bOPupXtVJPY19zk6EwWqUQ8lg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__template": {
      "version": "7.4.4",
      "resolved": "https://registry.npmjs.org/@types/babel__template/-/babel__template-7.4.4.tgz",
      "integrity": "sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.1.0",
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__traverse": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.28.0.tgz",
      "integrity": "sha512-8PvcXf70gTDZBgt9ptxJ8elBeBjcLOAcOtoO/mPJjtji1+CdGbHgm77om1GrsPxsiE+uXIpNSK64UYaIwQXd4Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.28.2"
      }
    },
    "node_modules/@types/estree": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.8.tgz",
      "integrity": "sha512-dWHzHa2WqEXI/O1E9OjrocMTKJl2mSrEolh1Iomrv6U+JuNwaHXsXx9bLu5gG7BUWFIN0skIQJQ/L1rIex4X6w==",
      "license": "MIT"
    },
    "node_modules/@types/json-schema": {
      "version": "7.0.15",
      "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
      "integrity": "sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "25.8.0",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-25.8.0.tgz",
      "integrity": "sha512-TCFSk8IZh+iLX1xtksoBVtdmgL+1IX0fC9BeU4QqFSuNdN/K+HUlhqOzEmSYYpZUVsLYcPqc9KX+60iDuninSQ==",
      "license": "MIT",
      "dependencies": {
        "undici-types": ">=7.24.0 <7.24.7"
      }
    },
    "node_modules/@types/react": {
      "version": "19.2.7",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.2.7.tgz",
      "integrity": "sha512-MWtvHrGZLFttgeEj28VXHxpmwYbor/ATPYbBfSFZEIRK0ecCFLl2Qo55z52Hss+UV9CRN7trSeq1zbgx7YDWWg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "19.2.3",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.2.3.tgz",
      "integrity": "sha512-jp2L/eY6fn+KgVVQAOqYItbF0VY/YApe5Mz2F0aykSO8gx31bYCZyvSeYxCHKvzHG5eZjc+zyaS5BrBWya2+kQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^19.2.0"
      }
    },
    "node_modules/@types/retry": {
      "version": "0.12.0",
      "resolved": "https://registry.npmjs.org/@types/retry/-/retry-0.12.0.tgz",
      "integrity": "sha512-wWKOClTTiizcZhXnPY4wikVAwmdYHp8q6DmC+EJUzAMsycb7HB32Kh9RN4+0gExjmPmZSAQjgURXIGATPegAvA==",
      "license": "MIT"
    },
    "node_modules/@vitejs/plugin-react": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-5.1.2.tgz",
      "integrity": "sha512-EcA07pHJouywpzsoTUqNh5NwGayl2PPVEJKUSinGGSxFGYn+shYbqMGBg6FXDqgXum9Ou/ecb+411ssw8HImJQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.28.5",
        "@babel/plugin-transform-react-jsx-self": "^7.27.1",
        "@babel/plugin-transform-react-jsx-source": "^7.27.1",
        "@rolldown/pluginutils": "1.0.0-beta.53",
        "@types/babel__core": "^7.20.5",
        "react-refresh": "^0.18.0"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "peerDependencies": {
        "vite": "^4.2.0 || ^5.0.0 || ^6.0.0 || ^7.0.0"
      }
    },
    "node_modules/acorn": {
      "version": "8.15.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.15.0.tgz",
      "integrity": "sha512-NZyJarBfL7nWwIq+FDL6Zp/yHEhePMNnnJ0y3qfieCrmNvYct8uvtiV41UvlSe6apAfk0fY1FbWx+NwfmpvtTg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/agent-base": {
      "version": "7.1.4",
      "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-7.1.4.tgz",
      "integrity": "sha512-MnA+YT8fwfJPgBx3m60MNqakm30XOkyIoH1y6huTQvC0PwZG7ki8NacLBcrPbNoo8vEZy7Jpuk7+jMO+CUovTQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/ajv": {
      "version": "6.12.6",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
      "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
      "dev": true,
      "license": "Python-2.0"
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/base64-js": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
      "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.9.11",
      "resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.9.11.tgz",
      "integrity": "sha512-Sg0xJUNDU1sJNGdfGWhVHX0kkZ+HWcvmVymJbj6NSgZZmW/8S9Y2HQ5euytnIgakgxN6papOAWiwDo1ctFDcoQ==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "baseline-browser-mapping": "dist/cli.js"
      }
    },
    "node_modules/bignumber.js": {
      "version": "9.3.1",
      "resolved": "https://registry.npmjs.org/bignumber.js/-/bignumber.js-9.3.1.tgz",
      "integrity": "sha512-Ko0uX15oIUS7wJ3Rb30Fs6SkVbLmPBAKdlm7q9+ak9bbIeFf0MwuBsQV6z7+X768/cHsfg+WlysDWJcmthjsjQ==",
      "license": "MIT",
      "engines": {
        "node": "*"
      }
    },
    "node_modules/brace-expansion": {
      "version": "1.1.12",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.12.tgz",
      "integrity": "sha512-9T9UjW3r0UW5c1Q7GTwllptXwhvYmEzFhzMfZ9H7FQWt+uZePjZPjBP/W1ZEyZ1twGWom5/56TF4lPcqjnDHcg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/browserslist": {
      "version": "4.28.1",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.28.1.tgz",
      "integrity": "sha512-ZC5Bd0LgJXgwGqUknZY/vkUQ04r8NXnJZ3yYi4vDmSiZmC/pdSN0NbNRPxZpbtO4uAfDUAFffO8IZoM3Gj8IkA==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "baseline-browser-mapping": "^2.9.0",
        "caniuse-lite": "^1.0.30001759",
        "electron-to-chromium": "^1.5.263",
        "node-releases": "^2.0.27",
        "update-browserslist-db": "^1.2.0"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/buffer-equal-constant-time": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/buffer-equal-constant-time/-/buffer-equal-constant-time-1.0.1.tgz",
      "integrity": "sha512-zRpUiDwd/xk6ADqPMATG8vc9VPrkck7T07OIx0gnjmJAnHnTVXNQG3vfvWNuiZIkwu9KrKdA1iJKfsfTVxE6NA==",
      "license": "BSD-3-Clause"
    },
    "node_modules/callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001761",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001761.tgz",
      "integrity": "sha512-JF9ptu1vP2coz98+5051jZ4PwQgd2ni8A+gYSN7EA7dPKIMf0pDlSUxhdmVOaV3/fYK5uWBkgSXJaRLr4+3A6g==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/convert-source-map": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
      "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cookie": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-1.1.1.tgz",
      "integrity": "sha512-ei8Aos7ja0weRpFzJnEA9UHJ/7XQmqglbRwnf2ATjcB9Wq874VKH9kfjjirM6UhU2/E5fFYadylyhFldcqSidQ==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "license": "MIT"
    },
    "node_modules/data-uri-to-buffer": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/data-uri-to-buffer/-/data-uri-to-buffer-4.0.1.tgz",
      "integrity": "sha512-0R9ikRb668HB7QDxT1vkpuUBtqc53YyAwMwGeUFKRojY/NWKvdZ+9UYtRfGmhqNbRkTSVpMbmyhXipFFv2cb/A==",
      "license": "MIT",
      "engines": {
        "node": ">= 12"
      }
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ecdsa-sig-formatter": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/ecdsa-sig-formatter/-/ecdsa-sig-formatter-1.0.11.tgz",
      "integrity": "sha512-nagl3RYrbNv6kQkeJIpt6NJZy8twLB/2vtz6yN9Z4vRKHN4/QZJIEbqohALSgwKdnksuY3k5Addp5lg8sVoVcQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.267",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.267.tgz",
      "integrity": "sha512-0Drusm6MVRXSOJpGbaSVgcQsuB4hEkMpHXaVstcPmhu5LIedxs1xNK/nIxmQIU/RPC0+1/o0AVZfBTkTNJOdUw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/enhanced-resolve": {
      "version": "5.18.4",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.18.4.tgz",
      "integrity": "sha512-LgQMM4WXU3QI+SYgEc2liRgznaD5ojbmY3sb8LxyguVkIg5FxdpTkvk72te2R38/TGKxH634oLxXRGY6d7AP+Q==",
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.2.0"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/esbuild": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.27.2.tgz",
      "integrity": "sha512-HyNQImnsOC7X9PMNaCIeAm4ISCQXs5a5YasTXVliKv4uuBo1dKrG0A+uQS8M5eXjVMnLg3WgXaKvprHlFJQffw==",
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=18"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.27.2",
        "@esbuild/android-arm": "0.27.2",
        "@esbuild/android-arm64": "0.27.2",
        "@esbuild/android-x64": "0.27.2",
        "@esbuild/darwin-arm64": "0.27.2",
        "@esbuild/darwin-x64": "0.27.2",
        "@esbuild/freebsd-arm64": "0.27.2",
        "@esbuild/freebsd-x64": "0.27.2",
        "@esbuild/linux-arm": "0.27.2",
        "@esbuild/linux-arm64": "0.27.2",
        "@esbuild/linux-ia32": "0.27.2",
        "@esbuild/linux-loong64": "0.27.2",
        "@esbuild/linux-mips64el": "0.27.2",
        "@esbuild/linux-ppc64": "0.27.2",
        "@esbuild/linux-riscv64": "0.27.2",
        "@esbuild/linux-s390x": "0.27.2",
        "@esbuild/linux-x64": "0.27.2",
        "@esbuild/netbsd-arm64": "0.27.2",
        "@esbuild/netbsd-x64": "0.27.2",
        "@esbuild/openbsd-arm64": "0.27.2",
        "@esbuild/openbsd-x64": "0.27.2",
        "@esbuild/openharmony-arm64": "0.27.2",
        "@esbuild/sunos-x64": "0.27.2",
        "@esbuild/win32-arm64": "0.27.2",
        "@esbuild/win32-ia32": "0.27.2",
        "@esbuild/win32-x64": "0.27.2"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint": {
      "version": "9.39.2",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-9.39.2.tgz",
      "integrity": "sha512-LEyamqS7W5HB3ujJyvi0HQK/dtVINZvd5mAAp9eT5S/ujByGjiZLCzPcHVzuXbpJDJF/cxwHlfceVUDZ2lnSTw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.8.0",
        "@eslint-community/regexpp": "^4.12.1",
        "@eslint/config-array": "^0.21.1",
        "@eslint/config-helpers": "^0.4.2",
        "@eslint/core": "^0.17.0",
        "@eslint/eslintrc": "^3.3.1",
        "@eslint/js": "9.39.2",
        "@eslint/plugin-kit": "^0.4.1",
        "@humanfs/node": "^0.16.6",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@humanwhocodes/retry": "^0.4.2",
        "@types/estree": "^1.0.6",
        "ajv": "^6.12.4",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.6",
        "debug": "^4.3.2",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^8.4.0",
        "eslint-visitor-keys": "^4.2.1",
        "espree": "^10.4.0",
        "esquery": "^1.5.0",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^8.0.0",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "ignore": "^5.2.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "lodash.merge": "^4.6.2",
        "minimatch": "^3.1.2",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.3"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      },
      "peerDependencies": {
        "jiti": "*"
      },
      "peerDependenciesMeta": {
        "jiti": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-plugin-react-hooks": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react-hooks/-/eslint-plugin-react-hooks-7.0.1.tgz",
      "integrity": "sha512-O0d0m04evaNzEPoSW+59Mezf8Qt0InfgGIBJnpC0h3NH/WjUAR7BIKUfysC6todmtiZ/A0oUVS8Gce0WhBrHsA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.24.4",
        "@babel/parser": "^7.24.4",
        "hermes-parser": "^0.25.1",
        "zod": "^3.25.0 || ^4.0.0",
        "zod-validation-error": "^3.5.0 || ^4.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "eslint": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0 || ^9.0.0"
      }
    },
    "node_modules/eslint-plugin-react-refresh": {
      "version": "0.4.26",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react-refresh/-/eslint-plugin-react-refresh-0.4.26.tgz",
      "integrity": "sha512-1RETEylht2O6FM/MvgnyvT+8K21wLqDNg4qD51Zj3guhjt433XbnnkVttHMyaVyAFD03QSV4LPS5iE3VQmO7XQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "eslint": ">=8.40"
      }
    },
    "node_modules/eslint-scope": {
      "version": "8.4.0",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-8.4.0.tgz",
      "integrity": "sha512-sNXOfKCn74rt8RICKMvJS7XKV/Xk9kA7DyJr8mJik3S7Cwgy3qlkkmyS2uQB3jiJg6VNdZd/pDBJu0nvG2NlTg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-4.2.1.tgz",
      "integrity": "sha512-Uhdk5sfqcee/9H/rCOJikYz67o0a2Tw2hGRPOG2Y1R2dg7brRe1uG0yaNQDHu+TO/uQPF/5eCapvYSmHUjt7JQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/espree": {
      "version": "10.4.0",
      "resolved": "https://registry.npmjs.org/espree/-/espree-10.4.0.tgz",
      "integrity": "sha512-j6PAQ2uUr79PZhBjP5C5fhl8e39FmRnOjsD5lGnWrFU8i2G776tBK7+nP8KuQUTTyAZUwfQqXAgrVH5MbH9CYQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "acorn": "^8.15.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^4.2.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esquery": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.6.0.tgz",
      "integrity": "sha512-ca9pw9fomFcKPvFLXhBKUK90ZvGibiGOvRJNbjljY7s7uq/5YO4BOzcYtJqExdx99rF6aAcnRxHmcUHcz6sQsg==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extend": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
      "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==",
      "license": "MIT"
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/fetch-blob": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/fetch-blob/-/fetch-blob-3.2.0.tgz",
      "integrity": "sha512-7yAQpD2UMJzLi1Dqv7qFYnPbaPx7ZfFK6PiIxQ4PfkGPyNyl2Ugx+a/umUonmKqjhM4DnfbMvdX6otXq83soQQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/jimmywarting"
        },
        {
          "type": "paypal",
          "url": "https://paypal.me/jimmywarting"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "node-domexception": "^1.0.0",
        "web-streams-polyfill": "^3.0.3"
      },
      "engines": {
        "node": "^12.20 || >= 14.13"
      }
    },
    "node_modules/file-entry-cache": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-8.0.0.tgz",
      "integrity": "sha512-XXTUwCvisa5oacNGRP9SfNtYBNAMi+RPwBFmblZEF7N7swHYQS6/Zfk7SRwx4D5j3CH211YNRco1DEMNVfZCnQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flat-cache": "^4.0.0"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat-cache": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-4.0.1.tgz",
      "integrity": "sha512-f7ccFPK3SXFHpx15UIGyRJ/FJQctuKZ0zVuN3frBo4HnK3cay9VEW0R6yPYFHC0AgqhukPzKjq22t5DmAyqGyw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flatted": "^3.2.9",
        "keyv": "^4.5.4"
      },
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/flatted": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.3.3.tgz",
      "integrity": "sha512-GX+ysw4PBCz0PzosHDepZGANEuFCMLrnRTiEy9McGjmkCQYwRq4A/X786G/fjM/+OjsWSU1ZrY5qyARZmO/uwg==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/formdata-polyfill": {
      "version": "4.0.10",
      "resolved": "https://registry.npmjs.org/formdata-polyfill/-/formdata-polyfill-4.0.10.tgz",
      "integrity": "sha512-buewHzMvYL29jdeQTVILecSaZKnt/RJWjoZCF5OW60Z67/GmSLBkOFM7qh1PI3zFNtJbaZL5eQu1vLfazOwj4g==",
      "license": "MIT",
      "dependencies": {
        "fetch-blob": "^3.1.2"
      },
      "engines": {
        "node": ">=12.20.0"
      }
    },
    "node_modules/framer-motion": {
      "version": "12.39.0",
      "resolved": "https://registry.npmjs.org/framer-motion/-/framer-motion-12.39.0.tgz",
      "integrity": "sha512-+vnLfzrv0MzjLzNl+nvNvR7jdg3q4cxxjz/YvzfifHl0TREtL00cs1RoMTxs+1PzLiEqZGV6gYsBY0oEAYZ24w==",
      "license": "MIT",
      "dependencies": {
        "motion-dom": "^12.39.0",
        "motion-utils": "^12.39.0",
        "tslib": "^2.4.0"
      },
      "peerDependencies": {
        "@emotion/is-prop-valid": "*",
        "react": "^18.0.0 || ^19.0.0",
        "react-dom": "^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@emotion/is-prop-valid": {
          "optional": true
        },
        "react": {
          "optional": true
        },
        "react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/gaxios": {
      "version": "7.1.4",
      "resolved": "https://registry.npmjs.org/gaxios/-/gaxios-7.1.4.tgz",
      "integrity": "sha512-bTIgTsM2bWn3XklZISBTQX7ZSddGW+IO3bMdGaemHZ3tbqExMENHLx6kKZ/KlejgrMtj8q7wBItt51yegqalrA==",
      "license": "Apache-2.0",
      "dependencies": {
        "extend": "^3.0.2",
        "https-proxy-agent": "^7.0.1",
        "node-fetch": "^3.3.2"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/gcp-metadata": {
      "version": "8.1.2",
      "resolved": "https://registry.npmjs.org/gcp-metadata/-/gcp-metadata-8.1.2.tgz",
      "integrity": "sha512-zV/5HKTfCeKWnxG0Dmrw51hEWFGfcF2xiXqcA3+J90WDuP0SvoiSO5ORvcBsifmx/FoIjgQN3oNOGaQ5PhLFkg==",
      "license": "Apache-2.0",
      "dependencies": {
        "gaxios": "^7.0.0",
        "google-logging-utils": "^1.0.0",
        "json-bigint": "^1.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/globals": {
      "version": "16.5.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-16.5.0.tgz",
      "integrity": "sha512-c/c15i26VrJ4IRt5Z89DnIzCGDn9EcebibhAOjw5ibqEHsE1wLUgkPn9RDmNcUKyU87GeaL633nyJ+pplFR2ZQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/goober": {
      "version": "2.1.19",
      "resolved": "https://registry.npmjs.org/goober/-/goober-2.1.19.tgz",
      "integrity": "sha512-U7veizMqxyKlM58+Z5j2ngJBH/r9siDmxpvNxSw0PylF6WQvrASJEZrxh1hidRBJc2jqoBVSyOban5u8m+6Rxg==",
      "license": "MIT",
      "peerDependencies": {
        "csstype": "^3.0.10"
      }
    },
    "node_modules/google-auth-library": {
      "version": "10.6.2",
      "resolved": "https://registry.npmjs.org/google-auth-library/-/google-auth-library-10.6.2.tgz",
      "integrity": "sha512-e27Z6EThmVNNvtYASwQxose/G57rkRuaRbQyxM2bvYLLX/GqWZ5chWq2EBoUchJbCc57eC9ArzO5wMsEmWftCw==",
      "license": "Apache-2.0",
      "dependencies": {
        "base64-js": "^1.3.0",
        "ecdsa-sig-formatter": "^1.0.11",
        "gaxios": "^7.1.4",
        "gcp-metadata": "8.1.2",
        "google-logging-utils": "1.1.3",
        "jws": "^4.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/google-logging-utils": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/google-logging-utils/-/google-logging-utils-1.1.3.tgz",
      "integrity": "sha512-eAmLkjDjAFCVXg7A1unxHsLf961m6y17QFqXqAXGj/gVkKFrEICfStRfwUlGNfeCEjNRa32JEWOUTlYXPyyKvA==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "license": "ISC"
    },
    "node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/hermes-estree": {
      "version": "0.25.1",
      "resolved": "https://registry.npmjs.org/hermes-estree/-/hermes-estree-0.25.1.tgz",
      "integrity": "sha512-0wUoCcLp+5Ev5pDW2OriHC2MJCbwLwuRx+gAqMTOkGKJJiBCLjtrvy4PWUGn6MIVefecRpzoOZ/UV6iGdOr+Cw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/hermes-parser": {
      "version": "0.25.1",
      "resolved": "https://registry.npmjs.org/hermes-parser/-/hermes-parser-0.25.1.tgz",
      "integrity": "sha512-6pEjquH3rqaI6cYAXYPcz9MS4rY6R4ngRgrgfDshRptUZIc3lw0MCIJIGDj9++mfySOuPTHB4nrSW99BCvOPIA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hermes-estree": "0.25.1"
      }
    },
    "node_modules/https-proxy-agent": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-7.0.6.tgz",
      "integrity": "sha512-vK9P5/iUfdl95AI+JVyUuIcVtd4ofvtrOr3HNtM2yxC9bnMbEdp3x01OhQNnjb8IJYi38VlTE3mBXwcfvywuSw==",
      "license": "MIT",
      "dependencies": {
        "agent-base": "^7.1.2",
        "debug": "4"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/iceberg-js": {
      "version": "0.8.1",
      "resolved": "https://registry.npmjs.org/iceberg-js/-/iceberg-js-0.8.1.tgz",
      "integrity": "sha512-1dhVQZXhcHje7798IVM+xoo/1ZdVfzOMIc8/rgVSijRK38EDqOJoGula9N/8ZI5RD8QTxNQtK/Gozpr+qUqRRA==",
      "license": "MIT",
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
      "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/import-fresh": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.1.tgz",
      "integrity": "sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/jiti": {
      "version": "2.6.1",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-2.6.1.tgz",
      "integrity": "sha512-ekilCSN1jwRvIbgeg/57YFh8qQDNbwDb9xT/qu2DAHbFFZUicIl4ygVaAvzveMhMVr3LnpSKTNnwt8PoOfmKhQ==",
      "license": "MIT",
      "bin": {
        "jiti": "lib/jiti-cli.mjs"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/js-yaml": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.1.tgz",
      "integrity": "sha512-qQKT4zQxXl8lLwBtHMWwaTcGfFOZviOJet3Oy/xmGk2gZH677CJM9EvtfdSkgWcATZhj/55JZ0rmy3myCT5lsA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/jsesc": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.1.0.tgz",
      "integrity": "sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/json-bigint": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/json-bigint/-/json-bigint-1.0.0.tgz",
      "integrity": "sha512-SiPv/8VpZuWbvLSMtTDU8hEfrZWg/mH/nV/b4o0CYbSxu1UIQPLdwKOCIyLQX+VIPO5vrLX3i8qtqFyhdPSUSQ==",
      "license": "MIT",
      "dependencies": {
        "bignumber.js": "^9.0.0"
      }
    },
    "node_modules/json-buffer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
      "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json5": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
      "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/jwa": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/jwa/-/jwa-2.0.1.tgz",
      "integrity": "sha512-hRF04fqJIP8Abbkq5NKGN0Bbr3JxlQ+qhZufXVr0DvujKy93ZCbXZMHDL4EOtodSbCWxOqR8MS1tXA5hwqCXDg==",
      "license": "MIT",
      "dependencies": {
        "buffer-equal-constant-time": "^1.0.1",
        "ecdsa-sig-formatter": "1.0.11",
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/jws": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/jws/-/jws-4.0.1.tgz",
      "integrity": "sha512-EKI/M/yqPncGUUh44xz0PxSidXFr/+r0pA70+gIYhjv+et7yxM+s29Y+VGDkovRofQem0fs7Uvf4+YmAdyRduA==",
      "license": "MIT",
      "dependencies": {
        "jwa": "^2.0.1",
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/keyv": {
      "version": "4.5.4",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
      "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "json-buffer": "3.0.1"
      }
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/lightningcss": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.30.2.tgz",
      "integrity": "sha512-utfs7Pr5uJyyvDETitgsaqSyjCb2qNRAtuqUeWIAKztsOYdcACf2KtARYXg2pSvhkt+9NfoaNY7fxjl6nuMjIQ==",
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.30.2",
        "lightningcss-darwin-arm64": "1.30.2",
        "lightningcss-darwin-x64": "1.30.2",
        "lightningcss-freebsd-x64": "1.30.2",
        "lightningcss-linux-arm-gnueabihf": "1.30.2",
        "lightningcss-linux-arm64-gnu": "1.30.2",
        "lightningcss-linux-arm64-musl": "1.30.2",
        "lightningcss-linux-x64-gnu": "1.30.2",
        "lightningcss-linux-x64-musl": "1.30.2",
        "lightningcss-win32-arm64-msvc": "1.30.2",
        "lightningcss-win32-x64-msvc": "1.30.2"
      }
    },
    "node_modules/lightningcss-android-arm64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.30.2.tgz",
      "integrity": "sha512-BH9sEdOCahSgmkVhBLeU7Hc9DWeZ1Eb6wNS6Da8igvUwAe0sqROHddIlvU06q3WyXVEOYDZ6ykBZQnjTbmo4+A==",
      "cpu": [
        "arm64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-arm64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.30.2.tgz",
      "integrity": "sha512-ylTcDJBN3Hp21TdhRT5zBOIi73P6/W0qwvlFEk22fkdXchtNTOU4Qc37SkzV+EKYxLouZ6M4LG9NfZ1qkhhBWA==",
      "cpu": [
        "arm64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-x64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.30.2.tgz",
      "integrity": "sha512-oBZgKchomuDYxr7ilwLcyms6BCyLn0z8J0+ZZmfpjwg9fRVZIR5/GMXd7r9RH94iDhld3UmSjBM6nXWM2TfZTQ==",
      "cpu": [
        "x64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-freebsd-x64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.30.2.tgz",
      "integrity": "sha512-c2bH6xTrf4BDpK8MoGG4Bd6zAMZDAXS569UxCAGcA7IKbHNMlhGQ89eRmvpIUGfKWNVdbhSbkQaWhEoMGmGslA==",
      "cpu": [
        "x64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.30.2.tgz",
      "integrity": "sha512-eVdpxh4wYcm0PofJIZVuYuLiqBIakQ9uFZmipf6LF/HRj5Bgm0eb3qL/mr1smyXIS1twwOxNWndd8z0E374hiA==",
      "cpu": [
        "arm"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.30.2.tgz",
      "integrity": "sha512-UK65WJAbwIJbiBFXpxrbTNArtfuznvxAJw4Q2ZGlU8kPeDIWEX1dg3rn2veBVUylA2Ezg89ktszWbaQnxD/e3A==",
      "cpu": [
        "arm64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.30.2.tgz",
      "integrity": "sha512-5Vh9dGeblpTxWHpOx8iauV02popZDsCYMPIgiuw97OJ5uaDsL86cnqSFs5LZkG3ghHoX5isLgWzMs+eD1YzrnA==",
      "cpu": [
        "arm64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.30.2.tgz",
      "integrity": "sha512-Cfd46gdmj1vQ+lR6VRTTadNHu6ALuw2pKR9lYq4FnhvgBc4zWY1EtZcAc6EffShbb1MFrIPfLDXD6Xprbnni4w==",
      "cpu": [
        "x64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-musl": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.30.2.tgz",
      "integrity": "sha512-XJaLUUFXb6/QG2lGIW6aIk6jKdtjtcffUT0NKvIqhSBY3hh9Ch+1LCeH80dR9q9LBjG3ewbDjnumefsLsP6aiA==",
      "cpu": [
        "x64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.30.2.tgz",
      "integrity": "sha512-FZn+vaj7zLv//D/192WFFVA0RgHawIcHqLX9xuWiQt7P0PtdFEVaxgF9rjM/IRYHQXNnk61/H/gb2Ei+kUQ4xQ==",
      "cpu": [
        "arm64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.30.2.tgz",
      "integrity": "sha512-5g1yc73p+iAkid5phb4oVFMB45417DkRevRbt/El/gKXJk4jid+vPFF/AXbxn05Aky8PapwzZrdJShv5C0avjw==",
      "cpu": [
        "x64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash.merge": {
      "version": "4.6.2",
      "resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
      "integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/long": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/long/-/long-5.3.2.tgz",
      "integrity": "sha512-mNAgZ1GmyNhD7AuqnTG3/VQ26o760+ZYBPKjPvugO8+nLbYfX6TVpJPseBvopbdY+qpZ/lKUnmEc1LeZYS3QAA==",
      "license": "Apache-2.0"
    },
    "node_modules/lru-cache": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
      "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "yallist": "^3.0.2"
      }
    },
    "node_modules/lucide-react": {
      "version": "1.16.0",
      "resolved": "https://registry.npmjs.org/lucide-react/-/lucide-react-1.16.0.tgz",
      "integrity": "sha512-dYwyPzb4MEKpGUmNYk3WKWPnMrHs3FKM+q94kAnJrcDIqqn1hq2xY8scaS2ovsOCM5D51ey2gaRG3PBb1vgoYQ==",
      "license": "ISC",
      "peerDependencies": {
        "react": "^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/magic-string": {
      "version": "0.30.21",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.21.tgz",
      "integrity": "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/motion": {
      "version": "12.39.0",
      "resolved": "https://registry.npmjs.org/motion/-/motion-12.39.0.tgz",
      "integrity": "sha512-H4a+Ze+a9j+/NTla5ezfb/g9vmIOxC+viDj++NGDZyTZkdRKjiOz3kSv6TalRWM8ZmD2y/CfC6TkQc97ybyqSA==",
      "license": "MIT",
      "dependencies": {
        "framer-motion": "^12.39.0",
        "tslib": "^2.4.0"
      },
      "peerDependencies": {
        "@emotion/is-prop-valid": "*",
        "react": "^18.0.0 || ^19.0.0",
        "react-dom": "^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@emotion/is-prop-valid": {
          "optional": true
        },
        "react": {
          "optional": true
        },
        "react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/motion-dom": {
      "version": "12.39.0",
      "resolved": "https://registry.npmjs.org/motion-dom/-/motion-dom-12.39.0.tgz",
      "integrity": "sha512-Xn7aAcGDhco/JZTXOub64UmaYn73C6J1Po7Fk+8EvkJsNGTqfhon6UJY53vJKXW5v5Zl8HrYsVxv6oPXeGoGLQ==",
      "license": "MIT",
      "dependencies": {
        "motion-utils": "^12.39.0"
      }
    },
    "node_modules/motion-utils": {
      "version": "12.39.0",
      "resolved": "https://registry.npmjs.org/motion-utils/-/motion-utils-12.39.0.tgz",
      "integrity": "sha512-8nadJAJjTtqRkmRF36FoJTrywK9nnFmnPwnSMyxaOCU7GDjN9RTMJIxx9De8ErM+vpPhMccr/6fo5WciyQLnMQ==",
      "license": "MIT"
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "license": "MIT"
    },
    "node_modules/nanoid": {
      "version": "3.3.11",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.11.tgz",
      "integrity": "sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/node-domexception": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/node-domexception/-/node-domexception-1.0.0.tgz",
      "integrity": "sha512-/jKZoMpw0F8GRwl4/eLROPA3cfcXtLApP0QzLmUT/HuPCZWyB7IY9ZrMeKw2O/nFIqPQB3PVM9aYm0F312AXDQ==",
      "deprecated": "Use your platform's native DOMException instead",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/jimmywarting"
        },
        {
          "type": "github",
          "url": "https://paypal.me/jimmywarting"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=10.5.0"
      }
    },
    "node_modules/node-fetch": {
      "version": "3.3.2",
      "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-3.3.2.tgz",
      "integrity": "sha512-dRB78srN/l6gqWulah9SrxeYnxeddIG30+GOqK/9OlLVyLg3HPnr6SqOWTWOXKRwC2eGYCkZ59NNuSgvSrpgOA==",
      "license": "MIT",
      "dependencies": {
        "data-uri-to-buffer": "^4.0.0",
        "fetch-blob": "^3.1.4",
        "formdata-polyfill": "^4.0.10"
      },
      "engines": {
        "node": "^12.20.0 || ^14.13.1 || >=16.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/node-fetch"
      }
    },
    "node_modules/node-releases": {
      "version": "2.0.27",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.27.tgz",
      "integrity": "sha512-nmh3lCkYZ3grZvqcCH+fjmQ7X+H0OeZgP40OierEaAptX4XofMh5kwNbWh7lBduUzCcV/8kZ+NDLCwm2iorIlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/optionator": {
      "version": "0.9.4",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
      "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.5"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-retry": {
      "version": "4.6.2",
      "resolved": "https://registry.npmjs.org/p-retry/-/p-retry-4.6.2.tgz",
      "integrity": "sha512-312Id396EbJdvRONlngUx0NydfrIQ5lsYu0znKVUzVvArzEIt08V1qhtyESbGVd1FGX7UKtiFp5uwKZdM8wIuQ==",
      "license": "MIT",
      "dependencies": {
        "@types/retry": "0.12.0",
        "retry": "^0.13.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "callsites": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.3.tgz",
      "integrity": "sha512-5gTmgEY/sqK6gFXLIsQNH19lWb4ebPDLA4SdLP7dsWkIXHWlG66oPuVvXSGFPppYZz8ZDZq0dYYrbHfBCVUb1Q==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.6",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.6.tgz",
      "integrity": "sha512-3Ybi1tAuwAP9s0r1UQ2J4n5Y0G05bJkpUIO0/bI9MhwmD70S5aTWbXGBwxHrelT+XM1k6dM0pk+SwNkpTRN7Pg==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.11",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/prettier": {
      "version": "3.7.4",
      "resolved": "https://registry.npmjs.org/prettier/-/prettier-3.7.4.tgz",
      "integrity": "sha512-v6UNi1+3hSlVvv8fSaoUbggEM5VErKmmpGA7Pl3HF8V6uKY7rvClBOJlH6yNwQtfTueNkGVpOv/mtWL9L4bgRA==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "prettier": "bin/prettier.cjs"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/prettier/prettier?sponsor=1"
      }
    },
    "node_modules/prettier-plugin-tailwindcss": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/prettier-plugin-tailwindcss/-/prettier-plugin-tailwindcss-0.7.2.tgz",
      "integrity": "sha512-LkphyK3Fw+q2HdMOoiEHWf93fNtYJwfamoKPl7UwtjFQdei/iIBoX11G6j706FzN3ymX9mPVi97qIY8328vdnA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=20.19"
      },
      "peerDependencies": {
        "@ianvs/prettier-plugin-sort-imports": "*",
        "@prettier/plugin-hermes": "*",
        "@prettier/plugin-oxc": "*",
        "@prettier/plugin-pug": "*",
        "@shopify/prettier-plugin-liquid": "*",
        "@trivago/prettier-plugin-sort-imports": "*",
        "@zackad/prettier-plugin-twig": "*",
        "prettier": "^3.0",
        "prettier-plugin-astro": "*",
        "prettier-plugin-css-order": "*",
        "prettier-plugin-jsdoc": "*",
        "prettier-plugin-marko": "*",
        "prettier-plugin-multiline-arrays": "*",
        "prettier-plugin-organize-attributes": "*",
        "prettier-plugin-organize-imports": "*",
        "prettier-plugin-sort-imports": "*",
        "prettier-plugin-svelte": "*"
      },
      "peerDependenciesMeta": {
        "@ianvs/prettier-plugin-sort-imports": {
          "optional": true
        },
        "@prettier/plugin-hermes": {
          "optional": true
        },
        "@prettier/plugin-oxc": {
          "optional": true
        },
        "@prettier/plugin-pug": {
          "optional": true
        },
        "@shopify/prettier-plugin-liquid": {
          "optional": true
        },
        "@trivago/prettier-plugin-sort-imports": {
          "optional": true
        },
        "@zackad/prettier-plugin-twig": {
          "optional": true
        },
        "prettier-plugin-astro": {
          "optional": true
        },
        "prettier-plugin-css-order": {
          "optional": true
        },
        "prettier-plugin-jsdoc": {
          "optional": true
        },
        "prettier-plugin-marko": {
          "optional": true
        },
        "prettier-plugin-multiline-arrays": {
          "optional": true
        },
        "prettier-plugin-organize-attributes": {
          "optional": true
        },
        "prettier-plugin-organize-imports": {
          "optional": true
        },
        "prettier-plugin-sort-imports": {
          "optional": true
        },
        "prettier-plugin-svelte": {
          "optional": true
        }
      }
    },
    "node_modules/protobufjs": {
      "version": "7.5.8",
      "resolved": "https://registry.npmjs.org/protobufjs/-/protobufjs-7.5.8.tgz",
      "integrity": "sha512-dvpCIeLPbXZS/Ete7yLaO7RenOdken2NHKykBXbsaGxZT0UTltcarBciw+A78SRQs9iMAAVpsYA+l8b1hTePIA==",
      "hasInstallScript": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "@protobufjs/aspromise": "^1.1.2",
        "@protobufjs/base64": "^1.1.2",
        "@protobufjs/codegen": "^2.0.5",
        "@protobufjs/eventemitter": "^1.1.0",
        "@protobufjs/fetch": "^1.1.0",
        "@protobufjs/float": "^1.0.2",
        "@protobufjs/inquire": "^1.1.1",
        "@protobufjs/path": "^1.1.2",
        "@protobufjs/pool": "^1.1.0",
        "@protobufjs/utf8": "^1.1.1",
        "@types/node": ">=13.7.0",
        "long": "^5.0.0"
      },
      "engines": {
        "node": ">=12.0.0"
      }
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/react": {
      "version": "19.2.3",
      "resolved": "https://registry.npmjs.org/react/-/react-19.2.3.tgz",
      "integrity": "sha512-Ku/hhYbVjOQnXDZFv2+RibmLFGwFdeeKHFcOTlrt7xplBnya5OGn/hIRDsqDiSUcfORsDC7MPxwork8jBwsIWA==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.2.3",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.2.3.tgz",
      "integrity": "sha512-yELu4WmLPw5Mr/lmeEpox5rw3RETacE++JgHqQzd2dg+YbJuat3jH4ingc+WPZhxaoFzdv9y33G+F7Nl5O0GBg==",
      "license": "MIT",
      "dependencies": {
        "scheduler": "^0.27.0"
      },
      "peerDependencies": {
        "react": "^19.2.3"
      }
    },
    "node_modules/react-hook-form": {
      "version": "7.76.0",
      "resolved": "https://registry.npmjs.org/react-hook-form/-/react-hook-form-7.76.0.tgz",
      "integrity": "sha512-eKtLGgFeSgkHqQD8J59AMZ9a4uD1D83iSIzt4YlTGD7liDen5rrjcUO1rVIGd9yC1gofryjtHbv+4ny4hkLWlw==",
      "license": "MIT",
      "engines": {
        "node": ">=18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/react-hook-form"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17 || ^18 || ^19"
      }
    },
    "node_modules/react-hot-toast": {
      "version": "2.6.0",
      "resolved": "https://registry.npmjs.org/react-hot-toast/-/react-hot-toast-2.6.0.tgz",
      "integrity": "sha512-bH+2EBMZ4sdyou/DPrfgIouFpcRLCJ+HoCA32UoAYHn6T3Ur5yfcDCeSr5mwldl6pFOsiocmrXMuoCJ1vV8bWg==",
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.1.3",
        "goober": "^2.1.16"
      },
      "engines": {
        "node": ">=10"
      },
      "peerDependencies": {
        "react": ">=16",
        "react-dom": ">=16"
      }
    },
    "node_modules/react-refresh": {
      "version": "0.18.0",
      "resolved": "https://registry.npmjs.org/react-refresh/-/react-refresh-0.18.0.tgz",
      "integrity": "sha512-QgT5//D3jfjJb6Gsjxv0Slpj23ip+HtOpnNgnb2S5zU3CB26G/IDPGoy4RJB42wzFE46DRsstbW6tKHoKbhAxw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-router": {
      "version": "7.15.1",
      "resolved": "https://registry.npmjs.org/react-router/-/react-router-7.15.1.tgz",
      "integrity": "sha512-R8rl9HhgikFYoPJymnUtPXWbnDb3oget6lQnfIoupbt61aT9aOhRkDsY2XRhZRyX1Z/8a5sL74fXmFNm3NRK5A==",
      "license": "MIT",
      "dependencies": {
        "cookie": "^1.0.1",
        "set-cookie-parser": "^2.6.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "react": ">=18",
        "react-dom": ">=18"
      },
      "peerDependenciesMeta": {
        "react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/resolve-from": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/retry": {
      "version": "0.13.1",
      "resolved": "https://registry.npmjs.org/retry/-/retry-0.13.1.tgz",
      "integrity": "sha512-XQBQ3I8W1Cge0Seh+6gjj03LbmRFWuoszgK9ooCpwYIrhhoO80pfq4cUkU5DkknwfOfFteRwlZ56PYOGYyFWdg==",
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/rollup": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/rollup/-/rollup-4.54.0.tgz",
      "integrity": "sha512-3nk8Y3a9Ea8szgKhinMlGMhGMw89mqule3KWczxhIzqudyHdCIOHw8WJlj/r329fACjKLEh13ZSk7oE22kyeIw==",
      "license": "MIT",
      "dependencies": {
        "@types/estree": "1.0.8"
      },
      "bin": {
        "rollup": "dist/bin/rollup"
      },
      "engines": {
        "node": ">=18.0.0",
        "npm": ">=8.0.0"
      },
      "optionalDependencies": {
        "@rollup/rollup-android-arm-eabi": "4.54.0",
        "@rollup/rollup-android-arm64": "4.54.0",
        "@rollup/rollup-darwin-arm64": "4.54.0",
        "@rollup/rollup-darwin-x64": "4.54.0",
        "@rollup/rollup-freebsd-arm64": "4.54.0",
        "@rollup/rollup-freebsd-x64": "4.54.0",
        "@rollup/rollup-linux-arm-gnueabihf": "4.54.0",
        "@rollup/rollup-linux-arm-musleabihf": "4.54.0",
        "@rollup/rollup-linux-arm64-gnu": "4.54.0",
        "@rollup/rollup-linux-arm64-musl": "4.54.0",
        "@rollup/rollup-linux-loong64-gnu": "4.54.0",
        "@rollup/rollup-linux-ppc64-gnu": "4.54.0",
        "@rollup/rollup-linux-riscv64-gnu": "4.54.0",
        "@rollup/rollup-linux-riscv64-musl": "4.54.0",
        "@rollup/rollup-linux-s390x-gnu": "4.54.0",
        "@rollup/rollup-linux-x64-gnu": "4.54.0",
        "@rollup/rollup-linux-x64-musl": "4.54.0",
        "@rollup/rollup-openharmony-arm64": "4.54.0",
        "@rollup/rollup-win32-arm64-msvc": "4.54.0",
        "@rollup/rollup-win32-ia32-msvc": "4.54.0",
        "@rollup/rollup-win32-x64-gnu": "4.54.0",
        "@rollup/rollup-win32-x64-msvc": "4.54.0",
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/safe-buffer": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/scheduler": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.27.0.tgz",
      "integrity": "sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q==",
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/set-cookie-parser": {
      "version": "2.7.2",
      "resolved": "https://registry.npmjs.org/set-cookie-parser/-/set-cookie-parser-2.7.2.tgz",
      "integrity": "sha512-oeM1lpU/UvhTxw+g3cIfxXHyJRc/uidd3yK1P242gzHds0udQBYzs3y8j4gCCW+ZJ7ad0yctld8RYO+bdurlvw==",
      "license": "MIT"
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/tailwindcss": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.1.18.tgz",
      "integrity": "sha512-4+Z+0yiYyEtUVCScyfHCxOYP06L5Ne+JiHhY2IjR2KWMIWhJOYZKLSGZaP5HkZ8+bY0cxfzwDE5uOmzFXyIwxw==",
      "license": "MIT"
    },
    "node_modules/tapable": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.3.0.tgz",
      "integrity": "sha512-g9ljZiwki/LfxmQADO3dEY1CbpmXT5Hm2fJ+QaGKwSXUylMybePR7/67YW7jOrrvjEgL1Fmz5kzyAjWVWLlucg==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/tinyglobby": {
      "version": "0.2.15",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.15.tgz",
      "integrity": "sha512-j2Zq4NyQYG5XMST4cbs02Ak8iJUdxRM0XI5QyxXuZOzKOINmWurp3smXu3y5wDcJrptwpSjgXHzIQxR0omXljQ==",
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.3"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "license": "0BSD"
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/undici-types": {
      "version": "7.24.6",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-7.24.6.tgz",
      "integrity": "sha512-WRNW+sJgj5OBN4/0JpHFqtqzhpbnV0GuB+OozA9gCL7a993SmU+1JBZCzLNxYsbMfIeDL+lTsphD5jN5N+n0zg==",
      "license": "MIT"
    },
    "node_modules/update-browserslist-db": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.2.3.tgz",
      "integrity": "sha512-Js0m9cx+qOgDxo0eMiFGEueWztz+d4+M3rGlmKPT+T4IS/jP4ylw3Nwpu6cpTTP8R1MAC1kF4VbdLt3ARf209w==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/vite": {
      "version": "7.3.0",
      "resolved": "https://registry.npmjs.org/vite/-/vite-7.3.0.tgz",
      "integrity": "sha512-dZwN5L1VlUBewiP6H9s2+B3e3Jg96D0vzN+Ry73sOefebhYr9f94wwkMNN/9ouoU8pV1BqA1d1zGk8928cx0rg==",
      "license": "MIT",
      "dependencies": {
        "esbuild": "^0.27.0",
        "fdir": "^6.5.0",
        "picomatch": "^4.0.3",
        "postcss": "^8.5.6",
        "rollup": "^4.43.0",
        "tinyglobby": "^0.2.15"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^20.19.0 || >=22.12.0",
        "jiti": ">=1.21.0",
        "less": "^4.0.0",
        "lightningcss": "^1.21.0",
        "sass": "^1.70.0",
        "sass-embedded": "^1.70.0",
        "stylus": ">=0.54.8",
        "sugarss": "^5.0.0",
        "terser": "^5.16.0",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "jiti": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "lightningcss": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/web-streams-polyfill": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/web-streams-polyfill/-/web-streams-polyfill-3.3.3.tgz",
      "integrity": "sha512-d2JWLCivmZYTSIoge9MsgFCZrt571BikcWGYkjC1khllbTeDlGqZ2D8vD8E/lJa8WGWbb7Plm8/XJYV7IJHZZw==",
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
      "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/ws": {
      "version": "8.20.1",
      "resolved": "https://registry.npmjs.org/ws/-/ws-8.20.1.tgz",
      "integrity": "sha512-It4dO0K5v//JtTXuPkfEOaI3uUN87iYPnqo/ZzqCoG3g8uhA66QUMs/SrM0YK7/NAu+r4LMh/9dq2A7k+rHs+w==",
      "license": "MIT",
      "engines": {
        "node": ">=10.0.0"
      },
      "peerDependencies": {
        "bufferutil": "^4.0.1",
        "utf-8-validate": ">=5.0.2"
      },
      "peerDependenciesMeta": {
        "bufferutil": {
          "optional": true
        },
        "utf-8-validate": {
          "optional": true
        }
      }
    },
    "node_modules/yallist": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/zod": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/zod/-/zod-4.2.1.tgz",
      "integrity": "sha512-0wZ1IRqGGhMP76gLqz8EyfBXKk0J2qo2+H3fi4mcUP/KtTocoX08nmIAHl1Z2kJIZbZee8KOpBCSNPRgauucjw==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    },
    "node_modules/zod-validation-error": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/zod-validation-error/-/zod-validation-error-4.0.2.tgz",
      "integrity": "sha512-Q6/nZLe6jxuU80qb/4uJ4t5v2VEZ44lzQjPDhYJNztRQ4wyWc6VF3D3Kb/fAuPetZQnhS3hnajCf9CsWesghLQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.0.0"
      },
      "peerDependencies": {
        "zod": "^3.25.0 || ^4.0.0"
      }
    }
  }
}
```

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
```

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/apple-touch-icon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SkillBridge</title>
  </head>
  <body class="bg-canvas-default">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

```md
# SkillBridge

```

```css
@import url('https://fonts.googleapis.com/css2?family=Codystar:wght@300;400&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
@import 'tailwindcss';

@layer base {
  button {
    cursor: pointer;
  }
}

@theme {
  /* Premium System Typography */
  --font-sans: 'Inter', system-ui, sans-serif;

  /* Light Mode Color System Tokens */
  --color-canvas-default: #fafafc; /* Crisp, light off-white background canvas */
  --color-canvas-panel: #ffffff; /* Pure white for bento grid cards/containers */
  --color-canvas-inset: #f1f1f5; /* Light gray for input/search backgrounds */

  --color-brand-primary: #2563eb; /* Radiant Corporate Blue for primary buttons */
  --color-brand-secondary: #4f46e5; /* Deep Indigo for main headings */
  --color-brand-dark: #0f172a; /* Slate 900 for premium, high-contrast text */
  --color-brand-muted: #475569; /* Slate 600 for subtext and descriptors */

  --color-border-subtle: #e2e8f0; /* Slate 200 for clean lines and card dividers */
  --color-border-focus: #3b82f6; /* Active, focused input borders */

  /* Contextual Feedback Accents */
  --color-feedback-success: #10b981; /* Emerald Green for high matching scores */
  --color-feedback-warning: #f59e0b; /* Amber for technical skill gaps */
  --color-feedback-danger: #ef4444; /* Rose for system errors or alerts */
}

@keyframes loading-bar {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(300%);
  }
}
```

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast'; // Import Toast engine
import { createBrowserRouter, RouterProvider } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Import React Query

import './index.css';
import routes from './routes';

// Create a persistent, global Query Client instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Cache query data for 5 minutes before refetching
      retry: 1, // Retry failed network/API requests once before alerting
    },
  },
});

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />

      {/* Global toast notifications config */}
      <Toaster
        position='top-center'
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            background: '#FFFFFF',
            color: '#0F172A',
            fontFamily: 'Inter, sans-serif',
            border: '1px solid #E2E8F0',
            boxShadow: '0 4px 6px -1px rgba(15, 23, 42, 0.03)',
          },
        }}
      />
    </QueryClientProvider>
  </StrictMode>,
);

// window.__TANSTACK_QUERY_CLIENT__ = queryClient; // For Dev Purpose
```

```jsx
import { Navigate } from 'react-router';

import Signup from './features/authentication/pages/Signup';
import Login from './features/authentication/pages/Login';
import ForgotPassword from './features/authentication/pages/ForgotPassword';
import AppLayout from './components/AppLayout';
import Settings from './features/authentication/pages/Settings';
import CvUploadPage from './features/cv-processing/pages/CvUploadPage';
import SkillSelector from './features/skill-assessment/pages/SkillSelector';
import TestingArena from './features/skill-assessment/pages/TestingArena';
import RecommendationsPage from './features/career-recommendation/pages/RecommendationsPage';
import RoadmapView from './features/career-recommendation/pages/RoadmapView';
import HomePage from './features/dashboard/pages/HomePage';
import ProtectedRoute from './components/ProtectedRoute';
import ResetPassword from './features/authentication/pages/ResetPassword';

const routes = [
  // PUBLIC ROUTES
  { path: '/signup', element: <Signup /> },
  { path: '/login', element: <Login /> },
  { path: '/forgot-password', element: <ForgotPassword /> },
  { path: '/reset-password', element: <ResetPassword /> },

  // PRIVATE ROUTES
  {
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/settings', element: <Settings /> },
      { path: '/cv-upload', element: <CvUploadPage /> },
      { path: '/skill-selector', element: <SkillSelector /> },
      { path: '/assessment', element: <TestingArena /> },
      { path: '/recommendations', element: <RecommendationsPage /> },
      { path: '/roadmap', element: <RoadmapView /> },
    ],
  },

  // FALLBACK
  { path: '*', element: <Navigate to='/' replace /> },
];

export default routes;
```

```jsx
import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';

import { Sidebar } from './Sidebar';
import Header from './Header';

export default function AppLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className='bg-canvas-default text-brand-dark flex min-h-screen font-sans'>
      <Sidebar
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        isMobile={isMobile}
      />

      <div className='flex min-w-0 flex-1 flex-col'>
        <Header onMenuClick={() => setIsMobileMenuOpen(true)} />

        <main className='flex-1 overflow-auto'>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
```

```jsx
import { MenuIcon, LogOutIcon } from 'lucide-react';
import { useUser, useLogout } from '../features/authentication/hooks/useUser';

export default function Header({ onMenuClick }) {
  const { profile, isLoading: isLoadingProfile } = useUser();
  const { logout, isLoggingOut } = useLogout();

  // Extract initialization letters safely from the profile row
  const initials = profile?.full_name
    ? profile.full_name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : 'ST';

  return (
    <header className='bg-canvas-panel border-border-subtle sticky top-0 z-30 flex h-16 items-center justify-between border-b px-4 font-sans md:px-8'>
      <div className='flex items-center gap-4'>
        {/* Mobile Hamburger Menu Toggle Button */}
        <button
          onClick={onMenuClick}
          className='text-brand-muted hover:text-brand-dark hover:bg-canvas-inset -ml-2 cursor-pointer rounded-lg p-2 md:hidden'
        >
          <MenuIcon size={24} />
        </button>
      </div>

      <div className='flex items-center gap-3 pl-4 md:pl-6'>
        {/* Student Label Metadata Card Block */}
        <div className='hidden text-right select-none md:block'>
          <p className='text-brand-dark max-w-xs truncate text-sm font-semibold'>
            {profile
              ? profile.full_name
              : isLoadingProfile
                ? 'Loading Student...'
                : 'Logging out...'}
          </p>
          <p className='text-brand-muted text-xs'>Student Session</p>
        </div>

        {/* Dynamic Image or Initials Text Badge Container */}
        <div className='bg-brand-secondary border-canvas-panel relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 text-sm font-semibold text-white shadow-sm select-none'>
          {profile?.avatar_url ? (
            <img
              src={profile.avatar_url}
              alt='User Profile'
              className='h-full w-full object-cover'
            />
          ) : (
            initials
          )}
        </div>

        {/* Global Sign Out Button Layer */}
        <button
          onClick={() => logout()}
          disabled={isLoggingOut}
          className='text-brand-muted hover:text-feedback-danger hover:bg-canvas-inset ml-2 cursor-pointer rounded-lg p-2 transition-colors disabled:opacity-30'
          title='Sign Out'
        >
          <LogOutIcon size={18} />
        </button>
      </div>
    </header>
  );
}
```

```jsx
import {
  LayoutDashboardIcon,
  UploadCloudIcon,
  CheckSquareIcon,
  BriefcaseIcon,
  MapIcon,
  SettingsIcon,
  XIcon,
} from 'lucide-react';
// eslint-disable-next-line
import { motion, AnimatePresence } from 'motion/react';
import { NavLink } from 'react-router';

const navItems = [
  {
    path: '/',
    label: 'Dashboard',
    icon: LayoutDashboardIcon,
  },
  {
    path: '/cv-upload',
    label: 'CV Upload',
    icon: UploadCloudIcon,
  },
  {
    path: '/skill-selector',
    label: 'Skill Assessment',
    icon: CheckSquareIcon,
  },
  {
    path: '/recommendations',
    label: 'Recommendations',
    icon: BriefcaseIcon,
  },
  {
    path: '/roadmap',
    label: 'Roadmap',
    icon: MapIcon,
  },
  {
    path: '/settings',
    label: 'Settings',
    icon: SettingsIcon,
  },
];

export function Sidebar({ isOpen, onClose, isMobile }) {
  const sidebarContent = (
    <div className='bg-canvas-panel border-border-subtle h-full w-64 border-r p-6'>
      <div className='mb-8 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='bg-brand-primary flex h-8 w-8 items-center justify-center rounded text-xl font-bold text-white'>
            S
          </div>
          <span className='text-brand-dark text-xl font-bold'>SkillBridge</span>
        </div>
        {isMobile && (
          <button
            onClick={onClose}
            className='text-brand-muted hover:text-brand-dark p-1'
          >
            <XIcon size={20} />
          </button>
        )}
      </div>

      <nav className='space-y-2'>
        {navItems.map(item => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={isMobile ? onClose : undefined}
              className={({ isActive }) =>
                `relative flex items-center gap-3 overflow-hidden rounded-lg px-4 py-3 transition-colors ${isActive ? 'text-brand-primary bg-canvas-inset font-medium' : 'text-brand-muted hover:text-brand-dark hover:bg-canvas-inset'}`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className='bg-brand-primary absolute top-0 bottom-0 left-0 w-0.75' />
                  )}
                  <Icon size={20} />
                  <span>{item.label}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );

  if (isMobile) {
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={onClose}
              className='bg-brand-dark/20 fixed inset-0 z-40 backdrop-blur-sm'
            />

            <motion.div
              initial={{
                x: '-100%',
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: '-100%',
              }}
              transition={{
                type: 'spring',
                bounce: 0,
                duration: 0.4,
              }}
              className='fixed inset-y-0 left-0 z-50 shadow-2xl'
            >
              {sidebarContent}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  }
  return (
    <div className='sticky top-0 hidden h-screen md:block'>
      {sidebarContent}
    </div>
  );
}
```

```jsx
import { Navigate } from 'react-router';

import { useUser } from '../features/authentication/hooks/useUser';
import Spinner from './Spinner';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useUser();

  if (isLoading) {
    return (
      <div className='bg-canvas-default flex min-h-screen items-center justify-center font-sans'>
        <Spinner />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to='/login' replace />;
  }

  if (isAuthenticated) return children;
}
```

```jsx
export default function Spinner() {
  return (
    <div className='border-brand-primary m-5 size-12.5 animate-spin rounded-full border-5 border-t-transparent ease-in-out md:bottom-6'></div>
  );
}
```

```js
import { supabase } from './supabase';

/**
 * Registers a new student using Supabase Auth
 */
export async function signUpUser({ email, password, fullName }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });

  if (error) throw new Error(error.message);
  return data;
}

/**
 * Authenticates an existing student session
 */
export async function loginUser({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return data;
}

/**
 * Grabs the active user session and attaches their custom profile table row
 */
export async function getCurrentUser() {
  // 1. Check if there is an active session from Supabase
  const { data: sessionData } = await supabase.auth.getSession();
  if (!sessionData.session) return null;

  const { data: authUser, error: authError } = await supabase.auth.getUser();
  if (authError) throw new Error(authError.message);

  // 2. Fetch the corresponding synchronized profile row from PostgreSQL
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', authUser.user.id)
    .single();

  if (profileError) {
    console.error('Profile fetch error:', profileError.message);
    return null;
  }

  // Return a combined object containing both credentials and custom profile metadata
  return {
    ...authUser.user,
    profile,
  };
}

/**
 * Signs out the current user session completely
 */
export async function logoutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

/**
 * Updates metadata fields inside the profiles table
 */
export async function updateProfileDetails({
  userId,
  fullName,
  university,
  avatarUrl,
}) {
  const updateData = {
    full_name: fullName,
    university,
    updated_at: new Date().toISOString(),
  };
  if (avatarUrl) updateData.avatar_url = avatarUrl;

  const { data, error } = await supabase
    .from('profiles')
    .update(updateData)
    .eq('id', userId)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

/**
 * Uploads an avatar image asset directly into the Supabase 'avatars' bucket storage
 */
export async function uploadAvatarImage(file, userId) {
  const fileExtension = file.name.split('.').pop();
  const filePath = `${userId}-${Math.random()}.${fileExtension}`;

  const { error: uploadError } = await supabase.storage
    .from('avatars')
    .upload(filePath, file, { cacheControl: '3600', upsert: true });

  if (uploadError) throw new Error(uploadError.message);

  const { data } = supabase.storage.from('avatars').getPublicUrl(filePath);
  return data.publicUrl;
}

/**
 * Updates the user's active login password credentials
 */
export async function updateUserPassword(newPassword) {
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error) throw new Error(error.message);
  return data;
}

/**
 * Deletes the student's entire account along with all cascaded profile logs
 */
export async function deleteUserAccountComplete() {
  // Due to Supabase client boundaries, RPC or Edge triggers handle remote deletions smoothly,
  // but running a direct auth.users delete clears data cascades perfectly for project simulation targets.
  const { error } = await supabase.rpc('delete_user_self');

  // Fallback: Sign out the user and clean client history variables instantly
  if (error) {
    const { error: authDeleteError } = await supabase.auth.signOut();
    if (authDeleteError) throw new Error(authDeleteError.message);
  }
}

/**
 * Triggers a secure password recovery email via Supabase Auth
 */
export async function sendPasswordResetEmail(email) {
  // Route the inbox link directly to the clean public reset page
  const redirectToUrl = `${window.location.origin}/reset-password`;

  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: redirectToUrl,
  });

  if (error) throw new Error(error.message);
  return data;
}
```

```js
import { supabase } from './supabase';
import { genAI } from './gemini';

const JSON_CLEAN_REGEX = /^```json\s+|\s+```$/g;

/**
 * 1. Pulls the student's absolute latest assessment row from Supabase
 */
export async function getLatestUserAssessment(userId) {
  const { data, error } = await supabase
    .from('assessments')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(1);

  if (error) throw new Error(error.message);
  return data[0] || null;
}

/**
 * 2. Feeds that assessment row to Gemini to generate the career options payload
 */
export async function generateAiCareerRecommendations(assessmentData) {
  if (!assessmentData) return [];

  const prompt = `
    You are an expert Nigerian career counselor and tech talent placement officer.
    Analyze this student's objective technical evaluation performance metrics to recommend matching careers:

    EVALUATION METRICS:
    - Target Domain Field Focus: ${assessmentData.tested_discipline}
    - Verified Input Competencies: ${assessmentData.selected_skills.join(', ')}
    - Objective Exam Score: ${assessmentData.verified_match_score}%

    Based on this data, identify exactly three real-world career paths suitable for the student. Focus on fields relevant to modern Nigerian industries (e.g., Fintech, localized engineering, or global remote consulting tracks).

    Identify 'Verified Strengths' based only on skills that match their baseline focus, and identify explicit 'Skill Gaps' the student needs to work on to become job-ready.

    Return ONLY a raw JSON array matching this exact schema layout without markdown code blocks:
    [
      {
        "id": 1,
        "title": "Frontend Engineer",
        "description": "Build modern interfaces and dynamic web apps...",
        "match_percentage": 88,
        "strengths": ["React Fundamentals", "Tailwind CSS Layouts"],
        "gaps": ["Advanced State Management (Redux)", "Unit Testing Frameworks"]
      }
    ]
  `;

  try {
    const response = await genAI.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    const cleanText = response.text.replace(JSON_CLEAN_REGEX, '').trim();
    return JSON.parse(cleanText);
  } catch (error) {
    console.error('Gemini Recommendation Fetch Failure:', error);
    throw new Error('Failed to parse career recommendation insights.');
  }
}

/**
 * 3. Saves the three AI-generated career paths back into the assessment record row
 */
export async function saveRecommendationsToAssessment({
  assessmentId,
  recommendations,
}) {
  const { data, error } = await supabase
    .from('assessments')
    .update({ generated_recommendations: recommendations })
    .eq('id', assessmentId)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

/**
 * 4. Feeds the chosen career path and identified gaps to Gemini to generate a structured timeline roadmap
 */
export async function generateAiTimelineRoadmap({
  targetCareer,
  identifiedGaps,
}) {
  const prompt = `
    You are an elite tech career coach specializing in the Nigerian job market.
    Generate a highly practical, personalized month-by-month learning roadmap for a student transitioning into this role.

    TARGET CAREER: ${targetCareer}
    IDENTIFIED SKILL GAPS TO BRIDGE: ${identifiedGaps.join(', ')}

    Create a strict 6-month progressive curriculum to bridge these gaps. 
    For each month, define a clear overarching technical theme, a primary skill focus, and include 2 accessible learning resource links.
    Crucially, mix global platforms (like Coursera, freeCodeCamp, or Udemy) with affordable, localized options relevant to Nigeria (such as ALX Africa, Jobberman Skills, or Utiva tracks).

    Return ONLY a raw JSON array matching this exact schema layout without markdown code fence blocks:
    [
      {
        "id": 1,
        "month": "Month 1",
        "title": "Foundational Theme Title",
        "completed": false,
        "links": [
          { "text": "ALX Software Engineering Track", "url": "https://www.alxafrica.com" },
          { "text": "Coursera: Basic Frameworks", "url": "https://www.coursera.org" }
        ]
      }
    ]
  `;

  try {
    const response = await genAI.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    const cleanText = response.text.replace(/^```json\s+|\s+```$/g, '').trim();
    return JSON.parse(cleanText);
  } catch (error) {
    console.error('Gemini Roadmap Generation Failure:', error);
    throw new Error('Failed to assemble personalized monthly timeline steps.');
  }
}

/**
 * 5. Patches the updated milestone completion checklist array into the database row
 */
export async function updateRoadmapProgress({ roadmapId, updatedMilestones }) {
  const { data, error } = await supabase
    .from('roadmaps')
    .update({ timeline_milestones_json: updatedMilestones })
    .eq('id', roadmapId)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

/**
 * 6. Completely removes an assessment record row out of Supabase PostgreSQL
 */
export async function deleteAssessmentRecord(assessmentId) {
  const { data, error } = await supabase
    .from('assessments')
    .delete()
    .eq('id', assessmentId);

  if (error) throw new Error(error.message);
  return data;
}
```

```js
import { GoogleGenAI } from '@google/genai';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  console.error(
    'Missing VITE_GEMINI_API_KEY environment configuration variable.',
  );
}

export const genAI = new GoogleGenAI({ apiKey });

const JSON_CLEAN_REGEX = /^```json\s+|\s+```$/g;

/**
 * Generates an automated, dynamic multi-choice quiz with adaptive volume
 */
export async function generateAssessmentQuestions(selectedSkills) {
  // Calculate dynamic constraints based on the size of the chosen array
  const skillCount = selectedSkills.length;
  const questionsPerSkill = skillCount <= 2 ? 5 : 3;

  const prompt = `
    You are an expert technical interviewer. Generate an assessment exam to test professional proficiency.
    SKILLS TO TEST: ${selectedSkills.join(', ')}

    CRITICAL INSTRUCTION: Because the student selected exactly ${skillCount} skill(s), you MUST generate exactly ${questionsPerSkill} high-quality Multiple Choice Questions (MCQs) for EACH individual skill listed. 
    Total questions in your output array must be exactly ${skillCount * questionsPerSkill}.

    Each question must have 4 distinct, plausible options, an explicit zero-indexed correct answer, and a clear educational explanation.

    Return ONLY a raw JSON array matching this exact schema layout without markdown formatting tags or code block fences:
    [
      {
        "id": 1,
        "skill": "Skill Name",
        "question": "Clear technical scenario question?",
        "options": ["Option 0", "Option 1", "Option 2", "Option 3"],
        "correct_option_index": 0,
        "explanation": "Brief explanation addressing why the option is correct."
      }
    ]
  `;

  try {
    const response = await genAI.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: prompt,
    });

    const cleanText = response.text.replace(JSON_CLEAN_REGEX, '').trim();
    return JSON.parse(cleanText);
  } catch (error) {
    console.error('Gemini Generation Error:', error);
    throw new Error('Failed to compile adaptive assessment parameters.');
  }
}
```

```js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
```

```js
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import {
  updateProfileDetails,
  uploadAvatarImage,
  updateUserPassword,
  deleteUserAccountComplete,
  sendPasswordResetEmail,
} from '../../../services/apiAuth';

export function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { mutate: updateProfile, isPending: isUpdatingProfile } = useMutation({
    mutationFn: async ({ userId, fullName, university, imageFile }) => {
      let avatarUrl = null;
      if (imageFile) {
        avatarUrl = await uploadAvatarImage(imageFile, userId);
      }
      return updateProfileDetails({ userId, fullName, university, avatarUrl });
    },
    onSuccess: () => {
      toast.success('Personal profile details updated successfully!');
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: err => toast.error(err.message),
  });

  const { mutate: updatePassword, isPending: isUpdatingPassword } = useMutation(
    {
      mutationFn: updateUserPassword,
      onSuccess: () => toast.success('Security password altered successfully!'),
      onError: err => toast.error(err.message),
    },
  );

  const { mutate: deleteAccount, isPending: isDeleting } = useMutation({
    mutationFn: deleteUserAccountComplete,
    onSuccess: () => {
      toast.success('Account profile wiped out.');
      window.location.href = '/login';
    },
    onError: err => toast.error(err.message),
  });

  return {
    updateProfile,
    isUpdatingProfile,
    updatePassword,
    isUpdatingPassword,
    deleteAccount,
    isDeleting,
  };
}

/**
 * React Query mutation managing the recovery dispatch lifecycle state
 */
export function useForgotPassword() {
  return useMutation({
    mutationFn: sendPasswordResetEmail,
  });
}
```

```js
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import {
  getCurrentUser,
  loginUser,
  logoutUser,
  signUpUser,
} from '../../../services/apiAuth';

/**
 * Hook to retrieve and track the current logged-in user state
 */
export function useUser() {
  const {
    isLoading,
    data: user,
    error,
  } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
    retry: false, // Don't continuously retry auth checks if unauthenticated
  });

  return {
    isLoading,
    user,
    profile: user?.profile || null,
    isAuthenticated: user?.role === 'authenticated',
    error,
  };
}

/**
 * Hook to run the sign-up operation via mutations
 */
export function useSignup() {
  const queryClient = useQueryClient();

  const { mutate: signup, isPending: isSigningUp } = useMutation({
    mutationFn: signUpUser,
    onSuccess: data => {
      // Set the user query data cache directly to log them in instantly
      queryClient.setQueryData(['user'], data.user);
    },
  });

  return { signup, isSigningUp };
}

/**
 * Hook to run the login operation via mutations
 */
export function useLogin() {
  const queryClient = useQueryClient();

  const { mutate: login, isPending: isLoggingIn } = useMutation({
    mutationFn: loginUser,
    onSuccess: data => {
      queryClient.setQueryData(['user'], data.user);
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

  return { login, isLoggingIn };
}

/**
 * Hook to terminate the session context wrapper
 */
export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isPending: isLoggingOut } = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      queryClient.clear(); // Clear all cached query states on sign out
      navigate('/login', { replace: true });
    },
  });

  return { logout, isLoggingOut };
}
```

```jsx
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import toast from 'react-hot-toast';

import { useLogin } from '../hooks/useUser';

export default function Login() {
  const { login, isLoggingIn } = useLogin();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    login(
      { email: data.email, password: data.password },
      {
        onSuccess: () => {
          toast.success('Logged in successfully!');
          navigate('/');
        },
        onError: err => {
          toast.error(err.message || 'Authentication credentials rejected.');
        },
      },
    );
  };

  return (
    <div className='bg-canvas-default flex min-h-screen items-center justify-center p-4'>
      <div className='bg-canvas-panel border-border-subtle w-full max-w-md rounded-2xl border p-8 shadow-md'>
        <div className='mb-8 text-center'>
          <div className='bg-brand-primary mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-2xl font-bold text-white'>
            S
          </div>
          <h1 className='text-brand-dark mb-2 text-2xl font-bold'>
            Welcome back
          </h1>
          <p className='text-brand-muted'>
            Enter your details to access your dashboard.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
          <div>
            <label className='text-brand-dark mb-1.5 block text-sm font-medium'>
              Email
            </label>
            <input
              type='email'
              {...register('email', { required: 'Email is required' })}
              className={`bg-canvas-inset border-border-subtle text-brand-dark w-full rounded-lg border px-4 py-2.5 transition-colors focus:outline-none ${errors.email ? 'border-feedback-danger focus:border-feedback-danger' : 'focus:border-border-focus'}`}
              placeholder='Enter your email'
            />
            {errors.email && (
              <p className='text-feedback-danger mt-1 text-xs'>
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <div className='mb-1.5 flex items-center justify-between'>
              <label className='text-brand-dark block text-sm font-medium'>
                Password
              </label>
              <Link
                to='/forgot-password'
                className='text-brand-primary text-sm hover:underline'
              >
                Forgot password?
              </Link>
            </div>
            <input
              type='password'
              {...register('password', { required: 'Password is required' })}
              className={`bg-canvas-inset border-border-subtle text-brand-dark w-full rounded-lg border px-4 py-2.5 transition-colors focus:outline-none ${errors.password ? 'border-feedback-danger focus:border-feedback-danger' : 'focus:border-border-focus'}`}
              placeholder='••••••••'
            />
            {errors.password && (
              <p className='text-feedback-danger mt-1 text-xs'>
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type='submit'
            disabled={isLoggingIn}
            className='bg-brand-primary hover:bg-brand-primary/90 w-full rounded-lg px-4 py-2.5 font-medium text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50'
          >
            {isLoggingIn ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <p className='text-brand-muted mt-8 text-center text-sm'>
          Don't have an account?{' '}
          <Link
            to='/signup'
            className='text-brand-primary font-medium hover:underline'
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
```

```jsx
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import toast from 'react-hot-toast';

import { useSignup } from '../hooks/useUser';

export default function Signup() {
  const { signup, isSigningUp } = useSignup();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    signup(
      { email: data.email, password: data.password, fullName: data.fullName },
      {
        onSuccess: () => {
          toast.success('Account registered successfully! Welcome.');
          navigate('/');
        },
        onError: err => {
          toast.error(err.message || 'Registration failed.');
        },
      },
    );
  };

  return (
    <div className='bg-canvas-default flex min-h-screen items-center justify-center p-4'>
      <div className='bg-canvas-panel border-border-subtle w-full max-w-md rounded-2xl border p-8 shadow-md'>
        <div className='mb-8 text-center'>
          <div className='bg-brand-primary mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-2xl font-bold text-white'>
            S
          </div>
          <h1 className='text-brand-dark mb-2 text-2xl font-bold'>
            Create an account
          </h1>
          <p className='text-brand-muted'>
            Start your career journey with SkillBridge.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
          <div>
            <label className='text-brand-dark mb-1.5 block text-sm font-medium'>
              Full Name
            </label>
            <input
              type='text'
              {...register('fullName', { required: 'Full name is required' })}
              className={`bg-canvas-inset border-border-subtle text-brand-dark w-full rounded-lg border px-4 py-2.5 transition-colors focus:outline-none ${errors.fullName ? 'border-feedback-danger focus:border-feedback-danger' : 'focus:border-border-focus'}`}
              placeholder='E.g., Simbiat Lawal'
            />
            {errors.fullName && (
              <p className='text-feedback-danger mt-1 text-xs'>
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <label className='text-brand-dark mb-1.5 block text-sm font-medium'>
              Email
            </label>
            <input
              type='email'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address',
                },
              })}
              className={`bg-canvas-inset border-border-subtle text-brand-dark w-full rounded-lg border px-4 py-2.5 transition-colors focus:outline-none ${errors.email ? 'border-feedback-danger focus:border-feedback-danger' : 'focus:border-border-focus'}`}
              placeholder='E.g., simbiat@university.edu'
            />
            {errors.email && (
              <p className='text-feedback-danger mt-1 text-xs'>
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className='text-brand-dark mb-1.5 block text-sm font-medium'>
              Password
            </label>
            <input
              type='password'
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
              })}
              className={`bg-canvas-inset border-border-subtle text-brand-dark w-full rounded-lg border px-4 py-2.5 transition-colors focus:outline-none ${errors.password ? 'border-feedback-danger focus:border-feedback-danger' : 'focus:border-border-focus'}`}
              placeholder='Create a strong password'
            />
            {errors.password && (
              <p className='text-feedback-danger mt-1 text-xs'>
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label className='text-brand-dark mb-1.5 block text-sm font-medium'>
              Confirm Password
            </label>
            <input
              type='password'
              {...register('passwordConfirm', {
                required: 'Please confirm password',
                validate: value =>
                  value === getValues().password || 'Passwords need to match',
              })}
              className={`bg-canvas-inset border-border-subtle text-brand-dark w-full rounded-lg border px-4 py-2.5 transition-colors focus:outline-none ${errors.password ? 'border-feedback-danger focus:border-feedback-danger' : 'focus:border-border-focus'}`}
              placeholder='Repeat password'
            />
            {errors.passwordConfirm && (
              <p className='text-feedback-danger mt-1 text-xs'>
                {errors.passwordConfirm.message}
              </p>
            )}
          </div>

          <button
            type='submit'
            disabled={isSigningUp}
            className='bg-brand-primary hover:bg-brand-primary/90 w-full rounded-lg px-4 py-2.5 font-medium text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50'
          >
            {isSigningUp ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <p className='text-brand-muted mt-8 text-center text-sm'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='text-brand-primary font-medium hover:underline'
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
```

```jsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { CheckCircle2Icon, ArrowLeftIcon } from 'lucide-react';
import { useForgotPassword } from '../hooks/useSettings';
import toast from 'react-hot-toast';

export default function ForgotPassword() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { mutate: sendResetEmail, isPending } = useForgotPassword();

  // Initialize your React Hook Form controller context
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const currentEmail = getValues('email');

  const onSubmit = data => {
    sendResetEmail(data.email, {
      onSuccess: () => {
        setIsSubmitted(true);
        toast.success('Recovery link sent successfully.');
      },
      onError: err => {
        toast.error(err.message || 'Failed to dispatch recovery parameters.');
      },
    });
  };

  const handleResend = () => {
    if (!currentEmail) return;
    sendResetEmail(currentEmail, {
      onSuccess: () => {
        toast.success('A fresh recovery token link has been resent.');
      },
      onError: err => {
        toast.error(err.message);
      },
    });
  };

  return (
    <div className='bg-canvas-default flex min-h-screen items-center justify-center p-4 font-sans'>
      <div className='bg-canvas-panel border-border-subtle w-full max-w-md rounded-2xl border p-8 shadow-md'>
        {/* Dynamic Success State Alert Banner */}
        {isSubmitted && (
          <div className='bg-feedback-success/10 border-feedback-success/30 mb-6 flex items-start gap-3 rounded-lg border p-4 transition-all'>
            <CheckCircle2Icon
              className='text-feedback-success mt-0.5 shrink-0'
              size={20}
            />
            <div>
              <h3 className='text-feedback-success text-sm font-bold'>
                Email sent successfully
              </h3>
              <p className='text-feedback-success/80 mt-1 text-xs leading-relaxed'>
                Check your inbox at{' '}
                <span className='text-brand-dark font-semibold'>
                  {currentEmail}
                </span>{' '}
                for instructions to reset your password.
              </p>
            </div>
          </div>
        )}

        {/* Header Icon Block */}
        <div className='mb-8 text-center select-none'>
          <div className='bg-canvas-inset border-border-subtle text-brand-dark mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border shadow-sm'>
            <svg
              className='text-brand-muted h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z'
              />
            </svg>
          </div>
          <h1 className='text-brand-dark mb-2 text-xl font-bold'>
            Reset password
          </h1>
          <p className='text-brand-muted text-sm'>
            We'll send you an email with a secure link to restore access.
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
            <div>
              <label className='text-brand-dark mb-1.5 block text-xs font-semibold'>
                Email Address
              </label>
              <input
                type='email'
                disabled={isPending}
                {...register('email', {
                  required: 'Email address is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email formatting match',
                  },
                })}
                className={`bg-canvas-inset border-border-subtle text-brand-dark w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none ${errors.email ? 'border-feedback-danger focus:border-feedback-danger' : 'focus:border-border-focus'}`}
                placeholder='Enter your school or personal email'
              />
              {errors.email && (
                <p className='text-feedback-danger text-xxs mt-1 font-bold'>
                  {errors.email.message}
                </p>
              )}
            </div>

            <button
              type='submit'
              disabled={isPending}
              className='bg-brand-primary hover:bg-brand-primary/90 w-full cursor-pointer rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-colors disabled:opacity-50'
            >
              {isPending ? 'Sending Link...' : 'Send reset link'}
            </button>
          </form>
        ) : (
          <button
            onClick={handleResend}
            disabled={isPending}
            className='bg-canvas-inset text-brand-dark border-border-subtle hover:bg-canvas-default w-full cursor-pointer rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors disabled:opacity-50'
          >
            {isPending ? 'Re-sending Link...' : 'Resend email link'}
          </button>
        )}

        {/* Bottom Return Route Navigation Link */}
        <div className='mt-8 text-center'>
          <Link
            to='/login'
            className='text-brand-muted hover:text-brand-dark inline-flex items-center gap-2 text-xs font-semibold transition-colors'
          >
            <ArrowLeftIcon size={14} />
            Back to log in
          </Link>
        </div>
      </div>
    </div>
  );
}
```

```jsx
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useUpdateSettings } from '../hooks/useSettings';
import toast from 'react-hot-toast';

export default function ResetPassword() {
  const navigate = useNavigate();
  const { updatePassword, isUpdatingPassword } = useUpdateSettings();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    updatePassword(data.newPassword, {
      onSuccess: () => {
        toast.success('Password updated successfully! Please log in.');
        navigate('/login', { replace: true });
      },
    });
  };

  return (
    <div className='bg-canvas-default flex min-h-screen items-center justify-center p-4 font-sans'>
      <div className='bg-canvas-panel border-border-subtle w-full max-w-md rounded-2xl border p-8 shadow-md'>
        <div className='mb-8 text-center'>
          <h1 className='text-brand-dark mb-2 text-2xl font-bold'>
            Create new password
          </h1>
          <p className='text-brand-muted text-sm'>
            Type your new secure account credentials below.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
          <div>
            <label className='text-brand-dark mb-1.5 block text-xs font-semibold'>
              New Password
            </label>
            <input
              type='password'
              placeholder='Minimum 8 characters'
              {...register('newPassword', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
              })}
              className={`bg-canvas-inset border-border-subtle text-brand-dark focus:border-border-focus w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none`}
            />
            {errors.newPassword && (
              <p className='text-feedback-danger text-xxs mt-1 font-bold'>
                {errors.newPassword.message}
              </p>
            )}
          </div>

          <div>
            <label className='text-brand-dark mb-1.5 block text-xs font-semibold'>
              Confirm New Password
            </label>
            <input
              type='password'
              placeholder='Repeat new password'
              {...register('confirmPassword', {
                required: 'Please confirm your new password',
                validate: val =>
                  val === getValues('newPassword') ||
                  'The passwords do not match',
              })}
              className={`bg-canvas-inset border-border-subtle text-brand-dark focus:border-border-focus w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none`}
            />
            {errors.confirmPassword && (
              <p className='text-feedback-danger text-xxs mt-1 font-bold'>
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type='submit'
            disabled={isUpdatingPassword}
            className='bg-brand-primary hover:bg-brand-primary/90 w-full cursor-pointer rounded-lg px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors disabled:opacity-50'
          >
            {isUpdatingPassword ? 'Saving Password...' : 'Reset Password'}
          </button>
        </form>
      </div>
    </div>
  );
}
```

```jsx
import { useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { CameraIcon, Trash2Icon } from 'lucide-react';
import toast from 'react-hot-toast';

import { useUser } from '../hooks/useUser';
import { useUpdateSettings } from '../hooks/useSettings';
import Spinner from '../../../components/Spinner';

export default function Settings() {
  const { user, profile, isLoading } = useUser();
  const {
    updateProfile,
    isUpdatingProfile,
    updatePassword,
    isUpdatingPassword,
    deleteAccount,
    isDeleting,
  } = useUpdateSettings();

  const fileInputRef = useRef(null);
  const [avatarPreview, setAvatarPreview] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  // Initialize independent Hook Form controllers
  const {
    register: registerProfile,
    handleSubmit: handleProfileSubmit,
    setValue,
  } = useForm();
  const {
    register: registerPassword,
    handleSubmit: handlePasswordSubmit,
    getValues,
    reset: resetPasswordForm,
    formState: { errors: passwordErrors },
  } = useForm();

  // Load baseline profile defaults into inputs when user schema arrives
  useEffect(() => {
    if (profile) {
      setValue('fullName', profile.full_name);
      setValue('university', profile.university || 'Kwara State University');
      // eslint-disable-next-line
      if (profile.avatar_url) setAvatarPreview(profile.avatar_url);
    }
  }, [profile, setValue]);

  if (isLoading) {
    return (
      <div className='bg-canvas-default flex min-h-[calc(100vh-4rem)] items-center justify-center'>
        <Spinner />
      </div>
    );
  }

  const handleImageChange = e => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 1024 * 1024) {
        toast.error('Avatar file boundaries must stay below 1MB.');
        return;
      }
      setSelectedFile(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const onProfileSave = data => {
    updateProfile({
      userId: user.id,
      fullName: data.fullName,
      university: data.university,
      imageFile: selectedFile,
    });
  };

  const onPasswordSave = data => {
    updatePassword(data.newPassword, {
      onSuccess: () => resetPasswordForm(),
    });
  };

  const handleDeleteAccount = () => {
    if (
      window.confirm(
        'CRITICAL WARNING: Are you absolutely sure you want to delete your SkillBridge account? This will permanently wipe your profile, scores, history, and roadmaps. This action cannot be undone.',
      )
    ) {
      deleteAccount();
    }
  };

  const initials = profile?.full_name
    ? profile.full_name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : 'ST';

  return (
    <div className='bg-canvas-default mx-auto min-h-[calc(100vh-4rem)] max-w-4xl space-y-8 p-4 font-sans md:p-8'>
      <div>
        <h1 className='text-brand-dark text-2xl font-bold'>Profile Settings</h1>
        <p className='text-brand-muted mt-1 text-sm'>
          Manage your account details and preferences.
        </p>
      </div>

      <input
        type='file'
        ref={fileInputRef}
        onChange={handleImageChange}
        accept='image/*'
        className='hidden'
      />

      {/* BLOCK 1: PERSONAL DETAILS */}
      <form
        onSubmit={handleProfileSubmit(onProfileSave)}
        className='bg-canvas-panel border-border-subtle overflow-hidden rounded-2xl border shadow-sm'
      >
        <div className='space-y-6 p-6 md:p-8'>
          <h2 className='text-brand-dark border-border-subtle border-b pb-3 text-base font-bold'>
            Personal Information
          </h2>

          <div className='flex flex-col items-start gap-8 md:flex-row'>
            <div className='mx-auto shrink-0 text-center md:mx-0'>
              <div
                onClick={() => fileInputRef.current?.click()}
                className='bg-brand-secondary border-canvas-panel group relative flex h-24 w-24 cursor-pointer items-center justify-center overflow-hidden rounded-full border-4 text-3xl font-bold text-white shadow-sm'
              >
                {avatarPreview ? (
                  <img
                    src={avatarPreview}
                    alt='Profile Avatar'
                    className='h-full w-full object-cover'
                  />
                ) : (
                  initials
                )}
                <div className='bg-brand-dark/40 absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100'>
                  <CameraIcon size={20} />
                </div>
              </div>
              <p className='text-brand-muted text-xxs mt-3 font-semibold tracking-wider uppercase'>
                Max Size 1MB
              </p>
            </div>

            <div className='w-full flex-1 space-y-5'>
              <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                <div>
                  <label className='text-brand-dark mb-1.5 block text-xs font-semibold'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    {...registerProfile('fullName', { required: true })}
                    className='bg-canvas-inset border-border-subtle text-brand-dark focus:border-border-focus w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none'
                  />
                </div>
                <div>
                  <label className='text-brand-dark mb-1.5 block text-xs font-semibold opacity-60'>
                    Email Address (Locked)
                  </label>
                  <input
                    type='email'
                    defaultValue={profile?.email}
                    disabled
                    className='bg-canvas-inset/60 border-border-subtle text-brand-dark/50 w-full cursor-not-allowed rounded-lg border px-4 py-2.5 text-sm focus:outline-none'
                  />
                </div>
              </div>

              <div>
                <label className='text-brand-dark mb-1.5 block text-xs font-semibold'>
                  University / Institution
                </label>
                <input
                  type='text'
                  {...registerProfile('university', { required: true })}
                  className='bg-canvas-inset border-border-subtle text-brand-dark focus:border-border-focus w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='bg-canvas-inset border-border-subtle flex justify-end gap-3 border-t p-4 md:px-8'>
          <button
            type='submit'
            disabled={isUpdatingProfile}
            className='bg-brand-primary hover:bg-brand-primary/90 cursor-pointer rounded-lg px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors disabled:opacity-50'
          >
            {isUpdatingProfile ? 'Saving Details...' : 'Save Personal Details'}
          </button>
        </div>
      </form>

      {/* BLOCK 2: PASSWORD SECURITY */}
      <form
        onSubmit={handlePasswordSubmit(onPasswordSave)}
        className='bg-canvas-panel border-border-subtle overflow-hidden rounded-2xl border shadow-sm'
      >
        <div className='space-y-5 p-6 md:p-8'>
          <h2 className='text-brand-dark border-border-subtle border-b pb-3 text-base font-bold'>
            Security Credentials
          </h2>

          <div className='grid max-w-2xl grid-cols-1 gap-5 md:grid-cols-2'>
            <div>
              <label className='text-brand-dark mb-1.5 block text-xs font-semibold'>
                New Password
              </label>
              <input
                type='password'
                placeholder='Minimum 8 characters'
                {...registerPassword('newPassword', {
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: 'Password must match minimum 8 chars',
                  },
                })}
                className='bg-canvas-inset border-border-subtle text-brand-dark focus:border-border-focus w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none'
              />
              {passwordErrors.newPassword && (
                <p className='text-feedback-danger text-xxs mt-1 font-bold'>
                  {passwordErrors.newPassword.message}
                </p>
              )}
            </div>
            <div>
              <label className='text-brand-dark mb-1.5 block text-xs font-semibold'>
                Confirm New Password
              </label>
              <input
                type='password'
                placeholder='Repeat password'
                {...registerPassword('confirmPassword', {
                  required: 'Please confirm password',
                  validate: val =>
                    val === getValues('newPassword') ||
                    'The inputs do not match',
                })}
                className='bg-canvas-inset border-border-subtle text-brand-dark focus:border-border-focus w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none'
              />
              {passwordErrors.confirmPassword && (
                <p className='text-feedback-danger text-xxs mt-1 font-bold'>
                  {passwordErrors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className='bg-canvas-inset border-border-subtle flex justify-end gap-3 border-t p-4 md:px-8'>
          <button
            type='submit'
            disabled={isUpdatingPassword}
            className='bg-brand-primary hover:bg-brand-primary/90 cursor-pointer rounded-lg px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors disabled:opacity-50'
          >
            {isUpdatingPassword ? 'Updating Security...' : 'Update Password'}
          </button>
        </div>
      </form>

      {/* BLOCK 3: DANGER AREA ACCOUNT DELETION */}
      <div className='bg-canvas-panel border-feedback-danger/30 overflow-hidden rounded-2xl border shadow-sm'>
        <div className='space-y-3 p-6 md:p-8'>
          <h2 className='text-feedback-danger border-border-subtle border-b pb-3 text-base font-bold'>
            Danger Zone
          </h2>
          <p className='text-brand-muted max-w-2xl text-xs leading-relaxed'>
            Once you delete your account, there is no going back. All your
            logged metadata information, active learning tracks, and quiz
            history will be scrubbed instantly from the primary system nodes.
          </p>
        </div>
        <div className='bg-feedback-danger/5 flex justify-start p-4 md:px-8'>
          <button
            type='button'
            onClick={handleDeleteAccount}
            disabled={isDeleting}
            className='bg-feedback-danger hover:bg-feedback-danger/90 inline-flex cursor-pointer items-center gap-2 rounded-lg px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors disabled:opacity-50'
          >
            <Trash2Icon size={14} />{' '}
            {isDeleting
              ? 'Wiping Account...'
              : 'Permanently Delete SkillBridge Account'}
          </button>
        </div>
      </div>
    </div>
  );
}
```

```js
import { genAI } from '../../../services/gemini';

// Official un-bundled stable minified worker build path matching version 4.x
const PDF_WORKER_SRC =
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.3.136/pdf.worker.min.mjs';

/**
 * 1. Extracts plain raw text contents out of a local binary PDF file blob
 */
export async function parsePdfText(file) {
  // Import the primary module script dynamically from CDN
  const pdfjs =
    await import('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.3.136/pdf.min.mjs');
  pdfjs.GlobalWorkerOptions.workerSrc = PDF_WORKER_SRC;

  const arrayBuffer = await file.arrayBuffer();
  const loadingTask = pdfjs.getDocument({ data: arrayBuffer });
  const pdf = await loadingTask.promise;

  let fullText = '';

  // Iterate through every page inside the document layout grid
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    const pageItems = textContent.items.map(item => item.str).join(' ');
    fullText += pageItems + '\n';
  }

  return fullText;
}

/**
 * 2. Transmits unstructured text to Gemini to parse out real data matching our layout
 */
export async function extractCvMetricsWithAi(rawCvText) {
  const prompt = `
    You are an expert AI human resources assistant and ATS resume data parsing engine.
    Analyze the following raw text extracted from an applicant's CV document:

    ---
    ${rawCvText}
    ---

    Extract the primary educational qualification history, overall professional experiences, and a flat array list mapping out all technical/domain skills.

    Return ONLY a raw JSON object matching this exact schema layout without markdown code fence blocks:
    {
      "education": "Most prominent degree title and associated institution name",
      "experience": "Concise paragraph or list summarizing historical professional roles or internship involvements",
      "skills": ["SkillA", "SkillB", "SkillC", "SkillD"]
    }
  `;

  const response = await genAI.models.generateContent({
    model: 'gemini-3.5-flash',
    contents: prompt,
  });

  const cleanText = response.text.replace(/^```json\s+|\s+```$/g, '').trim();
  return JSON.parse(cleanText);
}
```

```jsx
import { useState, useRef } from 'react';
import {
  UploadCloudIcon,
  FileIcon,
  CheckCircle2Icon,
  XIcon,
  PlusIcon,
} from 'lucide-react';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

import { parsePdfText, extractCvMetricsWithAi } from '../services/cvService';
import { useSubmitAssessment } from '../../skill-assessment/hooks/useAssessment';
import { useUser } from '../../authentication/hooks/useUser';

export default function CvUploadPage() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const { user, profile } = useUser();
  const { mutate: submitAssessment, isPending: isSavingProfile } =
    useSubmitAssessment();

  const [uploadState, setUploadState] = useState('idle'); // idle, uploading, parsed
  const [fileName, setFileName] = useState('');

  // Real extracted metrics data state
  const [extractedData, setExtractedData] = useState({
    education: '',
    experience: '',
    skills: [],
  });

  const [newSkillInput, setNewSkillInput] = useState('');
  const [isAddingSkill, setIsAddingSkill] = useState(false);

  const processFile = async file => {
    if (!file || file.type !== 'application/pdf') {
      toast.error('SkillBridge strictly supports standard PDF uploads.');
      return;
    }

    try {
      setFileName(file.name);
      setUploadState('uploading');

      // A. Extract plain text from PDF pages locally
      const extractedRawText = await parsePdfText(file);

      if (!extractedRawText.trim()) {
        throw new Error(
          'Could not extract legible string elements out of the PDF layout configuration.',
        );
      }

      // B. Dispatch payload to Gemini ATS parsing service
      const aiParsedResult = await extractCvMetricsWithAi(extractedRawText);

      setExtractedData({
        education: aiParsedResult.education || 'Not Specified',
        experience: aiParsedResult.experience || 'Not Specified',
        skills: aiParsedResult.skills || [],
      });

      setUploadState('parsed');
      toast.success('CV contents compiled successfully!');
    } catch (error) {
      console.error(error);
      toast.error(
        error.message || 'Failed to analyze uploaded document matrix.',
      );
      setUploadState('idle');
    }
  };

  const handleDrop = e => {
    e.preventDefault();
    const file = e.dataTransfer?.files[0];
    processFile(file);
  };

  const handleFileChange = e => {
    const file = e.target.files?.[0];
    processFile(file);
  };

  const removeSkillTag = targetSkill => {
    setExtractedData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== targetSkill),
    }));
  };

  const handleAddSkillSubmit = e => {
    e.preventDefault();
    const cleanSkill = newSkillInput.trim();
    if (cleanSkill && !extractedData.skills.includes(cleanSkill)) {
      setExtractedData(prev => ({
        ...prev,
        skills: [...prev.skills, cleanSkill],
      }));
      setNewSkillInput('');
      setIsAddingSkill(false);
    }
  };

  const handleConfirmAndSave = () => {
    if (extractedData.skills.length === 0) {
      toast.error(
        'Profile must include at least one mapped skill tag before confirmation.',
      );
      return;
    }

    // Save profile metrics directly into our assessments table row logs
    submitAssessment(
      {
        userId: user.id,
        discipline: 'Automated CV Parsing Profile',
        selectedSkills: extractedData.skills,
        verifiedScore: 100, // Fixed baseline completion value indicator
        rawPayload: {
          education: extractedData.education,
          experience: extractedData.experience,
        },
      },
      {
        onSuccess: () => {
          toast.success('Professional data synchronized with your profile!');
          // Seamlessly pass parameters to recommendations search params
          navigate('/recommendations');
        },
        onError: err => {
          toast.error(
            'Failed to update profile configurations: ' + err.message,
          );
        },
      },
    );
  };

  const studentInitials = profile?.full_name
    ? profile.full_name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : 'ST';

  return (
    <div className='bg-canvas-default mx-auto min-h-[calc(100vh-4rem)] max-w-5xl space-y-6 p-4 font-sans md:p-8'>
      <div>
        <h1 className='text-brand-dark text-2xl font-bold'>
          Automated CV Upload
        </h1>
        <p className='text-brand-muted mt-1 text-sm'>
          Upload your resume to automatically extract your structural skills and
          experience.
        </p>
      </div>

      {/* Input tag reference gate */}
      <input
        type='file'
        ref={fileInputRef}
        onChange={handleFileChange}
        accept='application/pdf'
        className='hidden'
      />

      {uploadState === 'idle' && (
        <div
          onDragOver={e => e.preventDefault()}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className='border-border-subtle bg-canvas-panel hover:border-brand-primary hover:bg-canvas-inset/30 group cursor-pointer rounded-2xl border-2 border-dashed p-12 text-center shadow-sm transition-all'
        >
          <div className='bg-canvas-inset text-brand-muted group-hover:text-brand-primary group-hover:bg-brand-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-colors'>
            <UploadCloudIcon size={32} />
          </div>
          <h3 className='text-brand-dark mb-2 text-base font-bold'>
            Drag your CV here or click to browse
          </h3>
          <p className='text-brand-muted text-xs'>
            Supports PDF formatting metrics only (Max 5MB)
          </p>
        </div>
      )}

      {uploadState === 'uploading' && (
        <div className='bg-canvas-panel border-border-subtle flex flex-col items-center justify-center rounded-2xl border p-12 text-center shadow-sm'>
          <div className='w-full max-w-md space-y-4'>
            <div className='flex items-center justify-between text-sm font-semibold'>
              <span className='text-brand-dark flex items-center gap-2 truncate'>
                <FileIcon size={16} className='text-brand-primary shrink-0' />
                {fileName}
              </span>
              <span className='text-brand-primary animate-pulse'>
                Analyzing File...
              </span>
            </div>
            <div className='bg-canvas-inset relative h-2 w-full overflow-hidden rounded-full'>
              <div
                className='bg-brand-primary animate-infinite-loading h-full w-1/3 rounded-full'
                style={{ animation: 'loading-bar 1.5s infinite ease-in-out' }}
              />
            </div>
            <p className='text-brand-muted animate-pulse text-xs'>
              SkillBridge parsing binary buffers and aligning skill profiles...
            </p>
          </div>
        </div>
      )}

      {uploadState === 'parsed' && (
        <div className='grid grid-cols-1 items-start gap-6 lg:grid-cols-2'>
          {/* Data Inputs Editing Block */}
          <div className='bg-canvas-panel border-border-subtle space-y-6 rounded-2xl border p-6 shadow-sm'>
            <div className='border-border-subtle flex items-center justify-between border-b pb-4'>
              <h2 className='text-brand-dark text-base font-bold'>
                Extracted Profile Fields
              </h2>
              <button
                onClick={() => setUploadState('idle')}
                className='text-brand-muted hover:text-feedback-danger flex cursor-pointer items-center gap-1 text-xs font-semibold transition-colors'
              >
                <XIcon size={14} /> Re-upload
              </button>
            </div>

            <div className='space-y-5'>
              <div>
                <label className='text-brand-secondary mb-1.5 block text-xs font-bold tracking-wider uppercase'>
                  Education Mapping
                </label>
                <input
                  type='text'
                  value={extractedData.education}
                  onChange={e =>
                    setExtractedData(prev => ({
                      ...prev,
                      education: e.target.value,
                    }))
                  }
                  className='bg-canvas-inset border-border-subtle text-brand-dark focus:border-border-focus w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none'
                />
              </div>

              <div>
                <label className='text-brand-secondary mb-1.5 block text-xs font-bold tracking-wider uppercase'>
                  Historical Experience Log
                </label>
                <textarea
                  rows={4}
                  value={extractedData.experience}
                  onChange={e =>
                    setExtractedData(prev => ({
                      ...prev,
                      experience: e.target.value,
                    }))
                  }
                  className='bg-canvas-inset border-border-subtle text-brand-dark focus:border-border-focus w-full resize-none rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none'
                />
              </div>

              <div>
                <label className='text-brand-secondary mb-2 block text-xs font-bold tracking-wider uppercase'>
                  Mapped Skills Tags Matrix
                </label>
                <div className='flex flex-wrap gap-2'>
                  {extractedData.skills.map(skill => (
                    <span
                      key={skill}
                      className='bg-canvas-inset border-border-subtle text-brand-dark inline-flex items-center gap-1 rounded-full border py-1 pr-1.5 pl-3 text-xs font-semibold shadow-sm'
                    >
                      {skill}
                      <button
                        onClick={() => removeSkillTag(skill)}
                        className='text-brand-muted hover:text-feedback-danger hover:bg-canvas-panel ml-1 cursor-pointer rounded-full p-0.5 transition-colors'
                      >
                        <XIcon size={12} />
                      </button>
                    </span>
                  ))}

                  {isAddingSkill ? (
                    <form
                      onSubmit={handleAddSkillSubmit}
                      className='inline-flex items-center gap-1'
                    >
                      <input
                        type='text'
                        autoFocus
                        value={newSkillInput}
                        onChange={e => setNewSkillInput(e.target.value)}
                        onBlur={() =>
                          setTimeout(() => setIsAddingSkill(false), 200)
                        }
                        className='bg-canvas-inset border-brand-primary text-brand-dark w-24 rounded-full border px-3 py-1 text-xs outline-none'
                        placeholder='Skill Name'
                      />
                    </form>
                  ) : (
                    <button
                      onClick={() => setIsAddingSkill(true)}
                      className='border-border-subtle text-brand-muted hover:text-brand-primary hover:border-brand-primary bg-canvas-panel inline-flex cursor-pointer items-center gap-1 rounded-full border border-dashed px-3 py-1 text-xs font-bold transition-colors'
                    >
                      <PlusIcon size={12} /> Add Tag
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Profile Summary Preview Column */}
          <div className='bg-canvas-panel border-border-subtle sticky top-20 flex flex-col rounded-2xl border p-6 shadow-sm'>
            <h2 className='text-brand-dark mb-4 text-base font-bold'>
              Verified Summary Preview
            </h2>

            <div className='bg-canvas-inset border-border-subtle flex-1 space-y-4 rounded-xl border p-6'>
              <div className='mb-2 flex items-center gap-3'>
                <div className='bg-brand-secondary border-canvas-panel flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold text-white shadow-sm'>
                  {studentInitials}
                </div>
                <div className='truncate'>
                  <h4 className='text-brand-dark truncate text-sm font-bold'>
                    {profile?.full_name || 'Loading Profile...'}
                  </h4>
                  <p className='text-brand-muted truncate text-xs'>
                    {extractedData.education || 'Parsing Academic Records...'}
                  </p>
                </div>
              </div>

              <div className='space-y-3 text-xs font-semibold'>
                <div className='text-brand-dark flex items-start gap-2'>
                  <CheckCircle2Icon
                    size={16}
                    className='text-feedback-success mt-0.5 shrink-0'
                  />
                  <span>Academic profiles parsed cleanly.</span>
                </div>
                <div className='text-brand-dark flex items-start gap-2'>
                  <CheckCircle2Icon
                    size={16}
                    className='text-feedback-success mt-0.5 shrink-0'
                  />
                  <span>Professional experiences cataloged.</span>
                </div>
                <div className='text-brand-dark flex items-start gap-2'>
                  <CheckCircle2Icon
                    size={16}
                    className='text-feedback-success mt-0.5 shrink-0'
                  />
                  <span>
                    {extractedData.skills.length} technical skills mapped to
                    dashboard.
                  </span>
                </div>
              </div>
            </div>

            <div className='border-border-subtle mt-6 border-t pt-4'>
              <button
                onClick={handleConfirmAndSave}
                disabled={isSavingProfile}
                className='bg-brand-primary hover:bg-brand-primary/90 w-full cursor-pointer rounded-lg px-4 py-3 text-sm font-medium text-white shadow-sm transition-colors disabled:cursor-not-allowed disabled:opacity-50'
              >
                {isSavingProfile
                  ? 'Synchronizing Profile...'
                  : 'Confirm & Save Profile'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
```

```js
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { supabase } from '../../../services/supabase';
import {
  generateAiCareerRecommendations,
  generateAiTimelineRoadmap,
} from '../../../services/apiRecommendations';

/**
 * 1. Hook to grab the user's latest assessment and its generated career options
 */
export function useCareerRecommendations(userId) {
  return useQuery({
    queryKey: ['latestAssessment', userId],
    queryFn: async () => {
      if (!userId) return null;

      // Pull latest assessment row
      const { data, error } = await supabase
        .from('assessments')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(1);

      if (error) throw new Error(error.message);
      const assessment = data[0] || null;
      if (!assessment) return null;

      // If recommendations have already been generated and saved, return them immediately!
      if (assessment.generated_recommendations) {
        return {
          assessment,
          recommendations: assessment.generated_recommendations,
        };
      }

      // If not, fetch them fresh from Gemini
      const recommendations = await generateAiCareerRecommendations(assessment);

      // Save them to the database instantly in the background so it never repeats
      await supabase
        .from('assessments')
        .update({ generated_recommendations: recommendations })
        .eq('id', assessment.id);

      return { assessment, recommendations };
    },
    enabled: Boolean(userId),
    staleTime: 1000 * 60 * 30, // 30 Minute local cache lock
  });
}

/**
 * 2. Hook to fetch or build a personalized learning roadmap from the database
 */
export function useTimelineRoadmap(userId, targetCareer) {
  return useQuery({
    queryKey: ['activeRoadmap', userId, targetCareer],
    queryFn: async () => {
      if (!userId || !targetCareer) return null;

      // A. Check if this specific roadmap row already exists in Supabase
      const { data: existingRoadmap } = await supabase
        .from('roadmaps')
        .select('*')
        .eq('user_id', userId)
        .eq('target_career_title', targetCareer)
        .limit(1);

      if (existingRoadmap && existingRoadmap.length > 0) {
        return existingRoadmap[0];
      }

      // B. If it doesn't exist, fetch the parent assessment details to find gaps
      const { data: assessmentData } = await supabase
        .from('assessments')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(1);

      const latestAssessment = assessmentData?.[0];
      const identifiedGaps = latestAssessment?.selected_skills || [
        'General Core Skills',
      ];

      // C. Trigger Gemini to construct the 6-month milestones
      const generatedMilestones = await generateAiTimelineRoadmap({
        targetCareer,
        identifiedGaps,
      });

      // D. Save it directly to the database row so it persists permanently
      const { data: newRoadmap, error: saveError } = await supabase
        .from('roadmaps')
        .insert([
          {
            user_id: userId,
            assessment_id:
              latestAssessment?.id || '00000000-0000-0000-0000-000000000000',
            target_career_title: targetCareer,
            suitability_percentage: 85,
            verified_strengths: latestAssessment?.selected_skills || [],
            identified_gaps: [],
            timeline_milestones_json: generatedMilestones,
          },
        ])
        .select()
        .single();

      if (saveError) throw new Error(saveError.message);
      return newRoadmap;
    },
    enabled: Boolean(userId) && Boolean(targetCareer),
    staleTime: 1000 * 60 * 60, // 1 hour data stability cache
  });
}

/**
 * 3. Mutation hook to update completion checkboxes in real time
 */
export function useUpdateRoadmapProgress() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ roadmapId, updatedMilestones }) => {
      const { data, error } = await supabase
        .from('roadmaps')
        .update({ timeline_milestones_json: updatedMilestones })
        .eq('id', roadmapId)
        .select()
        .single();

      if (error) throw new Error(error.message);
      return data;
    },
    onSuccess: data => {
      // Invalidate the cache line to reflect updates everywhere instantly
      queryClient.invalidateQueries({
        queryKey: ['activeRoadmap', data.user_id, data.target_career_title],
      });
    },
  });
}
```

```jsx
import {
  CheckCircle2Icon,
  AlertTriangleIcon,
  ArrowRightIcon,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { useCareerRecommendations } from '../hooks/useRecommendations';
import { useUser } from '../../authentication/hooks/useUser';
import Spinner from '../../../components/Spinner';

export default function RecommendationsPage() {
  const navigate = useNavigate();
  const { user, profile } = useUser();

  // Fetch from our new smart background-saving hook
  const { data, isLoading, error } = useCareerRecommendations(user?.id);

  if (isLoading) {
    return (
      <div className='bg-canvas-default flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center font-sans'>
        <Spinner />
        <p className='text-brand-muted mt-2 animate-pulse text-sm'>
          SkillBridge AI parsing your profiles and matching career tracks...
        </p>
      </div>
    );
  }

  if (
    error ||
    !data ||
    !data.recommendations ||
    data.recommendations.length === 0
  ) {
    return (
      <div className='bg-canvas-default flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-4 text-center font-sans'>
        <h2 className='text-brand-dark text-xl font-bold'>
          No Active Career Blueprints Found
        </h2>
        <p className='text-brand-muted mt-1 max-w-md text-sm'>
          Complete an evaluation assessment first to generate your technical
          profile data.
        </p>
        <button
          onClick={() => navigate('/skill-selector')}
          className='bg-brand-primary hover:bg-brand-primary/90 mt-6 cursor-pointer rounded-lg px-5 py-2.5 font-medium text-white transition-colors'
        >
          Take Assessment Quiz
        </button>
      </div>
    );
  }

  const { assessment, recommendations } = data;
  const studentName = profile?.full_name
    ? profile.full_name.split(' ')[0]
    : 'Scholar';

  return (
    <div className='bg-canvas-default mx-auto max-w-7xl space-y-8 p-4 font-sans md:p-8'>
      <div className='bg-canvas-panel border-border-subtle rounded-2xl border p-6 shadow-sm md:p-8'>
        <h1 className='text-brand-dark mb-2 text-2xl font-bold'>
          Assessment Results for {studentName}
        </h1>
        <p className='text-brand-muted max-w-3xl text-sm leading-relaxed'>
          Based on your recent quiz evaluation session where you scored a
          verified{' '}
          <span className='text-brand-primary font-bold'>
            {assessment?.verified_match_score}% accuracy
          </span>{' '}
          across your skills matrix, your tailored pathways are ready.
        </p>
      </div>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
        {recommendations.map(rec => (
          <div
            key={rec.id}
            className='bg-canvas-panel border-border-subtle hover:border-brand-primary/40 flex h-full flex-col rounded-2xl border p-6 shadow-sm transition-all duration-200'
          >
            <div className='mb-4 flex items-start justify-between gap-2'>
              <h2 className='text-brand-dark text-lg leading-tight font-bold tracking-tight'>
                {rec.title}
              </h2>
              <div
                className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${rec.match_percentage >= 80 ? 'bg-feedback-success/10 text-feedback-success' : 'bg-brand-primary/10 text-brand-primary'}`}
              >
                {rec.match_percentage}% Match
              </div>
            </div>

            <p className='text-brand-muted mb-6 flex-1 text-xs leading-relaxed'>
              {rec.description}
            </p>

            <div className='mb-8 space-y-5'>
              <div>
                <h3 className='text-brand-secondary mb-3 text-xs font-bold tracking-wider uppercase'>
                  Verified Strengths
                </h3>
                <ul className='space-y-2'>
                  {rec.strengths.map((str, i) => (
                    <li
                      key={i}
                      className='text-brand-dark flex items-start gap-2 text-xs'
                    >
                      <CheckCircle2Icon
                        size={14}
                        className='text-feedback-success mt-0.5 shrink-0'
                      />
                      {str}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className='text-brand-secondary mb-3 text-xs font-bold tracking-wider uppercase'>
                  Identified Gaps
                </h3>
                <ul className='space-y-2'>
                  {rec.gaps.map((gap, i) => (
                    <li
                      key={i}
                      className='text-brand-dark flex items-start gap-2 text-xs'
                    >
                      <AlertTriangleIcon
                        size={14}
                        className='text-feedback-warning mt-0.5 shrink-0'
                      />
                      {gap}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* We now pass the title via modern URL search parameters for pure navigation stability! */}
            <Link
              to={`/roadmap?job=${encodeURIComponent(rec.title)}`}
              className='bg-canvas-inset border-border-subtle text-brand-dark hover:bg-canvas-default hover:border-brand-primary/50 mt-auto inline-flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors'
            >
              View Personalized Roadmap <ArrowRightIcon size={14} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
```

```jsx
import { useLocation, useNavigate } from 'react-router';
import { ExternalLinkIcon, CheckIcon, ArrowLeftIcon } from 'lucide-react';
import toast from 'react-hot-toast';

import {
  useTimelineRoadmap,
  useUpdateRoadmapProgress,
} from '../hooks/useRecommendations';
import Spinner from '../../../components/Spinner';
import { useUser } from '../../authentication/hooks/useUser';

export default function RoadmapView() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useUser();

  // Extract the target job name directly out of the browser's native URL search bar
  const searchParams = new URLSearchParams(location.search);
  const chosenJob = searchParams.get('job');

  // Trigger our unified database-first hook
  const {
    data: roadmapInstance,
    isLoading,
    error,
  } = useTimelineRoadmap(user?.id, chosenJob);
  const { mutate: syncProgress } = useUpdateRoadmapProgress();

  if (isLoading) {
    return (
      <div className='bg-canvas-default flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center font-sans'>
        <Spinner />
        <p className='text-brand-muted mt-2 animate-pulse text-sm'>
          SkillBridge AI sync loading your persistent roadmap tracking
          profile...
        </p>
      </div>
    );
  }

  if (error || !roadmapInstance) {
    return (
      <div className='bg-canvas-default flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-4 text-center font-sans'>
        <p className='text-feedback-danger font-medium'>
          Failed to load the active timeline profile row parameters.
        </p>
        <button
          onClick={() => navigate('/recommendations')}
          className='text-brand-primary mt-4 text-sm font-semibold hover:underline'
        >
          Go Back to Recommendations
        </button>
      </div>
    );
  }

  // Read the milestones array directly out of our PostgreSQL JSONB cell
  const milestones = roadmapInstance.timeline_milestones_json || [];

  const toggleStepComplete = id => {
    const updatedMilestones = milestones.map(step => {
      if (step.id === id) {
        return { ...step, completed: !step.completed };
      }
      return step;
    });

    // Fire mutation patch directly to database row
    syncProgress(
      {
        roadmapId: roadmapInstance.id,
        updatedMilestones,
      },
      {
        onSuccess: () => {
          toast.success('Progress saved online!');
        },
        onError: err => {
          toast.error('Sync failed: ' + err.message);
        },
      },
    );
  };

  return (
    <div className='bg-canvas-default mx-auto min-h-[calc(100vh-4rem)] max-w-5xl p-4 font-sans md:p-8'>
      <div className='mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center'>
        <div>
          <h1 className='text-brand-dark text-2xl font-bold'>
            Learning Roadmap
          </h1>
          <p className='text-brand-muted mt-1 text-sm'>
            Persistent curriculum tracker for your role as a{' '}
            <span className='text-brand-primary font-bold'>{chosenJob}</span>.
          </p>
        </div>
        <button
          onClick={() => navigate('/recommendations')}
          className='text-brand-muted hover:text-brand-dark border-border-subtle bg-canvas-panel inline-flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-2 text-sm shadow-sm transition-colors'
        >
          <ArrowLeftIcon size={16} /> Back to Results
        </button>
      </div>

      <div className='bg-canvas-panel border-border-subtle relative rounded-2xl border p-6 shadow-sm md:p-10'>
        <div className='bg-border-subtle absolute top-12 bottom-12 left-10.75 z-0 w-0.5' />

        <div className='relative z-10 space-y-12'>
          {milestones.map(step => {
            const isStepDone = step.completed;
            return (
              <div key={step.id} className='relative flex items-start gap-6'>
                <div className='mt-1 shrink-0'>
                  <div
                    onClick={() => toggleStepComplete(step.id)}
                    className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 transition-all duration-200 ${
                      isStepDone
                        ? 'bg-feedback-success border-feedback-success text-white shadow-sm'
                        : 'bg-canvas-inset border-border-subtle hover:border-brand-primary text-transparent'
                    }`}
                  >
                    <CheckIcon
                      size={18}
                      className={isStepDone ? 'block' : 'hidden'}
                    />
                  </div>
                </div>

                <div
                  className={`bg-canvas-panel flex-1 rounded-xl border p-5 transition-all duration-200 ${isStepDone ? 'border-feedback-success/40 bg-feedback-success/5' : 'border-border-subtle'}`}
                >
                  <div className='mb-4 flex flex-col justify-between gap-4 md:flex-row md:items-center'>
                    <div>
                      <span className='text-brand-secondary mb-1 block text-xs font-bold tracking-wider uppercase'>
                        {step.month}
                      </span>
                      <h3
                        className={`text-brand-dark text-base font-bold ${isStepDone ? 'text-brand-muted line-through' : ''}`}
                      >
                        {step.title}
                      </h3>
                    </div>

                    <label className='group flex shrink-0 cursor-pointer items-center gap-2 select-none'>
                      <input
                        type='checkbox'
                        checked={isStepDone}
                        onChange={() => toggleStepComplete(step.id)}
                        className='hidden'
                      />
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded border transition-colors ${isStepDone ? 'bg-brand-primary border-brand-primary text-white' : 'border-border-subtle bg-canvas-inset group-hover:border-brand-primary'}`}
                      >
                        {isStepDone && <CheckIcon size={14} />}
                      </div>
                      <span className='text-brand-muted group-hover:text-brand-dark text-xs font-semibold'>
                        Mark month complete
                      </span>
                    </label>
                  </div>

                  <div className='border-border-subtle/50 mt-4 flex flex-wrap gap-y-2 border-t pt-4'>
                    {step.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-brand-primary mr-6 inline-flex items-center gap-1.5 text-xs font-semibold hover:underline'
                      >
                        {link.text} <ExternalLinkIcon size={12} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
```

```js
import { useQuery, useMutation } from '@tanstack/react-query';
import { generateAssessmentQuestions } from '../../../services/gemini';
import { supabase } from '../../../services/supabase';

/**
 * React Query hook to fetch and cache Gemini AI generated multi-choice questions
 */
export function useAssessmentQuestions(skills) {
  return useQuery({
    queryKey: ['assessmentQuestions', skills],
    queryFn: () => generateAssessmentQuestions(skills),
    enabled: !!skills && skills.length > 0, // Only execute if skills array has data
    staleTime: Infinity, // Keep the generated test stable for the duration of the exam session
    retry: 1,
  });
}

/**
 * Mutation hook to log exam data into public.assessments inside Supabase
 */
export function useSubmitAssessment() {
  return useMutation({
    mutationFn: async ({
      userId,
      discipline,
      selectedSkills,
      verifiedScore,
      rawPayload,
    }) => {
      const { data, error } = await supabase
        .from('assessments')
        .insert([
          {
            user_id: userId,
            tested_discipline: discipline,
            selected_skills: selectedSkills,
            verified_match_score: verifiedScore,
            raw_performance_payload: rawPayload,
          },
        ])
        .select()
        .single();

      if (error) throw new Error(error.message);
      return data;
    },
  });
}
```

```jsx
import { useState } from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { useNavigate } from 'react-router';

const categories = [
  {
    title: 'Technology',
    skills: [
      'React',
      'Python',
      'Node.js',
      'AWS',
      'Cybersecurity',
      'Data Analysis',
      'UI/UX Design',
      'Machine Learning',
    ],
  },
  {
    title: 'Engineering',
    skills: [
      'Mechanical Design',
      'AutoCAD',
      'Circuit Analysis',
      'Robotics',
      'Civil Planning',
      'Thermodynamics',
    ],
  },
  {
    title: 'Business',
    skills: [
      'Financial Modeling',
      'Project Management',
      'Marketing Strategy',
      'Sales',
      'Agile',
      'Business Analytics',
    ],
  },
  {
    title: 'Healthcare',
    skills: [
      'Patient Care',
      'Medical Coding',
      'Anatomy',
      'Clinical Research',
      'Public Health',
      'Pharmacology',
    ],
  },
];

export default function SkillSelector() {
  const navigate = useNavigate();
  const [selectedSkills, setSelectedSkills] = useState([]);

  const toggleSkill = skill => {
    setSelectedSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill],
    );
  };

  const handleProceed = () => {
    if (selectedSkills.length === 0) return;
    // Pass the selected skills into the router state history buffer safely
    navigate('/assessment', { state: { skills: selectedSkills } });
  };

  return (
    <div className='mx-auto max-w-5xl p-4 pb-32 md:p-8'>
      <div className='mb-8'>
        <h1 className='text-brand-dark text-2xl font-bold'>
          Interactive Skill Triage
        </h1>
        <p className='text-brand-muted mt-1'>
          Select the skills you currently possess to tailor your automated
          assessment parameters.
        </p>
      </div>

      <div className='space-y-10'>
        {categories.map(category => (
          <div key={category.title}>
            <h2 className='text-brand-secondary mb-4 text-sm font-semibold tracking-wide uppercase'>
              {category.title}
            </h2>
            <div className='flex flex-wrap gap-3'>
              {category.skills.map(skill => {
                const isSelected = selectedSkills.includes(skill);
                return (
                  <button
                    key={skill}
                    onClick={() => toggleSkill(skill)}
                    className={`inline-flex cursor-pointer items-center rounded-full border px-4 py-2 transition-all ${
                      isSelected
                        ? 'bg-brand-primary border-brand-primary text-white shadow-sm'
                        : 'bg-canvas-inset border-border-subtle text-brand-dark hover:border-brand-primary hover:bg-canvas-panel'
                    }`}
                  >
                    {skill}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Sticky Bottom CTA */}
      <div className='bg-canvas-panel border-border-subtle fixed right-0 bottom-0 left-0 z-20 border-t p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] md:left-64 md:p-6'>
        <div className='mx-auto flex max-w-5xl items-center justify-between'>
          <div className='text-brand-muted text-sm'>
            <span className='text-brand-dark font-bold'>
              {selectedSkills.length}
            </span>{' '}
            skills selected
          </div>
          <button
            onClick={handleProceed}
            disabled={selectedSkills.length === 0}
            className={`inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium transition-colors ${
              selectedSkills.length > 0
                ? 'bg-brand-primary hover:bg-brand-primary/90 cursor-pointer text-white'
                : 'bg-canvas-inset text-brand-muted border-border-subtle cursor-not-allowed border'
            }`}
          >
            Continue to Assessment
            <ArrowRightIcon size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
```

```jsx
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ClockIcon, ArrowRightIcon, ArrowLeftIcon } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router';
import toast from 'react-hot-toast';

import {
  useAssessmentQuestions,
  useSubmitAssessment,
} from '../hooks/useAssessment';
import { useUser } from '../../authentication/hooks/useUser';
import Spinner from '../../../components/Spinner';

export default function TestingArena() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useUser();
  const { mutate: submitAssessment, isPending: isSubmitting } =
    useSubmitAssessment();

  const selectedSkills = useMemo(() => {
    return location.state?.skills || [];
  }, [location.state?.skills]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);

  const {
    data: questions,
    isLoading,
    error,
  } = useAssessmentQuestions(selectedSkills);

  useEffect(() => {
    if (selectedSkills.length === 0) {
      toast.error('No selected skills found. Redirecting to Triage.');
      navigate('/skill-selector', { replace: true });
    }
  }, [selectedSkills, navigate]);

  // Automatically configure the countdown clock based on question volume (30s per question)
  useEffect(() => {
    if (questions && questions.length > 0) {
      setTimeLeft(questions.length * 30);
    }
  }, [questions]);

  const handleSubmitQuiz = useCallback(() => {
    let correctCount = 0;
    const evaluationPayload = questions.map((q, idx) => {
      const chosenIdx = selectedAnswers[idx];
      const isCorrect = chosenIdx === q.correct_option_index;
      if (isCorrect) correctCount++;

      return {
        questionId: q.id,
        skill: q.skill,
        questionText: q.question,
        userSelection: chosenIdx,
        correctSelection: q.correct_option_index,
        status: isCorrect ? 'CORRECT' : 'INCORRECT',
      };
    });

    const finalScorePercentage = Math.round(
      (correctCount / questions.length) * 100,
    );

    submitAssessment(
      {
        userId: user.id,
        discipline: 'General Technology Evaluation',
        selectedSkills,
        verifiedScore: finalScorePercentage,
        rawPayload: evaluationPayload,
      },
      {
        onSuccess: () => {
          toast.success('Assessment evaluation submitted successfully!');
          navigate('/recommendations');
        },
        onError: err => {
          toast.error('Failed to register assessment logs: ' + err.message);
        },
      },
    );
  }, [
    navigate,
    questions,
    selectedAnswers,
    submitAssessment,
    selectedSkills,
    user.id,
  ]);

  useEffect(() => {
    // Only start the countdown if questions have loaded and time is allocated
    if (!questions || questions.length === 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitQuiz(); // Automatically submit the exam if the clock hits 00:00
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
    // Include questions and handleSubmitQuiz as dependencies to keep the submission handler fresh
  }, [questions, handleSubmitQuiz]);

  if (isLoading) {
    return (
      <div className='bg-canvas-default flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center font-sans'>
        <Spinner />
        <p className='text-brand-muted mt-2 animate-pulse text-sm'>
          SkillBridge compiling your dynamic interview questions...
        </p>
      </div>
    );
  }

  if (error || !questions || questions.length === 0) {
    return (
      <div className='bg-canvas-default flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-4 text-center'>
        <p className='text-feedback-danger font-medium'>
          Failed to compile assessment questions from the AI engine.
        </p>
        <button
          onClick={() => navigate('/skill-selector')}
          className='text-brand-primary mt-4 text-sm font-semibold hover:underline'
        >
          Go Back and Retry
        </button>
      </div>
    );
  }

  const formatTime = seconds => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSelect = optionIndex => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentIndex]: optionIndex,
    });
  };

  const currentQ = questions[currentIndex];
  const progressPercentage = ((currentIndex + 1) / questions.length) * 100;
  const hasAnsweredCurrent = selectedAnswers[currentIndex] !== undefined;

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      handleSubmitQuiz();
    }
  };

  return (
    <div className='bg-canvas-default flex min-h-[calc(100vh-4rem)] flex-col font-sans'>
      {/* Top Progress Dashboard Frame */}
      <div className='bg-canvas-panel border-border-subtle sticky top-0 z-10 border-b px-4 py-4 md:px-8'>
        <div className='mx-auto flex max-w-4xl items-center justify-between gap-6'>
          <div className='flex-1'>
            <div className='text-brand-muted mb-2 flex justify-between text-xs font-medium'>
              <span>
                Question {currentIndex + 1} of {questions.length} (
                {currentQ.skill})
              </span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <div className='bg-canvas-inset h-2 w-full overflow-hidden rounded-full'>
              <div
                className='bg-brand-primary h-full rounded-full transition-all duration-300 ease-out'
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
          <div className='bg-canvas-inset border-border-subtle flex items-center gap-2 rounded-lg border px-4 py-2'>
            <ClockIcon
              size={18}
              className={
                timeLeft < 60
                  ? 'text-feedback-danger animate-pulse'
                  : 'text-brand-muted'
              }
            />
            <span
              className={`font-mono font-bold ${timeLeft < 60 ? 'text-feedback-danger' : 'text-brand-dark'}`}
            >
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>
      </div>

      {/* Main Questionnaire Box */}
      <div className='flex-1 p-4 md:p-8'>
        <div className='bg-canvas-panel border-border-subtle mx-auto mt-4 max-w-3xl rounded-2xl border p-6 shadow-md md:mt-8 md:p-10'>
          <h2 className='text-brand-dark mb-8 text-xl leading-relaxed font-bold md:text-2xl'>
            {currentQ.question}
          </h2>

          <div className='space-y-4'>
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedAnswers[currentIndex] === idx;
              return (
                <div
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`flex cursor-pointer items-start gap-4 rounded-xl border p-4 transition-all md:p-5 ${
                    isSelected
                      ? 'border-brand-secondary bg-brand-secondary/5 border-2 shadow-sm'
                      : 'border-border-subtle hover:border-brand-secondary hover:bg-canvas-inset'
                  }`}
                >
                  <div
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${isSelected ? 'border-brand-secondary' : 'border-border-subtle'}`}
                  >
                    {isSelected && (
                      <div className='bg-brand-secondary h-3 w-3 rounded-full' />
                    )}
                  </div>
                  <span
                    className={`text-base ${isSelected ? 'text-brand-dark font-medium' : 'text-brand-dark'}`}
                  >
                    {option}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Action Navigation Footer */}
          <div className='border-border-subtle mt-10 flex items-center justify-between border-t pt-6'>
            <button
              onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
              disabled={currentIndex === 0}
              className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-medium transition-colors ${
                currentIndex === 0
                  ? 'text-brand-muted cursor-not-allowed opacity-50'
                  : 'text-brand-dark hover:bg-canvas-inset cursor-pointer border border-transparent'
              }`}
            >
              <ArrowLeftIcon size={18} /> Previous
            </button>

            <button
              onClick={handleNext}
              disabled={!hasAnsweredCurrent || isSubmitting}
              className={`inline-flex items-center gap-2 rounded-lg px-6 py-2.5 font-medium transition-colors ${
                hasAnsweredCurrent && !isSubmitting
                  ? 'bg-brand-primary hover:bg-brand-primary/90 cursor-pointer text-white'
                  : 'bg-canvas-inset text-brand-muted border-border-subtle cursor-not-allowed border'
              }`}
            >
              {isSubmitting
                ? 'Saving Metrics...'
                : currentIndex === questions.length - 1
                  ? 'Submit Assessment'
                  : 'Next Question'}
              <ArrowRightIcon size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
```

```js
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteAssessmentRecord } from '../../../services/apiRecommendations';
import { supabase } from '../../../services/supabase';
import toast from 'react-hot-toast';

/**
 * Custom hook to aggregate historic logs for the main workspace landing page
 */
export function useDashboardData(userId) {
  return useQuery({
    queryKey: ['dashboardHistory', userId],
    queryFn: async () => {
      if (!userId) return { history: [], roadmaps: [] };

      // 1. Fetch all evaluation records ordered by newest first
      const { data: history, error: historyError } = await supabase
        .from('assessments')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (historyError) throw new Error(historyError.message);

      // 2. Fetch all persistent roadmaps saved to the profile
      const { data: roadmaps, error: roadmapError } = await supabase
        .from('roadmaps')
        .select('*')
        .eq('user_id', userId);

      if (roadmapError) throw new Error(roadmapError.message);

      return { history, roadmaps };
    },
    enabled: Boolean(userId),
    staleTime: 1000 * 60 * 2, // 2-minute refresh buffer
  });
}

/**
 * React Query mutation to handle clearing history rows with instant cache updates
 */
export function useDeleteAssessment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteAssessmentRecord,
    onSuccess: () => {
      toast.success('Evaluation record permanently removed.');
      // Invalidate the cache matrix to trigger an automatic background update across the UI
      queryClient.invalidateQueries({ queryKey: ['dashboardHistory'] });
      // Also clear active roadmap cache headers since child records cascaded away
      queryClient.invalidateQueries({ queryKey: ['activeRoadmap'] });
    },
    onError: err => {
      toast.error('Failed to clear row: ' + err.message);
    },
  });
}
```

```jsx
import {
  AlertCircleIcon,
  FileTextIcon,
  TargetIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  CheckCircle2Icon,
  Trash2Icon,
} from 'lucide-react';
import { Link } from 'react-router';

import { useUser } from '../../authentication/hooks/useUser';
import {
  useDashboardData,
  useDeleteAssessment,
} from '../hooks/useDashboardData';
import Spinner from '../../../components/Spinner';

export default function HomePage() {
  const { user, profile, isLoading: isLoadingUser } = useUser();
  const { data, isLoading: isLoadingData } = useDashboardData(user?.id);

  // Initialize our new real-time deletion engine hook
  const { mutate: deleteAssessment, isPending: isDeleting } =
    useDeleteAssessment();

  if (isLoadingUser || isLoadingData) {
    return (
      <div className='bg-canvas-default flex min-h-[calc(100vh-4rem)] items-center justify-center font-sans'>
        <Spinner />
      </div>
    );
  }

  const firstName = profile?.full_name
    ? profile.full_name.split(' ')[0]
    : 'Scholar';
  const historyLogs = data?.history || [];
  const savedRoadmaps = data?.roadmaps || [];
  const isUnlocked = historyLogs.length > 0;

  const formatDisplayDate = isoString => {
    const dateObj = new Date(isoString);
    return dateObj.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const handleDeleteClick = id => {
    if (
      window.confirm(
        'Are you absolutely sure you want to delete this evaluation? This action will permanently remove its associated learning roadmap from your profile metrics.',
      )
    ) {
      deleteAssessment(id);
    }
  };

  return (
    <div className='bg-canvas-default mx-auto min-h-[calc(100vh-4rem)] max-w-7xl space-y-6 p-4 font-sans md:p-8'>
      {/* Banner Card */}
      <div className='bg-canvas-panel border-border-subtle rounded-2xl border p-6 shadow-sm md:p-8'>
        <h1 className='text-brand-dark mb-2 text-2xl font-bold md:text-3xl'>
          Welcome back, {firstName}
        </h1>
        <p className='text-brand-muted mb-6 text-sm'>
          Here is what's happening with your career progression today.
        </p>

        {isUnlocked ? (
          <div className='bg-feedback-success/10 border-feedback-success/20 flex items-start gap-3 rounded-lg border p-4 transition-all'>
            <CheckCircle2Icon
              className='text-feedback-success mt-0.5 shrink-0'
              size={20}
            />
            <div>
              <h3 className='text-feedback-success text-sm font-bold'>
                Career Blueprint Unlocked
              </h3>
              <p className='text-feedback-success/80 mt-1 text-sm'>
                Your technical profile metrics are active! Review your
                recommended tracks below or visit your tailored timeline.
              </p>
            </div>
          </div>
        ) : (
          <div className='bg-feedback-warning/10 border-feedback-warning/20 flex items-start gap-3 rounded-lg border p-4 transition-all'>
            <AlertCircleIcon
              className='text-feedback-warning mt-0.5 shrink-0'
              size={20}
            />
            <div>
              <h3 className='text-feedback-warning text-sm font-bold'>
                Career Blueprint Locked
              </h3>
              <p className='text-feedback-warning/80 mt-1 text-sm'>
                Complete a new skill evaluation or upload your latest CV to
                unlock your personalized career roadmap.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Grid Cards Area */}
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        <div className='bg-canvas-panel border-border-subtle hover:border-brand-primary/30 flex h-full flex-col rounded-2xl border p-6 shadow-sm transition-colors md:p-8'>
          <div className='bg-brand-primary/10 text-brand-primary mb-5 flex h-12 w-12 items-center justify-center rounded-xl'>
            <TargetIcon size={24} />
          </div>
          <h2 className='text-brand-dark mb-2 text-lg font-bold'>
            Interactive Skill Triage
          </h2>
          <p className='text-brand-muted mb-8 flex-1 text-xs leading-relaxed'>
            Manually select your current skills across various disciplines to
            get an instant assessment of your career readiness.
          </p>
          <Link
            to='/skill-selector'
            className='bg-brand-primary hover:bg-brand-primary/90 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-white transition-colors'
          >
            Start Manual Test <ArrowRightIcon size={16} />
          </Link>
        </div>

        <div className='bg-canvas-panel border-border-subtle hover:border-brand-primary/30 flex h-full flex-col rounded-2xl border p-6 shadow-sm transition-colors md:p-8'>
          <div className='bg-brand-secondary/10 text-brand-secondary mb-5 flex h-12 w-12 items-center justify-center rounded-xl'>
            <FileTextIcon size={24} />
          </div>
          <h2 className='text-brand-dark mb-2 text-lg font-bold'>
            Automated CV Upload
          </h2>
          <p className='text-brand-muted mb-8 flex-1 text-xs leading-relaxed'>
            Upload your resume and let our engine automatically extract your
            experiences to build your profile instantly.
          </p>
          <Link
            to='/cv-upload'
            className='bg-canvas-panel border-border-subtle text-brand-dark hover:border-brand-primary hover:text-brand-primary inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors'
          >
            Upload Document <ArrowRightIcon size={16} />
          </Link>
        </div>
      </div>

      {/* History Log Table Area */}
      <div className='bg-canvas-panel border-border-subtle overflow-hidden rounded-2xl border shadow-sm'>
        <div className='border-border-subtle flex items-center justify-between border-b p-6'>
          <h2 className='text-brand-dark text-base font-bold'>
            Evaluation History Logs
          </h2>
          <span className='text-brand-muted bg-canvas-inset rounded-full px-2.5 py-1 text-xs font-semibold'>
            {historyLogs.length} Session{historyLogs.length !== 1 ? 's' : ''}
          </span>
        </div>

        {historyLogs.length === 0 ? (
          <div className='text-brand-muted p-12 text-center text-sm font-medium'>
            No evaluation records found. Complete a triage scan module above to
            populate history metrics.
          </div>
        ) : (
          <div className='overflow-x-auto'>
            <table className='w-full border-collapse text-left'>
              <thead>
                <tr className='bg-canvas-inset text-brand-muted text-xxs border-border-subtle border-b font-bold tracking-wider uppercase select-none'>
                  <th className='px-6 py-4 font-semibold'>Date Evaluated</th>
                  <th className='px-6 py-4 font-semibold'>Discipline Branch</th>
                  <th className='px-6 py-4 font-semibold'>
                    Verified Score Met
                  </th>
                  <th className='px-6 py-4 text-right font-semibold'>
                    Actions Control
                  </th>
                </tr>
              </thead>
              <tbody className='divide-border-subtle divide-y'>
                {historyLogs.map(row => {
                  const correspondingRoadmap = savedRoadmaps.find(
                    rm =>
                      rm.assessment_id === row.id ||
                      rm.assessment_id ===
                        '00000000-0000-0000-0000-000000000000',
                  );
                  const targetJobName =
                    correspondingRoadmap?.target_career_title ||
                    row.selected_skills[0] ||
                    'Engineering';

                  return (
                    <tr
                      key={row.id}
                      className='hover:bg-canvas-inset/40 group transition-colors'
                    >
                      <td className='text-brand-dark px-6 py-4 text-xs font-medium whitespace-nowrap'>
                        {formatDisplayDate(row.created_at)}
                      </td>
                      <td className='text-brand-dark max-w-xs truncate px-6 py-4 text-xs font-bold'>
                        {row.tested_discipline}
                      </td>
                      <td className='px-6 py-4 text-xs whitespace-nowrap'>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-bold ${row.verified_match_score >= 70 ? 'bg-feedback-success/10 text-feedback-success' : 'bg-feedback-warning/10 text-feedback-warning'}`}
                        >
                          {row.verified_match_score}%
                        </span>
                      </td>
                      <td className='flex h-14 items-center justify-end gap-4 px-6 py-4 text-right text-xs whitespace-nowrap'>
                        <Link
                          to={
                            correspondingRoadmap
                              ? `/roadmap?job=${encodeURIComponent(targetJobName)}`
                              : '/recommendations'
                          }
                          className='text-brand-primary inline-flex items-center gap-1 font-bold hover:underline'
                        >
                          {correspondingRoadmap ? 'View Roadmap' : 'Review'}{' '}
                          <ChevronRightIcon size={14} />
                        </Link>

                        {/* Elegant delete row icon utility */}
                        <button
                          onClick={() => handleDeleteClick(row.id)}
                          disabled={isDeleting}
                          className='text-brand-muted hover:text-feedback-danger cursor-pointer rounded-md p-1 opacity-60 transition-colors group-hover:opacity-100 disabled:opacity-30'
                          title='Delete Assessment Record'
                        >
                          <Trash2Icon size={14} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
```

