import React, { useEffect, useState } from 'react';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_BASE_API_URL;

const ElencoArticles = () => {
  const [articles, setArticles] = useState(null);

  const fetchArticles = async () => {
    const { data } = await axios.get(`${apiUrl}/posts`);
    console.log(data);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      <div className="articles">
        {articles === null && 'Loading...'}
        {articles?.length === 0 && 'No articles found'}
      </div>
    </>
  );
};

export default ElencoArticles;
