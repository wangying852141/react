import React, {Component} from 'react'
import detail from '@/api/detail.js'

class Detail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      goodsID: '',
      goodsName: '',
      goodsListImg: '',
      discount: '',
      imgsUrl: '',
      className: '',
      detail: '',
      buynumber: ''
    }
  }
  
  getDataSuccess (data) {
    // console.log(data)
    const {
      goodsID,
      goodsName,
      goodsListImg,
      discount,
      imgsUrl,
      className,
      detail,
      buynumber
    } = data[0]
    
    this.setState({
      goodsID,
      goodsName,
      goodsListImg,
      discount,
      imgsUrl,
      className,
      detail,
      buynumber
    })
  }
  
  componentDidMount () {
    // console.log(this.props.match.params)
    const {goodsID} = this.props.match.params
    detail.getData(goodsID, this.getDataSuccess.bind(this))
  }
  
  backHandler () {
  	 console.log(this.props)
      this.props.history.goBack()
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
            	{this.state.goodsName}
            </div>
            <div className="right">
            	<i className='iconfont icon-tuijian'></i>
            </div>
          </header>
          <div className = "content">
            <img src={this.state.goodsListImg} />
            <h3>{this.state.goodsName}</h3>
          </div>
        </div>
        <footer>详情底部</footer>
      </div>
    )
  }
}

export default Detail
