/**
 * Created by Avinash Theppala on 4/17/2017.
 */
/*I have divided my whole component into three
* my goal is to write a code for state changes in
* React using components.
* Greeter component is my base component
*    where this component is divided into two components
*    1. GreeterMessage is the components which displays default
*    values.
*    2. Greeter Form is he form which contains to fields input and text area
*    on submit, the vaues that are entered in these input fields
 *    must change the Default values in GreeterMessage component
 *    using states and props*/
var GreeterMessage = React.createClass({
    render: function (){
    var name =this.props.name;
    var message = this.props.message;
        return(
   <div>
       <h1>Here your name displays:</h1><h4>Hello{name}!</h4>
       <h1>Here your message displays:</h1><p>{message} </p>
   </div>
        );
    }
});
var GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        var message = this.refs.message.value;
        var name= this.refs.name.value;
        var updates={};
        if(name.length > 0){
            this.refs.name.value= '';
            updates.name=name;
        }
        if(message.length>0){
            this.refs.message.value='';
            updates.message=message;
        }
        this.props.onNewName(updates);
    },
   render:function () {
       return(
         <div>
             <form onSubmit={this.onFormSubmit}>
                 <input type="text" ref="name" placeholder="enter your name"/>
                 <br/>
                 <br/>
                 <textarea ref='message' placeholder="type your Message"></textarea>
                 <br/>
                 <button>Set Name</button>
             </form>
         </div>
       );
   }
});
var Greeter = React.createClass({
    getDefaultProps:function () {
      return{
          name:'React',
          message:'hey i am here'
      };
    },
    getInitialState: function () {
      return{
        name:this.props.name,
          message:this.props.message
      };
    },
    handleNewName: function (updates) {
        this.setState(updates);
    },
    render: function () {
        var name= this.state.name;
        var message = this.state.message;
        return(
            <div>
                <GreeterMessage name={name} message={message}/>
                <br/>
                <GreeterForm onNewName={this.handleNewName}/>
            </div>
        );
    }
});

ReactDOM.render(

    <Greeter />
        ,
    document.getElementById('app')
);