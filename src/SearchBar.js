import React from 'react';

const log=console.log;

class SearchBar extends React.Component{
    state={term:''};
    onInputClick() {
        log('input click');
    }

    onFormSubmit=event=> {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };
    render(){
        return ( 
        <div className="ui segment">
            <form onSubmit={(event)=>this.onFormSubmit(event)} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input
                        type="text" 
                        value={this.state.term} 
                        //onClick={this.onInputClick} 
                        onChange={(e)=>this.setState({term:e.target.value})} />
                </div>
            </form>
        </div>
        )
    }
}
export default SearchBar;