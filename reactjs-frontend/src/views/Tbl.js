import "./css/jquery.dataTables.css"
import React, { Component } from 'react'
import './style.css';


const $ = require('jquery')
$.Datatable = require('datatables.net')

export default class Tbl extends Component {

    componentDidMount() {
        console.log( this.props.data);
        
        console.log(this.el);
        this.$el = $(this.el)
        this.$el.DataTable(
            {
                data: this.props.data,
                columns: [
                    {title:"Title"},
                    {title:"Price"},
                    {title:"Image"},
                    // {title:"Extn."},
                    // {title:"Start date"},
                    // {title:"Salary"},
                ]
            }
        )
    }

    componentWillMount() {

    }


    render() {
        return (
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <h5 className="card-header">Data Scraping !</h5>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <a href="#" className="btn btn-success float-right m-3">Tambah Data</a>
                                                </div>
                                            </div>
                                            <table className="display bg-secondary" width="100%" ref={el => this.el = el} /> 
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer">&copy;2020-WellyRiyadi</div>
                </div>
        )  
    }

}


               
           