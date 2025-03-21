import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FullBlog from './FullBlog';

const SingleBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch('/Blog.json');
        const data = await response.json();
        const foundBlog = data.blogs.find(b => b.id === parseInt(id));
        setBlog(foundBlog);
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (!blog) return <div className="error">Blog not found</div>;

  return <FullBlog blog={blog} onBack={() => navigate('/blogs')} />;
};

export default SingleBlog;