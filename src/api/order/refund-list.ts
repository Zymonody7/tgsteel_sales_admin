import http from '@/utils/http'
import type { PageRes, ReqPage } from '../types'
import { Refund } from './types'
/**
 * @description:  获取活动列表
 * @param {ReqPage} params
 * @returns {*}
 */
export function getRefundList(params: ReqPage) {
  return http.get<PageRes<Refund.ResRefundList>>(
    `/admin/order/orderRefundInfo/${params.pageNum}/${params.pageSize}`,
  )
}
