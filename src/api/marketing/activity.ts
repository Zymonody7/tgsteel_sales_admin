import http from '@/utils/http'
import type { PageRes, ReqPage } from '../types'
import { Activity } from './types'
/**
 * @description:  获取活动列表
 * @param {ReqPage} params
 * @returns {*}
 */
export function getActivityList(params: ReqPage) {
  return http.get<PageRes<Activity.ResActivityList>>(
    `/admin/activity/activityInfo/${params.pageNum}/${params.pageSize}`,
  )
}
