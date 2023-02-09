import React, { Component } from 'react';
import "./css/jquery.dataTables.css"
import Tbl from './Tbl';

class fetchAPI extends Component {
        state = {
            data: []
        }

        componentDidMount(){
            const urlFetch = fetch('https://storage.scrapinghub.com/items/427948/?apikey=a983d1e89a14427fb336395358e64ba1&format=json')

            urlFetch.then(res => {
                if( res.status === 200)
                    return res.json()
            }).then( resJson => {
                this.setState({
                    data: resJson
                })
            })
        }

    render() {
        // console.log('dari fetc'+this.state.data);
        

        return (
            // <div>
                
            //     {console.log('dari fetc'+this.state.data.map(isi => {
            //         return (<div>
            //         {console.log('dari fetc'+isi)}
            //         <Tbl data={isi} />
            //         </div>)
            //     }))}
            // </div>            


            <div>
                
                    <div className="wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12">
                                    <div className="card">
                                        <h5 className="card-header">Data Scraping !</h5>
                                            <div className="card-body">
                                                <div className="row">
                                                    {this.state.data.map(isi => {
                                                            return (
                                                                <div className="col-lg-12">
                                                                    <a href="#" className="btn btn-success float-right m-3"><i class="fas fa-pencil-alt"></i></a>
                                                                    <h2>Rp. {isi.price[0]}</h2>
                                                                    <Tbl data={isi} />
                                                                </div>
                                                                )  
                                                    })}

                                                </div> 
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer">&copy;2020-WellyRiyadi</div>
                    </div>
                        
                   
      
            </div>
        );
    }
}

export default fetchAPI;