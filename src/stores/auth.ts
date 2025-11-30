import { reactive, provide, inject } from 'vue';
import { useRouter } from 'vue-router';
import { post } from '../utils/api';

interface User {
  username: string;
  email?: string;
}
interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}
class AuthStore {
  private state = reactive<AuthState>({
    user: null,
    token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
    isLoading: false,
    error: null
  });
  private router: ReturnType<typeof useRouter> | null = null;
  
  private getRouter() {
    if (!this.router) {
      this.router = useRouter();
    }
    return this.router;
  }
  get isAuthenticated() {
    return !!this.state.token;
  }
  get currentUser() {
    return this.state.user;
  }
  get loading() {
    return this.state.isLoading;
  }
  get error() {
    return this.state.error;
  }

  async login(username: string, password: string) {
    this.state.isLoading = true;
    this.state.error = null;
    try {
      const data = await post('/login', { username, password });
      this.state.token = data.token;
      this.state.user = { username };
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', username);
      }
      
      return true;
    } catch (error) {
      this.state.error = error instanceof Error ? error.message : '登录失败';
      return false;
    } finally {
      this.state.isLoading = false;
    }
  }

  async register(username: string, email: string, password: string) {
    this.state.isLoading = true;
    this.state.error = null;
    try {
      const data = await post('/register', { username, email, password });
      this.state.token = data.token;
      this.state.user = { username, email };
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', username);
      }
      
      return true;
    } catch (error) {
      this.state.error = error instanceof Error ? error.message : '注册失败';
      return false;
    } finally {
      this.state.isLoading = false;
    }
  }
  logout() {
    this.state.user = null;
    this.state.token = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
    }
    const router = this.getRouter();
    if (router) {
      router.push('/');
    }
  }
  async init() {
    if (this.state.token) {
      if (typeof window !== 'undefined') {
        const username = localStorage.getItem('username');
        if (username) {
          this.state.user = { username };
        }
      }
    }
  }
}
export const authStore = new AuthStore();
export function provideAuth() {
  provide('auth', authStore);
}
export function useAuth() {
  const auth = inject('auth') as AuthStore;
  if (!auth) {
    throw new Error('Auth store not found');
  }
  return auth;
}
