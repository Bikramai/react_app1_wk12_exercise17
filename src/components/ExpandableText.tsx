import _React, { useState } from 'react';

interface Props {
    children: string;
    maxChars?: number;
}

const ExpandableText = ({children, maxChars = 30}: Props) => {

    const [isExpanded, setExpandeded] = useState(false);


    if (children.length <=  maxChars) return <p>{children}</p>;

    const text = isExpanded ? children : children.substring(0, maxChars);
  return (
    <p>{text}....<button onClick={() => setExpandeded(!isExpanded)}>{isExpanded ? 'Less': 'More'}</button></p>
  )
}

export default ExpandableText;