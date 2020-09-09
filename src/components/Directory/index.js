import  React from 'react';
import './styles.scss'

import shopPictureLeft from './../../assets/gemuese.jpg'; 
import shopPictureRight from './../../assets/markt_team.jpg'; 

const Directory = props => {
    return (
        <div className = "directory">
            <div className = "wrap">
                <div 
                    className = "item"
                    
                    style = {{
                    backgroundImage: `url(${shopPictureLeft})`
                    }}
                >
                    <a
                    href="/#">
                        Anker Left
                    </a>   
                </div>
                <div
                    className = "item"
                    style = {{
                    backgroundImage: `url(${shopPictureRight})`
                    }}
                >
                    <a 
                    href="/#">
                        Anker Right
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Directory
