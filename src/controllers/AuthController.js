import Cognito from "../service/CognitoService";

class AuthController {
  constructor() {
    this.cognito = new Cognito();
  }
  async signIn(req, res) {
    try {
      const { username, password } = req.body;
      const result = await this.cognito.login(username, password);
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "internal server error" });
    }
  }

  async signUp(req, res) {
    try {
      const { username, password } = req.body;
      const result = await this.cognito.register(username, password);
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "internal server error" });
    }
  }

  async addUserInGroup(req, res) {
    try {
      const { username, groupname } = req.body;
      const result = await this.cognito.addUserInGroup(username, groupname);
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "internal server error" });
    }
  }

  async removeUserFromGroup(req, res) {
    try {
      const { username, groupname } = req.body;
      const result = await this.cognito.removeUserFromGroup(
        username,
        groupname
      );
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "internal server error" });
    }
  }

  async lisUsers(req, res) {
    try {
      const result = await this.cognito.listUsers();
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "internal server error" });
    }
  }

  async updateAttributes(req, res) {
    try {
      const { username, attributes } = req.body;
      const result = await this.cognito.updateAttributes(username, attributes);
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "internal server error" });
    }
  }
}

export default AuthController;
