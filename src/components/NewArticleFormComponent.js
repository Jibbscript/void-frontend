import React from 'react';

class NewArticleFormComponent extends React.Component {

    state={
        titleInput: "",
        bodyInput: ""
    }

    constructor(props) {
        super(props);
        this.state = {newArticleButtonClicked: true};
        // This binding is necessary to make `this` work in the callback
        this.newArticleFormToggle = this.newArticleFormToggle.bind(this);
      }
    

    newArticleFormToggle(event) {
        event.preventDefault();
        this.setState(state => ({
            newArticleButtonClicked: !state.newArticleButtonClicked
          }));
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        });
      }
  
      handleSubmit = (event) => {
          event.preventDefault();
          this.props.handleNewArticle(this.state.titleInput, this.state.bodyInput);
      }


    render(){
        return (
            <div className="new-article-form-component">
                {this.state.newArticleButtonClicked ? 
                    <div>
                        <button onClick={this.newArticleFormToggle}>New Article</button>
                    </div> 
                : <div>
                    
                    <form onSubmit={(event) => this.handleSubmit(event, this.state)}>
                        <label htmlFor="title">Title:</label>
                        <input 
                            type="text" 
                            name="titleInput"
                            placeholder="Title"
                            value={this.state.titleInput}
                            onChange={this.handleChange}
                        />
                        <br />
                        <label htmlFor="body">Body:</label>
                        <br />
                        <textarea 
                            name="bodyInput"
                            placeholder="Body text here..."
                            value={this.state.bodyInput}
                            onChange={this.handleChange} 
                        />
                        <br /> 
                        <input type="submit" />
                        <br />
                        <button onClick={this.newArticleFormToggle}>Cancel</button>
                    </form>
                </div>}
            </div>
        )
    }
}

export default NewArticleFormComponent;