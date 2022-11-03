# NX + Next.js + Serverless framework blog

This project was generated using [Nx](https://nx.dev).

### Requirements

This project requires node >= 16.16.0. If you use nvm, please just type nvm use command to switch your node to
appropriate version.

### Development server

Run `yarn start:all` for running frontend and backend at once. Navigate to http://localhost:4200/.
You can change default backend port by edit `BLOG_API_PORT` in .env file.

Run `yarn start [APP NAME]` for running a specific app.

*The app will automatically reload if you change any of the source files.

### Key technologies

- [Next.js](https://nextjs.org/)
- [Serverless framework](https://www.serverless.com/)
- [Tailwind](https://tailwindcss.com/)
-

### Key structure elements specific for project

```bash
├── apps - dir with applications
│   ├── blog-api - contains bakcend application endpoints, it is based on serverless lambdas.
│   ├── blog-frontend - contains frontend application based on Next.js framework. 
├── libs - dir with additional libraries 
│   ├── blog-category - describes the blog category entity and keeps an example and. 
│   ├── blog-post - describes the blog post entity and keeps an example data.
│   ├── shared - keeps additional libraries that can be shared among others.
│       ├── utils - collection of application helpers
├── tools - keeps nx custom generators
├── serverless.base.ts - base configuration of the serverless framework.
```
