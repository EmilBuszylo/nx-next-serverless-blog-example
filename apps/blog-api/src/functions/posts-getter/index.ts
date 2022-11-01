export default {
  handler: 'src/functions/posts-getter/handler.main',
  events: [
    {
      http: {
        method: 'get',
        path: 'api/posts',
      },
    },
  ],
}
