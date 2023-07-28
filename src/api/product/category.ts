import http from '@/utils/http'
import type { Category } from './types'

/**
 * 查找一级分类
 */
export function getCategorys1() {
  return http.get<Category.ResCategoryList>('/admin/product/getCategory1')
}

/**
 * 查找二级分类
 */
export function getCategorys2(id: number | undefined) {
  return http.get<Category.ResCategoryList>(`/admin/product/getCategory2/${id}`)
}

/**
 * 查找三级分类
 */
export function getCategorys3(id: number | undefined) {
  return http.get<Category.ResCategoryList>(`/admin/product/getCategory3/${id}`)
}
