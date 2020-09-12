import React from 'react';
import './style.css';


function App() {
    return (
        <div id="viewer">
            <div class="f416">
                <h1 class="buttonh1">Button#45</h1>
                <div><a href="/buttons/45" tabindex="0"><img class="bn45" src="https://cdn.worldvectorlogo.com/logos/google-play-badge.svg" alt="bn45" /></a></div>
                <h2 class="h2source">Compatibility: <img alt="firefox" src="https://img.icons8.com/nolan/45/firefox.png" /><img alt="chrome" src="https://img.icons8.com/nolan/45/chrome.png" /><img alt="safari" src="https://img.icons8.com/nolan/45/safari.png" /><img alt="ie" src="https://img.icons8.com/nolan/45/internet-explorer.png" /></h2>
                <h2 class="h2source">Source: <a href="https://github.com/r1" class="avis" target="_blank" rel="noopener noreferrer">github.com/r1</a></h2>
                <div>
                    <pre className="prettyprint">{`<div><a href="/" tabindex="0"><img class="bn45" src="https://cdn.worldvectorlogo.com/logos/google-play-badge.svg"alt="bn45"/></a></div>`}</pre>
                </div>
                <div>
                    <pre className="prettyprint">{`.bn45 {
  width: 160px;
  height: 60px;
}`}</pre>
                    <pre className="prettyprint">{'https://cdn.worldvectorlogo.com/logos/google-play-badge.svg'}</pre>
                </div>
            </div>
        </div>
    );
}

export default App;