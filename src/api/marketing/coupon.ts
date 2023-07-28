import http from '@/utils/http'
import type { PageRes, ReqPage } from '../types'
import { Activity } from './types'
/**
 * @description:  获取优惠券列表
 * @param {ReqPage} params
 * @returns {*}
 */
export function getCouponList(params: ReqPage) {
  return http.get<PageRes<Activity.ResActivityList>>(
    `/admin/activity/couponInfo/${params.pageNum}/${params.pageSize}`,
  )
}

/**
 * @description: 根据id删除优惠券
 * @param {number} id
 * @returns {*}
 */
export function removeCoupon(id: number) {
  return http.delete<PageRes<any>>(`/admin/activity/couponInfo/remove/${id}`)
}
