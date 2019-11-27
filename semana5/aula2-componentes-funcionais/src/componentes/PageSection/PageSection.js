import React from 'react';
import './PageSection.css';

function PageSection(props) {
  return (
    <section className="PageSection">
     	<h2>{props.titulo}</h2>
     	<div>{props.children}</div>
    </section>
  )
}

export default PageSection;