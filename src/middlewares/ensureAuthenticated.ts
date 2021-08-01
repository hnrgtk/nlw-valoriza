import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  const token = authToken.split(" ")[1];

  try {
    const { sub } = verify(token, "63f9d0148a24454b0ac208c4bd9f7e51");

    req.user_id = sub.toString();

    return next();
  } catch (err) {
    return res.status(401).end();
  }
}
