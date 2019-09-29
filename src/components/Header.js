import React from 'react';
import { Link } from 'react-router-dom';

const Header = () =>  {
  return (
    <div className="ui secondary pointing menu">
        <Link to="/" className="item">
            SampleApp
        </Link>
        <div className="right menu">
            <Link to="/function_component" className="item">
                FunctionComponent
            </Link>
            <Link to="/class_component" className="item">
                ClassComponent
            </Link>
        </div>
    </div>
  );
};

export default Header;

