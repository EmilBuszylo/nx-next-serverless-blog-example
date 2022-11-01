export default {
  handler: 'src/functions/categories-getter/handler.main',
  events: [
    {
      http: {
        method: 'get',
        path: 'api/categories',
      },
    },
  ],
}
