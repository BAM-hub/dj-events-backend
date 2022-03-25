module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6bb69e33871d8f884ae7f337ba8a3d19'),
  },
});
