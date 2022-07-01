import React from 'react';
import '../styles/header.css'
import Search from './Search';
import Text from './text';
import Video from './Video';


const Header = () => {
    return (
        <div classNmame="video-background">
            <Video />
         <div className="cover">
          <Text />
          <Search />
         </div>
        </div>
    );
}

export default Header;
