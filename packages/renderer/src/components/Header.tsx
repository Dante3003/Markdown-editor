import React from 'react';
// import { win, toggleWindowSize } from '../helper'

const Header: React.FC = () => {
  return (
    <header id="titlebar">
      <div id="drag-region">
        <div id="window-title">
          <span>Markdown editor</span>
        </div>
        <div id="window-controls">
          <div className="button" id="min-button">
            <img src="../../assets/icons/minimize.svg" alt="minimize" />
          </div>

          <div className="button" id="max-button">
            <img src="../../assets/icons/roll-up.svg" alt="maximize" />
          </div>

          <div className="button" id="close-button">
            <img src="../../assets/icons/close.svg" alt="close" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;