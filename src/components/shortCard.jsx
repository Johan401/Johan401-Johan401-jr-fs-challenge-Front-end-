import React from 'react';
import "../css/shortCode.css"

const ShortCodeCard = ({ props }) => {

  return (
    <div data-testid="shortcode-card" className="card">
      <div className="content">
        <span className="title">
          Short Code: {props.short_code}
        </span>

        <p className="desc">
          Clicks Count: {props.click_count} 
        </p>

        <a className="action" target="_blank" rel="noopener" href={"http://localhost:3000/"+props.short_code}>
            Open the url
          <span aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </div>
  );
};

export default ShortCodeCard;
