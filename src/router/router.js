import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import React, { Component } from 'react'
import About from '../components/about/About'
import Home from '../components/home/Home'
import Movie from '../components/movie/Movie'
import MyRoute from '../components/myRoute'
const One=()=>(
    <Router>
        <div>
            
            <li><Link to='/about'>about</Link></li>
            <li><Link to='/home'>home</Link></li>
            <li><Link to='/movie'>movie</Link></li>
                
            <Route path='/ahout' component={About}></Route>
            <Route path='/home' component={Home}></Route>
            <Route path='/movie' component={Movie}></Route>
        </div>  
    </Router>
)
export default One