import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import "./Widgets.css";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <span>&middot;</span>
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle(
        "Massive storm slams supply chain",
        "10h ago - 10,934 readers"
      )}
      {newsArticle("Rogers replaces its CEO", "21h ago - 8,584 readers")}
      {newsArticle(
        "Canada welcomes new budget airline",
        "22h ago - 9,613 readers"
      )}
      {newsArticle("JPMorgan: Pay up, Tesla", "21h ago - 57,553 readers")}
      {newsArticle(
        "Apple shifting to 'DIY' repair model",
        "10h ago - 18,658 readers"
      )}
    </div>
  );
}

export default Widgets;
