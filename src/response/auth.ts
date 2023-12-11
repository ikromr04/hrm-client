import { Token } from '@/services/token';
import { AuthUser } from '@/types/auth';

export type LoginResponse = AuthUser & {
  token: Token
}