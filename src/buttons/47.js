import React from 'react';
import './style.css';

function App() {
    return (
        <div id="viewer">
            <div class="f416">
                <h1 class="buttonh1">Button#47</h1>
                <a class="bn47" href="/buttons/47">Button</a>
                <h2 class="h2source">Compatibility: <img alt="firefox" src="https://img.icons8.com/nolan/45/firefox.png" /><img alt="chrome" src="https://img.icons8.com/nolan/45/chrome.png" /><img alt="safari" src="https://img.icons8.com/nolan/45/safari.png" /><img alt="ie" src="https://img.icons8.com/nolan/45/internet-explorer.png" /></h2>
                <h2 class="h2source">Source: <a href="https://codepen.io/thomasvaeth/pen/QpBdNo" class="avis" target="_blank" rel="noopener noreferrer">codepen.io/thomasvaeth/pen/QpBdNo</a></h2>
                <div>
                    <pre className="prettyprint">{`<a class="bn47" href="#">Button</a>`}</pre>
                </div>
                <div>
                    <pre className="prettyprint">{`.bn47 {
  position: relative;
  padding: 1rem 2rem 0.5rem 2.5rem;
  color: #000000;
  border: 3px solid #776e62;
  -webkit-transition: padding 0.3s ease-in-out;
  transition: padding 0.3s ease-in-out;
}

.bn47:before {
  content: "";
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  z-index: -1;
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  border-right: 3px solid #ffffff;
  border-bottom: 3px solid #ffffff;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.bn47:hover {
  padding: 0.75rem 2.25rem;
}

.bn47:hover:before {
  top: 0;
  left: 0;
}
`}</pre>
                </div>
            </div>
        </div>
    );
}

export default App;