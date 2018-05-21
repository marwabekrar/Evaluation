import {Meteor} from 'meteor/meteor';
import React from 'react';
import PropTypes from 'prop-types'
//import Clipboard from 'clipboard';
import moment from 'moment';

export default class FormsListItem extends React.Component{

  
  render (){    
  return  (<div key ={this.props._id} className='item'> 
           <h2>  {this.props.firstname} {this.props.lastname} </h2>
           <p className='item__message'>  {this.props.comment} </p>
           </div>
          );
  }

}

FormsListItem.propTypes ={
  _id: PropTypes.string.isRequired,
  firstname : PropTypes.string.isRequired,
  lastname : PropTypes.string.isRequired,
  email:PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired
};