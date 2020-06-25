import React from 'react';
import RouteCard from './../components/RouteCard';
import './styles.scss';

function Routes() {
  return (
    <div className='content'>
        <h1>Routes</h1>
        <hr/>
        <div className='routeList'>
          <RouteCard />
          <RouteCard />
          <RouteCard />
          <RouteCard />
          <RouteCard />
          <RouteCard />
          <RouteCard />
        </div>
    </div> 
  );
}

export default Routes;