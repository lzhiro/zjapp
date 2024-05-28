import request from '@/utils/request'

// 获取文科聊天记录的方法
export function getChineseRecords() {
  return request({
    url: '/home/Chinese',
    method: 'get'
  })
}

// 获取理科聊天记录的方法
export function getSciencesRecords() {
  return request({
    url: '/home/sciences',
    method: 'get'
  })
}

// 获取工科聊天记录的方法
export function getEngineeringRecords() {
  return request({
    url: '/home/engineering',
    method: 'get'
  })
}