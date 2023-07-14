import '../node_modules/materialize-css/dist/css/materialize.css'
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './layout/Main';
import { Component } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      api: [],
      searchVal: "Naruto",
      loading:true
    }
  }



  search = (val, type)=>{
    this.setState({loading:true})
    if(type === "All"){
      if(!val){
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.searchVal}`)
        .then( response => response.json())
          .then( result => this.setState({api: result, loading:false}) )
      }else{
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${val}`)
        .then( response => response.json())
          .then( result => this.setState({api: result,loading:false}) )
      }
     
    }else{
      if(!val){
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.searchVal}&type=${type}`)
        .then( response => response.json())
        .then( result => this.setState({api: result,loading:false}) )
      }else{
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${val}&type=${type}`)
          .then( response => response.json())
          .then( result => this.setState({api: result,loading:false}) )
      }
       
    }
   
  }

  componentDidMount(){
    console.log(process.env)
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.searchVal}`)
      .then( response => response.json())
        .then( result => this.setState({api: result, loading:false}) )
        .cath((err)=>{
          console.error(err)
          this.setState({loading:false})
        })
    
  }
 
  render(){
    const apiArr = this.state.api
    const loading = this.state.loading
    return(
      
      <>
      <Header></Header>
      <Main api={apiArr.Search} func={this.search} loading={loading}></Main>
      <Footer></Footer>
      </>
    )
  }
}

export default App;
