import { request } from '@/request/axios'

export class UserService {
  static async submitUserInfo(params) {
    return request('http://120.46.150.151/backend/submit_account_info', params, 'GET')
  }
  static async getTableInfo(params) {
    return request('http://120.46.150.151/backend/all_user_daily_info', params, 'GET')
  }

  static async submitTargetInfo(params) {
    return request('http://120.46.150.151/backend/submit_target_info', params, 'GET')
  }

  static async getTargetInfo(params) {
    return request('http://120.46.150.151/backend/get_target_info', params, 'GET')
  }
}

export class FeedBackService {
  static async submitFeedBackInfo(params) {
    return request('http://120.46.150.151/backend/submit_feedback_info', params, 'GET')
  }

  static async getFeedBackList(params) {
    return request('http://120.46.150.151/backend/get_feedback_info', params, 'GET')
  }
}

export class InterviewService {
  static async submitInterviewInfo(params) {

  }

  static async getInterviewTitle(params) {
    return request('http://120.46.150.151/backend/get_interview_problem_info', params, 'GET')
  }

  static async getInterviewType(params) {
    return request('http://120.46.150.151/backend/get_interview_problem_types', params, 'GET')
  }
}