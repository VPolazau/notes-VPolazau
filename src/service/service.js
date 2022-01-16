import * as Data from '../data/data.json';

export default class Service{
  data = Data;

  getData(){
    return this.data.notes
  }

  // setData(){
  //   this.data.note
  // }
}