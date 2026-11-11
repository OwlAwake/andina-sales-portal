# Andina Sales Portal

A small SAPUI5 app built as a learning project for a fictional client,
**Andina Distributors**. This is the first deliverable of my SAP
front-end learning path.

## Business problem
Salespeople need a simple portal entry point: sign in with their name and
see a welcome message. This is the base for the product list and
detail screens built in the following weeks.

## Features
- Welcome message personalized with the salesperson's name
- Button that shows the current date and time
- All texts stored in i18n (no hard-coded UI text)
- Responsive layout using SAP margin classes and flexbox containers

## Tech stack
- SAPUI5 1.154.0 (freestyle, XML views, JavaScript controllers)
- Theme: SAP Horizon
- SAP Business Application Studio (SAP BTP Trial)
- ESLint configuration from SAP Fiori tools

## How to run
1. Install an active Node.js LTS version (https://nodejs.org)
2. Clone the repository
3. Install dependencies: `npm install`
4. Start the app: `npm start`
5. Open the URL shown in the terminal

## Screenshot
![App screenshot](docs/screenshot.png)

## What I learned
- Project structure: `manifest.json`, `webapp/`, views and controllers
- Connecting XML view events to controller functions
- Reading UI controls with `byId` and updating them with `setText`
- Using i18n and `getResourceBundle` for texts
- Why controls need an explicit `id` when `flexEnabled` is true

## Roadmap
- [x] Week 1: Hello World and base layout
- [ ] Weeks 2-4: Product list, OData and detail page

## Application details (generated)

| | |
| --- | --- |
| **Generator** | SAP Fiori Application Generator 1.34.0 |
| **Platform** | SAP Business Application Studio |
| **Template** | Basic |
| **Service type** | None |
| **Module name** | andinasalesportal |
| **Namespace** | andina |
| **UI5 theme** | sap_horizon |
| **UI5 version** | 1.154.0 |
| **TypeScript** | No |
| **ESLint** | Yes ([rules](https://www.npmjs.com/package/@sap-ux/eslint-plugin-fiori-tools#rules)) |

## Troubleshooting (Week 1)

**1. Empty control ID with `flexEnabled`**
- **Error:** `The "Button" class can't have an empty ID attribute when flexEnabled is "true" in manifest.json.`
- **Cause:** with `flexEnabled: true`, every control needs an explicit `id`, and my `Button` had none.
- **Fix:** added `id="signInButton"`. Rule from then on: every new control gets an `id`.

**2. Variable name mismatch in the controller**
- **Error:** `ReferenceError: local is not defined` (nothing was shown on screen).
- **Cause:** I declared `const time = ...` but called `setText(local)`. A variable must be used with the exact name it was declared with.
- **Fix:** renamed the variable to `dateTime` and used the same name in `setText`. I also renamed the handler to `onShowDateTime` and updated the `press` attribute in the view to match.

**3. `git push` seemed frozen in SAP Business Application Studio**
- **Symptom:** the terminal stayed idle after `git push -u origin main` and did not accept input.
- **Cause:** the credentials prompt did not appear in the terminal. BAS shows it in an input box at the top of the editor.
- **Fix:** entered my GitHub username and a personal access token (scope `repo`) in that box. The token is never stored in the repo.
