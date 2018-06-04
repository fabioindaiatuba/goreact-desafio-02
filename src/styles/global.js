import { injectGlobal } from 'styled-components';
import 'font-awesome/css/font-awesome.css';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body {
    height: 100%;
    background: #F5F5F5;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
`;
