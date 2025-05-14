# diptangshu-cms
CMS backend for [diptangshu.com](https://diptangshu.com).

## About

A Strapi backend for the website. Created from using [strapi-seed](https://github.com/cdiptangshu/strapi-seed) 

---

## Features

(TBD)

---

## Getting Started

### Clone the Repository

```bash
git clone git@github.com:cdiptangshu/diptangshu-cms.git
cd diptangshu-cms
```

### Install Dependencies
```
npm install
```
Here’s a clean and concise section you can add to your `README.md` to document the `.env` file setup:

### Setup Environment

To configure the local environment, follow these steps:

1. **Copy the `.env.example` file**:

   ```bash
   cp .env.example .env
   ```

2. **Update the `.env` file**:
   Open the `.env` file and modify the environment variables as necessary for your local setup.


### Run the Development Server
```
npm run develop
```

Here’s a clear and concise section you can add to your `README.md` to document the `build` and `start` scripts for your Strapi project:

---

## Build & Deploy in Production

Make sure the environment variables are set up correctly in the **production environment**.

These commands are used to run in production mode.

### Build

```bash
npm run build
```

Builds the Strapi admin panel for production. This compiles the admin UI and prepares the project for deployment.

> Must be run before `start` in production environments.

### Start

```bash
npm run start
```

Starts the Strapi server in **production mode** using the previously built admin panel.

---

## Linting

This project uses **ESLint** and **Prettier** to enforce consistent code style and formatting.

### Run Linter

```bash
npm run lint
```

Checks your code for syntax and style issues based on the configured rules.

### Fix Lint Errors Automatically

```bash
npm run lint:fix
```

Automatically fixes fixable linting and formatting issues.

---

### Configuration Files

* `.eslintrc.js` — ESLint rules and plugins
* `.prettierrc` — Prettier formatting rules
* `.eslintignore` — Paths to ignore from linting

---

Would you like me to generate a working ESLint + Prettier config for you (with TypeScript + Strapi presets)?

---

## Configuration Sync Commands

This project supports syncing Strapi configurations (e.g., content-types, components, settings) via custom scripts. These are useful for backing up or replicating settings across environments.

### Export Configuration
```
npm run cs export
```
Exports the current project’s configuration (content-types, components, roles, permissions, etc.) to the config/sync/ directory.

Use the -- --yes flag to auto-confirm prompts:
```
npm run cs export -- --yes
```

### Import Configuration
```
npm run cs import
```
Imports configuration from the config/sync/ directory back into the Strapi app. This overwrites existing definitions and should be used with care.

Use the -- --yes flag to bypass confirmation:

```
npm run cs import -- --yes
```

### Default Sync Location
Exported files will be stored in:

```
./config/sync/
```
Ensure this folder is version-controlled (or .gitignored) based on your workflow preference.


### Notes
* Make sure the Strapi server is stopped when importing configuration to avoid runtime conflicts.
* These commands use [strapi-plugin-config-sync](https://www.npmjs.com/package/strapi-plugin-config-sync) under the hood. Confirm plugin version compatibility if issues arise.

Here’s a cleaned-up and professional version of your webhook documentation:

---

## Webhook Configuration

The webhook URL should be provided via the environment variable `WEBHOOK_URL`. If this variable is not set, **no webhook will be configured**.

### Default Behavior

When `WEBHOOK_URL` is defined, a webhook will be automatically registered to trigger on the following Strapi events:

* `entry.publish`
* `entry.unpublish`

Additional configuration can be managed through the **Strapi Admin UI** under **Settings → Webhooks**.

> **Note:** The Strapi Admin UI does not currently support setting webhook URLs via environment variables, which is why this automatic setup is handled in code.

### Advanced Customization

To add custom headers or modify webhook behavior, update the `bootstrap` function in:

```
src/index.ts
```

This approach ensures webhook registration is dynamic and environment-aware, ideal for staging and production environments.

---

## Maintenance

To contribute to the seed project.
```
# In your project
git checkout -b improve-something
# Make and commit changes
git commit -am "Improve something"

# Push to strapi-seed
git push seed improve-something:improve-something
```
Create a pull request (PR) to merge the branch `imporove-something` to `main`

---

## License
(TBD)