import http from '@/utils/http'
import type { PageRes, ReqPage } from '../types'
import { ClientUser } from './types'
/**
 * @description:  获取活动列表
 * @param {ReqPage} params
 * @returns {*}
 */
export function getClientUserList(params: ReqPage) {
  return http.get<PageRes<ClientUser.ResClientUserList>>(
    `/admin/user/${params.pageNum}/${params.pageSize}`,
    params,
  )
}

/**
 * @description:  获取活动列表
 * @param {ReqPage} params
 * @returns {*}
 */
export function lockClientUser(params: { id: number; status: number }) {
  return http.get<PageRes<any>>(
    `/admin/user/lock/${params.id}/${params.status}`,
  )
}
