import axios from 'axios'
export function getTreeDataApi() {
  return axios.get('/treeData').then((res => {
    return res.data
  }))
}
