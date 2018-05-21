import {Meteor} from 'meteor/meteor';
import React from "react";
import {Tracker} from 'meteor/tracker';
import FlipMove from 'react-flip-move';
import {Forms} from '../api/forms';
import FormsListItem from './FormsListItem';

export default class LinksList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      forms :[]
    }  
  }
  
  componentDidMount(){
       
   this.formsTracker = Tracker.autorun(()=>{
       Meteor.subscribe('forms');
        const forms = Forms.find().fetch();
        this.setState({forms});
      
        
    });
  }
  
  componentWillUnmount(){
    
    this.formsTracker.stop();
  }
  renderFormsListitems(){
    if(this.state.forms.length === 0 ){
      return (
              
              <div className='item'> 
              <p className='item__status-message'> You have no messages sent </p>
              </div>
              
             );
       
       } 
    else {
      return this.state.forms.map((form) => { 
         return  (
           
           <FormsListItem  key={form._id}   {...form} />
           
         ) 
                       });
  }
  }
  
  render(){
    return (
      <div>
      <div>
      <h2> Sent messages:</h2>
      <FlipMove maintainContainerHeight={true}>
      {this.renderFormsListitems()}
      </FlipMove>
      </div>
      </div>
    );
  }
}


