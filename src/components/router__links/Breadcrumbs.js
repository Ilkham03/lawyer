import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(part => part);

  return (
    <div className="breadcrumbs">
      {pathParts.map((part, index) => {
        const url = `/${pathParts.slice(0, index + 1).join('/')}`;
        const isLastPart = index === pathParts.length - 1;

        return (
          <React.Fragment key={part}>
            {index > 0 && ' / '}
            {isLastPart ? (
              <span>{part}</span>
            ) : (
              <Link to={url}>{part}</Link>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;

