import  React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import About from '../components/about/About'
import Home from '../components/home/Home'
import Movie from '../components/movie/Movie'
export default class myRoute extends Component {
  render() {
    return (
      <Router>        
          <div>
            <Route path='/ahout' component={About}></Route>
            <Route path='/home' component={Home}></Route>
            <Route path='/movie' component={Movie}></Route>
          </div>
      </Router>        
    )
  }
}
