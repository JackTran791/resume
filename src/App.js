import React, { Component } from 'react';
import $ from 'jquery'
import './App.css';
import Header from './Components/Header'
import About from './Components/About'
import Footer from './Components/Footer'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import Resume from './Components/Resume'
import Testimonials from './Components/Testimonials'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      foo: 'bar',
      resumeData: {}
    }
  }

  getResumeData() {
    $.ajax({
      url: 'https://api.myjson.com/bins/e5a1m',
      dataType: 'json',
      cache: false,
      success: ((data) => {
        this.setState({
          resumeData: data
        })
      }).bind(this),
      error: (xhr, status, err) => {
        console.log(err)
        alert(err)
      }
    })
  }

  componentDidMount() {
    this.getResumeData()
  }

  render() {
    console.log(this.state.resumeData)
    return (
      <div>
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Testimonials data={this.state.resumeData.testimonials}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer />
      </div>
    );
  }
}

export default App;
