import React, {Component} from 'react'
import FetchJsonp from 'fetch-jsonp'
import {Link} from 'react-router-dom'
import { Carousel, WingBlank } from 'antd-mobile';
import {HOME_HOT_LIST_URL} from '@/server/index.js'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hotlist: [],
      data: ['1', '2', '3'],
      imgHeight: 176,
    }
  }
  
  componentDidMount () {
    FetchJsonp(HOME_HOT_LIST_URL,{
      jsonpCallback: 'callback',
      timeout: 10000
    }).then((res) => {return res.json()})
      .then((data) => {
        this.setState({
          hotlist: data
        })
      })
      .catch((err) => {console.log(err)})
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  
  loginHandler () {
    this.props.history.push({
    	pathname: '/login',
    	state: {
    		flag: '/home'
    	}
    })
  }
  render () {
    
    return (
      <div className="main">
        <header>
          <div className="left">
            zxiu
          </div>
          <div className="center">
            首页
          </div>
          <div className="right" onClick={this.loginHandler.bind(this)}>
            <i className='iconfont icon-tuijian'></i>
          </div>
        </header>
        <div className = "content">
          首页
        <Carousel
          autoplay={true}
          infinite
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
          <ul className='prolist'>
            {
              this.state.hotlist.map((item, index) => {
                return (
                <Link to={'/detail/'+item.goodsID} key={item.goodsID}>
                  <li >
                    <img src={item.goodsListImg} />
                    {item.goodsName}
                  </li>
                </Link>
                )
              })
            } 
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
