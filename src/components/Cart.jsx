import React, {Component} from 'react'

class Cart extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    
    return (
      <div className="main">
        <header>
          <div className="left">
          	返回
          </div>
          <div className="center">
          	购物车
          </div>
          <div className="right">
          	<i className='iconfont icon-tuijian'></i>
          </div>
        </header>
        <div className = "content">
          购物车
        </div>
      </div>
    )
  }
}

export default Cart
