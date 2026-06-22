import jwt from 'jsonwebtoken'
import type { RequestContext } from '../types/index.js'

export class JWTHandler {
  constructor(
    private secret: string,
    private expiresIn: string = '24h'
  ) {}

  async sign(context: Partial<RequestContext>): Promise<string> {
    return jwt.sign(context, this.secret, {
      expiresIn: this.expiresIn,
      algorithm: 'HS256'
    })
  }

  async verify(token: string): Promise<RequestContext> {
    try {
      const decoded = jwt.verify(token, this.secret) as RequestContext
      return decoded
    } catch (error) {
      throw new Error('Invalid token')
    }
  }
}
