import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createStream} from '../../actions';
import StreamForm from './StreamForm';

export class StreamCreate extends Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  }
  render() {
    return (
      <div>
        <h1>Create a Stream</h1>
        <StreamForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}
  export default connect(null, {createStream})(StreamCreate);


// import React, { Component } from 'react';
// import {Field, reduxForm} from 'redux-form';
// import {connect} from 'react-redux';
// import {createStream} from '../../actions';
// export class StreamCreate extends Component {
//   // renderInput(formProps) {
//   //   //return <input onChange={formProps.input.onChange} value={formProps.input.value} />
  
//   // }
//   renderInput = ({input, label, meta}) => {
//     const className = `field ${meta.error && meta.touched ? 'error': ''}`;
//     return(
//     <div className={className}>
//       <label> {label} </label>
//       <input {...input} autoComplete= "off" />
//       {this.renderError(meta)}
//     </div>);
//   }
//   renderError = ({error, touched}) => {
//     if(touched && error) {
//       return (
//         <div className="ui error message" >
//           <div className="header">{error}</div>
//         </div>
//       );
//     }
//   }
//   onSubmit = (formValues) => {
//     this.props.createStream(formValues);
//   }

//   render() {
//     return (
//       <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
//         <Field name="title" component={this.renderInput} label="Enter Titile"/>
//         <Field name="description" component={this.renderInput} label = "Enter Description" />
//         <button className="ui button primary">Submit</button>
//       </form>
//     )
//   }
// }

// const validate = (formValues) => {
//   const errors = {};
//   if(!formValues.title){
//     errors.title = 'You must enter a title!';
//   }
//   if(!formValues.description){
//     errors.description = 'You must enter a description!';
//   }
//   return errors;
// }

// // export default connect()(reduxForm({
// //   form: 'streamCreate',
// //   validate
// // })(StreamCreate));

// const formWrapped = reduxForm({
//     form: 'streamCreate',
//     validate
//   })(StreamCreate);

//   export default connect(null, {createStream})(formWrapped);