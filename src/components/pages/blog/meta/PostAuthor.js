import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostAuthor = ({ authorID }) => {
    
  const [author, setAuthor] = useState(null);
   
  useEffect(() => {
    if(!authorID) return;

    fetch(
      `https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/users/` + authorID)
      .then((response) => response.json())
      .then((data) => setAuthor(data));
  }, [authorID]);

  if (!author) return <span>Loading...</span>;
  
  return (
        <span>
            <Link to={`/blog/author/${authorID}`}>{author.name}</Link>
        </span>
  );
};

export default PostAuthor;