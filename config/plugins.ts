export default ({ env }) => ({
  upload: {
    config:
      env('NODE_ENV') === 'production'
        ? {
            provider: 'cloudinary',
            providerOptions: {
              cloud_name: env('CLOUDINARY_NAME'),
              api_key: env('CLOUDINARY_KEY'),
              api_secret: env('CLOUDINARY_SECRET'),
            },
          }
        : {
            provider: 'local',
            providerOptions: {
              sizeLimit: 2000000, // 2MB
            },
          },
  },
});
