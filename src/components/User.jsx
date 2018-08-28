import React, {Component} from 'react'

class User extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLogin: 0
    }
  }
  
  registerHandler () {
    // this.props.history.push('/register')
    this.props.history.push({
      pathname: '/register'
    })
  }
  
  loginHandler () {
    this.props.history.push({
    	pathname: '/login',
      state: {
        flag: '/user'
      }
    })
  }
  logoutHandler () {
    localStorage.setItem('isLogin', 0)
  }
  render () {
    var val = ""
    var userID= localStorage.getItem('userID')
    if(localStorage.getItem('isLogin') == 1){
      val = <p>欢迎你***{userID}<button onClick = {this.logoutHandler.bind(this)}>退出登录</button></p>
    }else{
      val =(<button onClick = {this.loginHandler.bind(this)}>登录</button>
             <button onClick = {this.registerHandler.bind(this)}>注册</button>)
    }
    
    return (
      <div className="main">
        <header>
          <div className="left">
          	返回
          </div>
          <div className="center">
          	个人中心
          </div>
          <div className="right">
          	<i className='iconfont icon-tuijian'></i>
          </div>
        </header>
        <div className = "content">
          个人中心
          {val}

        </div>
      </div>
    )
  }
}

export default User
