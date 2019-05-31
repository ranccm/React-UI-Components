import React from 'react';
import HeaderContent from './HeaderContent';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div>
            <div>
                <h1>Lambda School</h1>
                <span>@LambdaSchool *26 Jan</span>
                <HeaderContent />
            </div>
        </div>
    );
};

export default HeaderTitle;
