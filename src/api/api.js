import axios from 'axios'
export const getTreeData = params => {
  return axios.get('/treeData', params).then(res => res.data)
}
