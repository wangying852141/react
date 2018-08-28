import {REGISTER_URL} from '@/server/index.js'
import axios from 'axios'
import md5 from 'js-md5'
import $ from 'jquery'

export default {
  registerfn(userID, password, cb){
    const pwd = md5(password)
    fetch(REGISTER_URL+'?status=register&userID='+userID+'&password='+pwd)
      .then((res) => res.json())
    	.then((data) => {
        // console.log(data)
        cb(data)
      })
    	.catch((err) => {console.log(err)})
  },
//   registerPostfn(userID, password){
//     let formData = new FormData();
//     formData.append('status', 'register');
//     formData.append('userID', userID);
//     formData.append('password', password);
//     
//     fetch(REGISTER_URL, {
//       method:'POST',
//       headers:{
//         'Content-Type':'multipart/form-data',
//       },
//       body:formData
//     }).then((res) => res.text())
//       .then((data) => {console.log(data)})
//       .catch((err) => {console.log(err)})
//   },
//   axiosFn(userID, password) {
//     axios.post(REGISTER_URL, {
//       userID, password
//     }).then((res) => {console.log(res.data)})
//     .catch((err) => {console.log(err)})
//   }
}