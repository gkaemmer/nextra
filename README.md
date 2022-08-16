# Oso's Nextra Theme

This fork slightly customizes the `nextra-theme-docs` theme to enable custom
features for Oso's docs site.

**Ideally in the future Nextra is suitably customizable that we don't need this
repo at all. We should try to make as few changes as possible to make merging
upstream changes easier.**

## Development

How to use this for local development of the Oso Cloud Docs:

First, install [`pnpm`](https://pnpm.io/installation) if you haven't already:

```
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

Then, in this repository, run:

```sh
# Install requirements for running this monorepo
pnpm i

cd packages/nextra-theme-docs
npm link
pnpm i
# This will watch for changes
pnpm dev
```

In the Oso Cloud Docs folder, run:

```
npm link nextra-theme-docs-oso
```

Then, you should be able to make changes to `packages/nextra-theme-docs` and see
those changes reflected in the Oso Cloud Docs.

## Publishing

When it comes time to publish your changes to `nextra-theme-docs-oso`, just run
`npm publish` (TODO: this should be automated eventually if we're often making
changes to this repo):

```sh
cd packages/nextra-theme-docs
npm publish
```

NOTE: Original README.md below this line.

-------

# Nextra

Nextra is a Next.js plugin that renders your **MDX files** with custom themes.

## Development

### Installation

The Nextra repository uses [PNPM Workspaces](https://pnpm.io/workspaces) and [Turborepo](https://github.com/vercel/turborepo). To install dependencies, just simply run `pnpm` in the project root directory.

### Build Nextra Core

```bash
cd packages/nextra
pnpm build
```

Watch mode: `yarn dev`

### Build Nextra Theme

```bash
cd packages/nextra-theme-docs
pnpm build
```

Watch mode: `pnpm dev`
Watch mode (layout only): `pnpm dev:layout`
Watch mode (style only): `pnpm dev:tailwind`

### Development

You can also debug them together with a website locally. For instance, to start examples/docs locally, run

```bash
cd examples/docs
pnpm dev
```

Any change to example/docs will be re-rendered instantly.

If you update the core or theme packages, a rebuild is required. Or you can use the watch mode for both nextra and the theme in separated terminals.
