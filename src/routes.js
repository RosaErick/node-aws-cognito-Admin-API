import { Router } from "express";
import { authenticate, authenticationError } from "aws-cognito-express";
import { middlewareconfig } from "./config/awsconfig";
import AuthController from "./controllers/AuthController";


const routes = new Router();
const authMiddleware = authenticate(middlewareconfig);
routes.use(authenticationError())


routes.get("/checkout/health", (req, res) => {
  return res.json({ message: "its up" });
});

routes.post("/login", AuthController.signIn);

routes.post("/signup", AuthController.signUp);

routes.post("/addUserInGroup", authMiddleware, AuthController.addUserInGroup);

routes.post("/removeUserFromGroup", authMiddleware, AuthController.removeUserFromGroup);

routes.get("/listUsers", authMiddleware, AuthController.lisUsers);

routes.post("/updateAttributes", authMiddleware, AuthController.updateAttributes);


export default routes;