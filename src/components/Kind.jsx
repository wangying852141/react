import React, {Component} from 'react'
import FetchJsonp from 'fetch-jsonp'
import {Link, NavLink} from 'react-router-dom'
import {KIND_LIST_URL, KIND_MENU_LIST_URL} from '@/server/index.js'
class Kind extends Component {
  constructor (props) {
    super(props)
    this.state = {
      kindMenu: [],
      list: [],
      activeIndex: 0
    }
  }
  getData (classID) {
    console.log("classID", classID)
    FetchJsonp(KIND_LIST_URL + '?classID=' + classID).then((res) => {return res.json()})
    	.then((data) => {
    		this.setState({
    			list: data
    		})
    	})
    	.catch((err) => {console.log(err)})
  }
  componentWillReceiveProps (nextProps){
    console.log(this)
    console.log(nextProps)
    var {classID} = nextProps.match.params
    this.getData(classID)

  }
  
  componentDidMount () {
    fetch(KIND_MENU_LIST_URL)
          .then( res => res.json())
          .then( (data) => {
            this.setState({
              kindMenu: data
            })
          })
          .catch((err) => {
            console.log(err)
          })
    this.getData(1)
  }
  
  getKindMenuData (index, classID) {
    this.setState({
    	activeIndex: index
    })
    this.getData(classID)
  }
  
  render () {
    var arr = [];
    if(this.state.list!=0){
      this.state.list.map((item, index) => {
      	arr.push(
      	<Link to={'/detail/'+item.goodsID} key={item.goodsID}>
      		<li >
      			<img src={item.goodsListImg} />
      			{item.goodsName}
      		</li>
      	</Link>
      	)
      })
    }else {
      arr = '暂无数据'
    }
    return (
      <div className="main">
        <header>
          <div className="left">
          	返回
          </div>
          <div className="center">
          	分类
          </div>
          <div className="right">
          	<i className='iconfont icon-tuijian'></i>
          </div>
        </header>
        <div className = "content">
          <ul className="kindMenu">
            {
              this.state.kindMenu.map((item, index) => {
                return (
                  <li className={this.state.activeIndex == index ? 'active' : ''} key={item.classID} onClick={this.getKindMenuData.bind(this,index,item.classID)}>
                    {item.className}
                  </li>
                )
              })
            }
          </ul>
          <ul className='prolist'>
          	{arr} 
          </ul>
        </div>
      </div>
    )
  }
}

export default Kind
