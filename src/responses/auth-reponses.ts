import { Token } from '@/services/token';
import { User } from '@/types/auth';

export type LoginResponse = User & {
  token: Token
}
