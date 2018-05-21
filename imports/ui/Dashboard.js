import React from 'react';
import PublicHeader from './PublicHeader';

// Avec Stateless functions

export default () => { 
    return (
    <div>
    <PublicHeader title ="Dashboard"/>
      <div className='page-content'>
        dashboard page content
      </div>
   </div>
   );
  
  
}

