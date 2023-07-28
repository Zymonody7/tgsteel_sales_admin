import http from '@/utils/http'
import type { ReqPage } from '../types'
import { Sku } from './types'

/**
 * @description:  获取品牌列表
 * @param {ReqPage} params
 * @returns {*}
 */
export function getSkuList(params: ReqPage) {
  return http.get<Sku.ResSkuList>(
    `/admin/product/list/${params.pageNum}/${params.pageSize}`,
  )
}
