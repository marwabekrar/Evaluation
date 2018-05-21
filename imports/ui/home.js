import React from 'react';
import PublicHeader from './PublicHeader';

// Avec Stateless functions

export default () => { 
    return (
    <div>
    <PublicHeader title ="Home"/>
      <div className='page-content'>
        Home page content
      </div>
   </div>
   );
  
  
}