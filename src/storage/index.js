/*
    Storage封装
 */
const STORAGE_KEY = 'mall'
export default{
// 存储值
  setItem (key, value, moduleName) {
    if (moduleName) {
      let val = this.getItem(moduleName)
      val[key] = value
      this.setItem(moduleName, val)
    } else {
      let val = this.getStorage()
      val[key] = value
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
  },
  // 获取某一个模块下面的属性2user下面的userName
  getItem (key, moduleName) {
    if (moduleName) {
      let val = this.getItem(moduleName)
      if (val) return val[key]
    }
    return this.getStorage()[key]
  },
  getStorage () {
    // JSON.parse 用于将一个JSON数据，转换成JavaScript对象
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },
  clear (key, moduleName) {
    let val = this.getStorage()
    if (moduleName) {
      delete val[moduleName][key]
    } else {
      delete val[key]
    }
    this.setItem(STORAGE_KEY, val)
  }
}
