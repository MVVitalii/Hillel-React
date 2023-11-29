import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUserById = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await res.json();
      setUser(data);
    };

    getUserById();
  }, [id]);
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
};

export default User;
