import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostAuthor = ({ authorID }) => {
    
  const [author, setAuthor] = useState(null);
  const REACT_APP_URL = process.env.REACT_APP_URL;
   
  useEffect(() => {
    if(!authorID) return;

    fetch(REACT_APP_URL + `wp-json/wp/v2/users/` + authorID)
      .then((response) => response.json())
      .then((data) => setAuthor(data));
  }, [authorID, REACT_APP_URL]);

  if (!author) return <span>Loading...</span>;
  
  return (
        <span>
            <Link to={`/blog/author/${authorID}`}>{author.name}</Link>
        </span>
  );
};

export default PostAuthor;