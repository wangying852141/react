import React, {Component} from 'react'
import loginapi from '@/api/login.js'

class Login extends Component {
  constructor (props) {
    super(props)
  }
  
  backHandler () {
    // console.log(this.props)
    var {flag} = this.props.location.state
    this.props.history.push(flag)
  }
  
  loginHandler () {
    const userID = this.refs.userID.value
    const password = this.refs.password.value
    loginapi.loginfn(userID, password, (data) => {
    	console.log(data)
      if(data == 0){
        console.log('该用户未注册,请先注册')
      }else if (data == 2){
        console.log('密码错误')
      }else {
        console.log('登录成功')
        localStorage.setItem('isLogin', 1)
        localStorage.setItem('userID', userID)
        var {flag} = this.props.location.state
        this.props.history.push(flag)
      }
    })
  }
  render () {
    
    return (
      <div className="container">
        <div className="main">
          <header>
            <div className="left" onClick= {this.backHandler.bind(this)}>
            	返回
            </div>
            <div className="center">
            	登录
            </div>
            <div className="right">
            	<i className='iconfont icon-tuijian'></i>
            </div>
          </header>
          <div className = "content">
            <input type="text" name='userID' ref='userID' placeholder='用户名'/>
            <br />
            <input type="password" name='password' ref='password' placeholder='密码'/>
            <div onClick = {this.loginHandler.bind(this)}>登录</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
