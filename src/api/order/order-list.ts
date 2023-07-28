import http from '@/utils/http'
import type { PageRes, ReqPage } from '../types'
import { Order } from './types'
/**
 * @description:  获取活动列表
 * @param {ReqPage} params
 * @returns {*}
 */
export function getOrderList(params: ReqPage) {
  return http.get<PageRes<Order.ResOrderList>>(
    `/admin/order/${params.pageNum}/${params.pageSize}`,
  )
}
