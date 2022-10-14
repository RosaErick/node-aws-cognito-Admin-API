class AuthController {
  constructor() {
    this.cognito = new CognitoService();
  }
  async signIn(req, res) {
    const { email, password } = req.body;
    const result = await this.cognito.login(email, password);
    res.json(result);
  }

  async signUp(req, res) {
    const { email, password } = req.body;
    const result = await this.cognito.register(email, password);
    res.json(result);
  }

  async signOut(req, res) {
    const result = await this.cognito.logout();
    res.json(result);
  }

  async addUserInGroup(req, res) {
    const { email, group } = req.body;
    const result = await this.cognito.addUserInGroup(email, group);
    res.json(result);
  }

  async removeUserFromGroup(req, res) {
    const { email, group } = req.body;
    const result = await this.cognito.removeUserFromGroup(email, group);
    res.json(result);
  }

    async lisUsers(req, res) {
    const result = await this.cognito.listUsers();
    res.json(result);
    }

    




}
