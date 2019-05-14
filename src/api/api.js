import axios from 'axios'
// 导航页左侧树状数据的获取
export const getTreeData = params => {
  return axios.get('/treeData', params).then(res => res.data)
}
// 表格页表格数据的获取
export const getTableData = params => {
  return axios.post('/tableData', params).then(res => res.data)
}
// 登录验证
export const checkLogin = params => {
  return axios.post('/login', params).then(res => res.data)
}
