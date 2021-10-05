import React from 'react';
import data from '../../data';
import './index.less';

const List = ({ module, name }) => {
  let resource = module && name ? data[module][name] : null;
  return (
    <span className="resource">
      {resource &&
        resource.map((item, index) => (
          <span className="card" key={index}>
            <a href={item.url} className="link" target="_blank">
              <span className="title">
                {item.icon && (
                  <img
                    src={require(`../../public/images/${item.icon}`)}
                    alt="image"
                  />
                )}
                {item.name}
              </span>
              <span className="desc" title={item.desc}>
                {item.desc}
              </span>
            </a>
          </span>
        ))}
    </span>
  );
};

export default List;
