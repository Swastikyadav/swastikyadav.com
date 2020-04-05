import React from 'react';

function Main({ children, aside_display }) {
  return(
    <main style={aside_display ? {justifyContent: 'center'} : null}>
      <div className="blog-list">
        {children}
      </div>
      <aside style={aside_display ? {display: 'none'} : null} className="aside">About Me</aside>
    </main>
  );
}

export default Main;