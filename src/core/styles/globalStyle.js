import {createGlobalStyle} from 'styled-components';
import Creepy from 'assets/Fonts/Creepy.woff';
import Creepy2 from 'assets/Fonts/Creepy.woff2';
import Lunacy from 'assets/Fonts/Lunacy.woff';
import Lunacy2 from 'assets/Fonts/Lunacy.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Creepy';
        src: local('Creepy'), local('Creepy'),
        url(${Creepy2}) format('woff2'),
        url(${Creepy}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Lunacy';
        src: local('Lunacy'), local('Lunacy'),
        url(${Lunacy2}) format('woff2'),
        url(${Lunacy}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
