import { request } from '@/request/axios'

export class UserService {
  static async submitUser(params) {
    return request('http://120.46.150.151/backend/submit_account_info', params, 'GET')
  }
  static async getTable(params) {
    return request('http://120.46.150.151/backend/all_user_daily_info', params, 'GET')
  }

  static async submitTarget(params) {
    return request('http://120.46.150.151/backend/submit_target_info', params, 'GET')
  }

  static async getTarget(params) {
    return request('http://120.46.150.151/backend/get_target_info', params, 'GET')
  }
}

export class FeedBackService {
  static async submitInfo(params) {
    return request('http://120.46.150.151/backend/submit_feedback_info', params, 'GET')
  }

  static async getList(params) {
    return request('http://120.46.150.151/backend/get_feedback_info', params, 'GET')
  }
}

export class InterviewService {
  static async submitInfo(params) {

  }

  static async getTitle(params) {
    return request('http://120.46.150.151/backend/get_interview_problem_info', params, 'GET')
  }

  static async getType(params) {
    return request('http://120.46.150.151/backend/get_interview_problem_types', params, 'GET')
  }
}