import React from 'react';
import { Row, Col,Card ,Rate,Spin, Alert} from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import fetchJsonp from 'fetch-jsonp';
export default class MovieList extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  		movieType:this.props.match.params.movieType,
	  		movieList:[],//电影列表的数组
	  		isLoaded:false//
	  } 	 	  
	}
	componentWillMount(){
		this.getMovieList(this.props.match.params.movieType);
	}
	componentWillReceiveProps(nextProps){
		this.getMovieList(nextProps.match.params.movieType);
	}
	getMovieList(movieType){
		
		let that = this;
		that.setState({
				movieType:[]
		});
		that.setState({
			movieType:movieType
		});
         let url = `https://api.douban.com/v2/movie/${movieType}`
	 	that.setState({
				isLoaded:false
		});
	  	fetchJsonp(url)
	  	.then((res) => res.json())
	  	.then((data) => {
				that.setState({
					movieList:data.subjects,
                    isLoaded:true
				});
		})
		.catch((res) =>{
				console.log(res.error)
		});
	}
	shouldComponentUpdate(nextProps, nextState){
		return true;
	}
	render(){
		if(this.state.isLoaded == false){
			return <Spin tip="加载中...">
			    <Alert
			      message="温馨提示"
			      description="正在拼命加载中......"
			      type="info"
			    />
			  </Spin>
		}else{
				return  <div className="movielist">
						<Row>
							{
								this.state.movieList.map((item,i) => {
									return <Col span={6} key={i}>
									      	<Link to={"/movie/detail/"+item.id}>
									      		<Card
													    hoverable
													    style={{ width: 240 }}
													    cover={<img alt="example" src={item.images.small} />}
												  		>
													    <div>
													    	电影名称： {item.title}
													    </div>
													    <div>
													    	电影类型： {item.genres.join('、')}
													    </div>
													    <div>
													    	电影年份： {item.year}
													    </div>
													    <div>
													    	
													    	电影评分： <Rate disabled  allowHalf defaultValue={item.rating.average/2} />
													    </div>
												  	</Card>
									      	</Link>
									      </Col>
								})
							}
					      
					    </Row>
				</div>
		}	
	}
}