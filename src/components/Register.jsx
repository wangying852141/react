import React, {Component} from 'react'
import registerapi from '@/api/register.js'

class Register extends Component {
  constructor (props) {
    super(props)
  }
  registerHandler () {
    const userID = this.refs.userID.value
    const password = this.refs.password.value
    registerapi.registerfn(userID, password, (data) => {
      if(data == 0){
        console.log('该用户已注册,请直接登录')
        this.props.history.push({
            pathname: '/login',
            state: {
              flag: '/user'
            }
        })
      }else if (data == 2){
        console.log('注册失败')
      }else if (data == 1){
        console.log('注册成功')
        this.props.history.push({
            pathname: '/login',
            state: {
              flag: '/user'
            }
        })
      }
    })
  }
  
  render () {
    
    return (
      <div className="container">
        <div className="main">
          <header>
            <div className="left">
            	返回
            </div>
            <div className="center">
            	注册
            </div>
            <div className="right">
            	<i className='iconfont icon-tuijian'></i>
            </div>
          </header>
          <div className = "content">
            <input type="text" name='userID' ref='userID' placeholder='用户名'/>
            <br />
            <input type="password" name='password' ref='password' placeholder='密码'/>
            <div onClick = {this.registerHandler.bind(this)}>注册</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
