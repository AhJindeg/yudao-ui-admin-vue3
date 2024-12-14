import request from '@/config/axios'

// IoT 设备分组 VO
export interface DeviceGroupVO {
  id: number // 分组 ID
  name: string // 分组名字
  status: number // 分组状态
  description: string // 分组描述
}

// IoT 设备分组 API
export const DeviceGroupApi = {
  // 查询IoT 设备分组分页
  getDeviceGroupPage: async (params: any) => {
    return await request.get({ url: `/iot/device-group/page`, params })
  },

  // 查询IoT 设备分组详情
  getDeviceGroup: async (id: number) => {
    return await request.get({ url: `/iot/device-group/get?id=` + id })
  },

  // 新增IoT 设备分组
  createDeviceGroup: async (data: DeviceGroupVO) => {
    return await request.post({ url: `/iot/device-group/create`, data })
  },

  // 修改IoT 设备分组
  updateDeviceGroup: async (data: DeviceGroupVO) => {
    return await request.put({ url: `/iot/device-group/update`, data })
  },

  // 删除IoT 设备分组
  deleteDeviceGroup: async (id: number) => {
    return await request.delete({ url: `/iot/device-group/delete?id=` + id })
  }
}