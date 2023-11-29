import { useNavigate } from 'react-router-dom';

const Posts = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/');
  };

  return (
    <>
      <div>Posts</div>
      <button onClick={handleRedirect}>Redirect to main</button>
    </>
  );
};

export default Posts;
