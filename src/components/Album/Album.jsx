import { useEffect, useState } from 'react';

const Album = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const getAlbums = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/albums');
      const data = await res.json();
      setAlbums(data);
    };

    getAlbums();
  }, []);

  useEffect(() => {
    const customClick = () => console.log('Hello World');
    window.addEventListener('click', customClick);

    return window.removeEventListener('click', customClick);
  }, []);

  return <div>{albums.length > 0 && albums.map((album) => <p key={album.id}>{album.title}</p>)}</div>;
};

export default Album;
