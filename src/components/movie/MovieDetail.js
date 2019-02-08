import React, { Component } from 'react'
// import './MovieDetail.less';
import {Spin, Alert,Button } from 'antd';
import fetchJsonp from 'fetch-jsonp';

export default class MovieDetail extends Component {
  constructor(props){
      super(props);
      this.state={
          detail:{},
          isLoaded:false
      }
  }
  componentDidMount(){
      let id = this.props.match.params.id
      let url=`https://api.douban.com/v2/movie/subject/${id}`;
      this.setState({
          isLoaded:false
      })
      fetchJsonp(url).then((res)=>{
          console.log(res,21321312)
          return res.json()
      }).then((data)=>{
          console.log(data,121)
          this.setState({
            detail:data,
            isLoaded:true
          })
      }).catch((res)=>{
          console.log(res.error)
      })
  }
  goBack(){
      console.log(this)
      this.props.history.goBack()
  }
  render() {
	if(this.state.isLoaded === false){
        return <Spin tip="加载中...">
            <Alert
              message="温馨提示"
              description="正在拼命加载中......"
              type="info"
            />
          </Spin>
    }else{
        return <div className="movie-detail">
            <Button type="primary" onClick={() => this.goBack()}>返回上一页</Button>
            <div className="movie-img">
                <img src={this.state.detail.images.small}  alt=""/>
            </div>
            <div className="movie-name">
                <h4>{this.state.detail.title}</h4>
            </div>
            <div className="movie-casts">
                主要演员：
                <ul>
                    {this.state.detail.casts.map((item,i) =>{
                        return <li key={i}>
                                <a href="#">
                                    <img src={item.avatars.small} />
                                    <p>{item.name}</p>
                                </a>
                            </li>
                    })}											
                </ul>
            </div>
            <div className="movie-summary">
                 剧情简介：
                 <p>
                     {this.state.detail.summary}
                 </p>
            </div>
        </div>
    }
  }
}
