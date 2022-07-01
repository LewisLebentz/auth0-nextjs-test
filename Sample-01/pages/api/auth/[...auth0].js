import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

const audience = process.env.AUTH0_AUDIENCE;
const scope = process.env.AUTH0_SCOPE;

export default handleAuth({
  async login(req, res) {
    try {
      await handleLogin(req, res, {
        authorizationParams: {
          audience: audience, // or AUTH0_AUDIENCE
          // Add the `offline_access` scope to also get a Refresh Token
          scope: scope // or AUTH0_SCOPE
        }
      });
    } catch (error) {
      res.status(error.status || 400).end(error.message);
    }
  }
});
