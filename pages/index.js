import React, { useEffect, useState } from 'react';

function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/data.json'); // Accede al archivo JSON desde el directorio `public`
      const jsonData = await response.json();
      setData(jsonData);
    }

    fetchData();
  }, []);

  if (!data) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>Data from JSON:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default HomePage;
