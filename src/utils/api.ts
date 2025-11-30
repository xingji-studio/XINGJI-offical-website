// API工具函数，统一处理API请求

// 从环境变量获取API基础URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

/**
 * 发送API请求的通用函数
 * @param endpoint API端点路径
 * @param options 请求选项
 * @returns Promise<any> 请求结果
 */
export async function apiRequest<T = any>(endpoint: string, options: RequestInit = {}): Promise<T> {
  // 构建完整的请求URL
  const url = `${API_BASE_URL}${endpoint}`;
  
  // 设置默认请求头
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  };
  
  // 如果有token，添加到请求头
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }
  
  // 发送请求
  const response = await fetch(url, {
    ...options,
    headers,
  });
  
  // 解析响应数据
  const data = await response.json();
  
  // 处理错误响应
  if (!response.ok) {
    throw new Error(data.message || `请求失败: ${response.status}`);
  }
  
  return data;
}

/**
 * GET请求
 */
export function get<T = any>(endpoint: string, options: RequestInit = {}): Promise<T> {
  return apiRequest<T>(endpoint, {
    ...options,
    method: 'GET',
  });
}

/**
 * POST请求
 */
export function post<T = any>(endpoint: string, data?: any, options: RequestInit = {}): Promise<T> {
  return apiRequest<T>(endpoint, {
    ...options,
    method: 'POST',
    body: data ? JSON.stringify(data) : undefined,
  });
}

/**
 * PUT请求
 */
export function put<T = any>(endpoint: string, data?: any, options: RequestInit = {}): Promise<T> {
  return apiRequest<T>(endpoint, {
    ...options,
    method: 'PUT',
    body: data ? JSON.stringify(data) : undefined,
  });
}

/**
 * DELETE请求
 */
export function del<T = any>(endpoint: string, options: RequestInit = {}): Promise<T> {
  return apiRequest<T>(endpoint, {
    ...options,
    method: 'DELETE',
  });
}