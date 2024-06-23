import React, { useEffect, useState } from 'react';

const APIURL = 'https://jsonplaceholder.typicode.com/posts';

const FetchUE = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ status: false, msg: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const fetchURL = async (url) => {
    setLoading(true);
    setError({ status: false, msg: '' });
    try {
      const response = await fetch(url);
      const postData = await response.json();
      setPosts(postData);
      setLoading(false);
      setError({ status: false, msg: '' });
      if (response.status === 404) {
        throw new Error('Data not found');
      }
    } catch (error) {
      setLoading(false);
      setError({ status: true, msg: 'Check URL' });
    }
  };

  useEffect(() => {
    fetchURL(APIURL);
  }, []);

  const filteredPosts = posts.filter((post) => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <h3>Loading, please wait...</h3>;
  }

  if (error.status) {
    return <h3>{error.msg}</h3>;
  }

  const deleteHandler = (comingId) => {
    const filteredPosts = posts.filter((deletePost) => deletePost.id !== comingId);
    setPosts(filteredPosts);
    console.log('Deleted');
  };

  return (
    <div style={styles.section}>
      <input
        type="text"
        name="searchTerm"
        id="searchTerm"
        value={searchTerm}
        placeholder="Search"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      {filteredPosts.map((eachPost) => {
        const { id, title, body } = eachPost;
        return (
          <section key={id}>
            <h4>{title}</h4>
            <h4>{body}</h4>
            <button style={styles.button} onClick={() => deleteHandler(id)}>
              Delete
            </button>
          </section>
        );
      })}
    </div>
  );
};

// styles

const styles = {
  section: {
    background: 'pink',
    minHeight: '100vh',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    margin: '1px',
  },
  button: {
    background: 'black',
    color: 'white',
    borderRadius: '25px',
    width: '70px',
  },
};

export default FetchUE;
