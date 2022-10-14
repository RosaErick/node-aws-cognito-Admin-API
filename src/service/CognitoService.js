import { CognitoIdentityProvider } from "@aws-sdk/client-cognito-identity-provider";
import { awsconfig, userPoolId } from "../config/awsconfig";

export default class Cognito {
  constructor() {
    this.cognito = new CognitoIdentityProvider(awsconfig);
  }

  async listUsers() {
    const params = {
      UserPoolId:  userPoolId,
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
      UserPoolId:  userPoolId,
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
