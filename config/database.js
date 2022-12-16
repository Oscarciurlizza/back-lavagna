module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cee6ikpgp3jvikciuv1g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'lavagna'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'zVFfPIHsLZRdbH9wyWAOT6almbnMvK1z'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
