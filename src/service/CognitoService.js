import { CognitoIdentityProvider } from "@aws-sdk/client-cognito-identity-provider";
import { awsconfig, userPoolId } from "../config/awsconfig";

export default class Cognito {
  constructor() {
    this.cognito = new CognitoIdentityProvider(awsconfig);
  }

  async login(username, password) {
    const params = {
      AuthFlow: "ADMIN_USER_PASSWORD_AUTH",
      ClientId: process.env.AWS_CLIENT_ID,
      UserPoolId: userPoolId,
      AuthParameters: {
        USERNAME: username,
        PASSWORD: password,
      },
    };
    try {
      const result = await this.cognito.adminInitiateAuth(params);
      return result;
    } catch (error) {
      return error;
    }
  }

  async register(username, password) {
    const params = {
      ClientId: awsconfig.credentials.clientId,
      Password: password,
      Username: username,
      UserAttributes: [
        {
          Name: "email",
          Value: username,
        },
      ],
    };
    try {
      const result = await this.cognito.signUp(params);
      return result;
    } catch (error) {
      return error;
    }
  }

  async listUsers() {
    const params = {
      UserPoolId: userPoolId,
      AttributesToGet: ["email"],
      Limit: 10,
    };

    try {
      const data = await this.cognito.listUsers(params);
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  async addUserInGroup(username, groupname) {
    const params = {
      GroupName: groupname,
      UserPoolId: userPoolId,
      Username: username,
    };

    try {
      const data = await this.cognito.adminAddUserToGroup(params);
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  async removeUserFromGroup(username, groupname) {
    const params = {
      GroupName: groupname,
      UserPoolId: userPoolId,
      Username: username,
    };

    try {
      const data = await this.cognito.adminRemoveUserFromGroup(params);
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  async updateAttributes(username, attributes) {
    const params = {
      UserAttributes: attributes,
      UserPoolId: userPoolId,
      Username: username,
    };

    try {
      const data = await this.cognito.adminUpdateUserAttributes(params);
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
}
