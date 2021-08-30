import React from 'react';
import './index.less';

const List = ({ resource }) => {
    return (
        <div className="resource">
            {resource.map((item, index) => (
                <div className="card" key={index}>
                    <a href={item.url} className="link" target="_blank">
                        <div className="title">
                            <img src={require(`../../public/images/${item.icon}`)} alt="image" />
                            {item.name}
                        </div>
                        <div className="desc" title={item.desc}>
                            {item.desc}
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default List;
