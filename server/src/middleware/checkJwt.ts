import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../config/auth";

const checkJwt = (request: Request, response: Response, next: NextFunction) => {

  const token = request.headers['x-access-token'];
  if (!token){
    return response.status(401).json({ auth: false, message: 'No token provided.' });
  }
  
  jwt.verify(String(token), config.jwtSecret, function(err, decoded) {
    if (err) return response.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
    next();
  });
}

export default checkJwt

