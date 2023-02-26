# Remix defer bug repro

Details: ISSUE LINK HERE

## Steps to reproduce

Install deps:

```
npm install
```

Run dev server:

```
npm run dev
```

Navigate to `http://localhost:3000` - the page should be blank apart from the 'Defer bug repro' heading as `defer` isn't working.

Stop the dev server and comment out the `serverDependenciesToBundle` entry in `remix.config.js`.

Re-run the dev server, and you should now see a loading placeholder followed by a message as `defer` executes successfully.
