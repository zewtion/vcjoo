import React from 'react';
import ReactDOM from 'react-dom';
import data1 from './data.json';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedKey : -1,
            keyword : '',
            danjis : data1.danjis[0],
            searchWord : data1.searchWord
            
        }

        this.jsonSearch = this.jsonSearch.bind(this);
    }

    jsonSearch( key ){
        this.setState=({
            keyword : '',
            selectedKey : key
        });

        console.log(key + '[key]');
    }
    
    render(){
        return(
            <div>
                { data1.searchWord }<br/>
                <input id='luv' type='text' placeholder='Search'/>
                <button onClick={this.jsonSearch( 1 )}> search </button>
                <br/>
                <Step1 name='Hello vcjoo' />
            </div>

        );
    }
};

export default class Step1 extends React.Component{
    render(){
        return(
            <div>
                sysout.{this.props.name}.print !!
            </div>
        );
    }
};


ReactDOM.render(<App/>, document.getElementById('root'));
