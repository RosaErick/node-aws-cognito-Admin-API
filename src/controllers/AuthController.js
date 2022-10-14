import Cognito from "../service/CognitoService";

class AuthController {
  constructor() {
    this.cognito = new Cognito();
  }
  async signIn(req, res) {
    const { username, password } = req.body;
    const result = await this.cognito.login(username, password);
    res.json(result);
  }

  async signUp(req, res) {
    const { username, password } = req.body;
    const result = await this.cognito.register(username, password);
    res.json(result);
  }

  async signOut(req, res) {
    const result = await this.cognito.logout();
    res.json(result);
  }

  async addUserInGroup(req, res) {
    const { username, groupname } = req.body;
    const result = await this.cognito.addUserInGroup(username, groupname);
    res.json(result);
  }

  async removeUserFromGroup(req, res) {
    const { username, groupname } = req.body;
    const result = await this.cognito.removeUserFromGroup(username, groupname);
    res.json(result);
  }

  async lisUsers(req, res) {
    const result = await this.cognito.listUsers();
    res.json(result);
  }

  async updateAttributes(req, res) {
    const { username, attributes } = req.body;
    const result = await this.cognito.updateAttributes(username, attributes);
    res.json(result);
  }
}

export default AuthController;
