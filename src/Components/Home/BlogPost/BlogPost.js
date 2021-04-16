import React from 'react';

const BlogPost = (props) => {
    const {title, description, author, authorImg , date} = props.blog;

    return (
        <div className="card border-0 shadow-sm">
        <div className="card-header border-0 d-flex  align-items-center">
            <img className="mx-3" src={authorImg} alt="" width="60"/>
            <div>
                <h6 style={{color:"#1CC7C1"}}>{author}</h6>
                <p className="m-0 text-secondary">{date}</p>
            </div>
        </div>
        <div className="card-body">
            <h5>{title}</h5>
            <p className="card-text text-secondary text-secondary mt-4">{description}</p>
        </div>
        
   </div>
    );
};

export default BlogPost;