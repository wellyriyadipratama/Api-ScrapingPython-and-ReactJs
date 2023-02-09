import React, { Component , Fragment } from 'react';
import Axios from 'axios';

class API extends Component {

    constructor(props){
        super(props);
        this.state={
            dataApi:[]
        }
    }
  
    componentDidMount(){
        Axios.get('https://storage.scrapinghub.com/items/427948/?apikey=a983d1e89a14427fb336395358e64ba1&format=json').then(res => {
         {console.log(res.data)}
            this.setState({
                dataApi:res.data
            })
        });
    }
 
  

  render() {
    return (
        <Fragment>
            {this.state.dataApi.map((dat,index) =>
            {
                return(
                    
                        <div className="container">
                            
                                <div className="card card-style"  key={index}>
                                <img className="card-img-top" src={dat.image} alt="gambar bermasalah"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{dat.title}</h5>
                                        <p className="card-text">Rp. {dat.price[0]}</p>
                                        <a className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                         
                        </div>
                    
                )
            })}
        </Fragment>
        
        );
    }
}
  export default API;