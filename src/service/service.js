import * as Data from '../data/data.json'

export default class Service {
  data = Data

  getData() {
    return this._transformData().notes
  }

  _transformData() {
    const _re = /\Ï/gm
    const strData = JSON.stringify(this.data)
    const newDataStr = strData.replace(_re, '#')
    return JSON.parse(newDataStr)
  }
}
