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