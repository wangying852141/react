import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class MainFooter extends Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    
    return (
      <footer>
        <ul>
          <li className='active'>
            <NavLink to='/home'>
            <i className='iconfont icon-home'></i>
            <p>首页</p>
            </NavLink>
          </li>
          <li>
            <NavLink to='/kind/1'>
          	<i className='iconfont icon-fenlei'></i>
          	<p>分类</p>
            </NavLink>
          </li>
          <li>
            <NavLink to='/cart'>
          	<i className='iconfont icon-icon'></i>
          	<p>购物车</p>
            </NavLink>
          </li>
          <li>
            <NavLink to='/user'>
          	<i className='iconfont icon-wode-copy'></i>
          	<p>我的</p>
            </NavLink>
          </li>
        </ul>
      </footer>
    )
  }
}

export default MainFooter
