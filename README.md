# Typescript Template
A minimal TS project template.

## Package Manager
This project is built with **pnpm** as the primary package manager. While you can use alternative package managers like npm or yarn, please note that you will need to make some modifications to configuration files to ensure proper functionality.

If you choose to use npm or yarn instead of pnpm, you'll need to:

1. Update any pnpm-specific commands in scripts (`package.json`, `.husky/pre-commit`)
2. Remove `pnpm-lock.yaml` and install your own lock file

## What's Inside

### Typescript
- typescript@5.7.3
- eslint@9.21.0
- prettier@3.5.2
- husky@9.1.7

### ESM Package
The project is intended to be used as an ESM package. However, `tsconfig.json` and `package.json` are configured to target **both** ES modules and CommonJS modules.

### Testing
I try to use Test Runner from native Nodejs. But, you may install your own testing framework.
