import FetchJsonp from 'fetch-jsonp'
import {DETAIL_DATA_URL} from '@/server/index.js'

export default {
  getData (goodsID, cb) {
    FetchJsonp(DETAIL_DATA_URL+'?goodsID='+goodsID)
              .then((res) => {return res.json()})
              .then((data) => {cb(data)})
              .catch((err) => {console.log(err)})
  }
}