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
            <Link to="/form_and_ajax" className="item">
                FormandAjax
            </Link>
            <Link to="/react_redux" className="item">
                ReactRedux
            </Link>
            <Link to="/async_redux" className="item">
                AsyncRedux
            </Link>
            <Link to="/apollo" className="item">
                Apollo
            </Link>
        </div>
    </div>
  );
};

export default Header;

