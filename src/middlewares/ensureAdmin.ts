import {Request, Response, NextFunction} from 'express'

export function ensureAdmin(request: Request, response: Response, next: NextFunction){
  //verify if user is an admin
  const admin = true;
  admin ? next() : response.status(401).json({message: 'Unauthorized'})
}