export default {
  handler: 'src/functions/post-getter/handler.main',
  events: [
    {
      http: {
        method: 'get',
        path: 'api/post/{id}',
      },
    },
  ],
}
