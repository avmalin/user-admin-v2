# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```
```bash
#This command synchronizes your database schema with the schema defined in $lib/server/db/schema.js . It applies any changes in your schema directly to the database without generating a migration.
npm run db:push

# This command runs the migration scripts to update your database schema in a controlled and versioned manner.
npm run db:migrate

# This command launches a visual database studio, which allows you to explore and interact with your database visually.
npm run db:studio
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

# Authortication
we are using lucia in this project to admin users.
$lib/server/auth.ts contain all the password and session admin
/src/hooks.server.ts are test the session and user