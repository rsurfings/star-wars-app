import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
     <header className="starwars-header py-3">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-4 pt-1">
        </div>
        <div className="col-4 text-center">
          <a className="starwars-header-logo" href="#">SWStarter</a>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-center">
        </div>
      </div>
    </header>
  )
}


export default Header