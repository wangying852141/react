import {LOGIN_URL} from '@/server/index.js'
import md5 from 'js-md5'

export default {
  loginfn(userID, password, cb){
    const pwd = md5(password)
    fetch(LOGIN_URL+'?status=login&userID='+userID+'&password='+pwd)
      .then((res) => res.json())
    	.then((data) => {
        // console.log(data)
        cb(data)
      })
    	.catch((err) => {console.log(err)})
  }
}