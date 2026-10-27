// Lab 5: frontend configuration. This is the ONLY file you edit to point the
// frontend at a different API. Nothing in this file is secret: every visitor
// can read it, so never put DATABASE_URL or any secret key here.

// On your laptop (localhost) the page calls the local API.
// On Vercel it calls your deployed API project.
const isLocal = ['localhost', '127.0.0.1'].includes(window.location.hostname);

// Lab 5 Part 11: replace YOUR-API-PROJECT with the domain of your Vercel API project
const API_BASE_URL = isLocal
  ? 'https://cloud-issue-tracker-a2-phi.vercel.app/api/issues'
  : 'https://cloud-issue-tracker-a2-phi.vercel.app/api/issues';
