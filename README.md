# strapi-seed
A foundational starter project for building Strapi applications with clean architecture, best practices, and modular structure.

## About

**strapi-seed** is a minimal yet extensible Strapi CMS base project, maintained alongside production projects to ensure it reflects real-world engineering improvements. It is ideal for bootstrapping new Strapi apps with a strong foundation and opinionated structure.

This project serves as a reusable starting point for new content-driven applications.

---

## Features
This project integrates essential features powered by reliable cloud platforms and automation tools:

- **Media Files**: Handled using [Cloudinary](https://cloudinary.com) for efficient cloud-based image and video storage, optimization, and delivery.
- **Automated DB Backups**: Implemented with **GitHub Actions** and cloud storage solutions like **AWS S3** or other S3-compatible secure storage (e.g., [Backblaze B2](https://www.backblaze.com/b2/)).
- **Configuration Sync**:  Supports syncing Strapi configurations (e.g., content-types, components, settings) via scripts
- **Dynamic Webhook**: Webhook configuration for publish/unpublish events. Specify webhook URL in the environment.
- **Linting and Formatting**: ESLint and Prettier

---

## Getting Started

### Clone the Repository

```bash
git clone git@github.com:cdiptangshu/strapi-seed.git
cd strapi-seed
```

### Install Dependencies
```
npm install
```

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


## Automated DB Backup with GitHub Actions

This project supports **automated backups of the database** using **GitHub Actions**. You can configure a scheduled workflow to periodically back up the database to a secure storage provider (e.g., AWS S3-compatible service such as Backblaze B2). 
> **Note:** Currently only **PostgreSQL** database is supported.

### Setup Instructions

To enable this feature, the necessary **secrets and variables** need to be set in the GitHub repository settings.

#### 1. Navigate to GitHub Repository Settings:

* Go to **GitHub > \[Repository Name] > Settings > Secrets and variables > Actions**

#### 2. Configure the Following

| Name                    | Type     | Description                                                                     |
| ----------------------- | -------- | ------------------------------------------------------------------------------- |
| `DB_USERNAME`           | Variable | Database username                                                               |
| `DB_HOST`               | Variable | Hostname of the the PostgreSQL server                                           |
| `DB_PORT`               | Variable | Port of the PostgreSQL server                                                   |
| `DB_BACKUP_FILENAME`    | Variable | Name of the backup file (e.g., `backup.sql`)                                    |
| `AWS_S3_BUCKET`         | Variable | Name of the S3-compatible bucket to store the backup                            |
| `AWS_REGION`            | Variable | Region of S3-compatible service                                                 |
| `AWS_S3_ENDPOINT`       | Variable | Endpoint URL for the S3-compatible service                                      |
| `DB_PASSWORD`           | Secret   | Password for the PostgreSQL user                                                |
| `AWS_ACCESS_KEY_ID`     | Secret   | Access key ID for S3-compatible service                                         |
| `AWS_SECRET_ACCESS_KEY` | Secret   | Secret access key for S3-compatible service                                     |
---

Once configured, a GitHub Actions workflow `db-backup.yml` can run on the defined schedule to securely back up the database and upload it to the specified storage bucket.

---

## License

<a href="https://github.com/cdiptangshu/strapi-seed">strapi-seed</a> © 2025 by <a href="https://diptangshu.com">Diptangshu Chakrabarty</a> is licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a><img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" style="max-width: 1em;max-height:1em;margin-left: .2em;">
