import type Koa from 'koa';

export default [
  {
    method: 'GET',
    path: '/health',
    handler: async (ctx: Koa.Context) => {
      try {
        // Check database connection
        await strapi.db.connection.raw('SELECT 1');

        ctx.body = {
          status: 'ok',
          uptime: process.uptime(),
          timestamp: Date.now(),
        };
      } catch {
        ctx.status = 500;
        ctx.body = {
          status: 'error',
          message: 'Database unavailable',
        };
      }
    },
    config: {
      auth: false,
    },
  },
];
