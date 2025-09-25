// import React, { useState, useEffect } from "react";
// // Importación CORRECTA para Headless UI v2 (la versión actual)
// import { Button, Input, Label } from '@headlessui/react';

// function App() {
//     const [personas, setPersonas] = useState([]);
//     const [formData, setFormData] = useState({ dni: '', nombre: '', apellido: '', mutual: '' });

//     //Cargar personas al iniciar
//     useEffect(() => {
//         fetch('http://localhost:5000/personas')
//             .then(response => response.json())
//             .then(data => setPersonas(data))
//             .catch(error => console.error(error));
//     }, []);

//     // Manejar cambios en el formulario
//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     // Manejar envío del formulario
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         fetch('http://localhost:5000/personas', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) })

//             .then(response => response.json())
//             .then(newPersona => {
//                 setPersonas([...personas, newPersona]);
//                 setFormData({ dni: '', nombre: '', apellido: '', mutual: '' }); // Limpiar el formulario
//             });
//     };

//     //Marcar como terminado
//     const handleTerminado = (id) => {
//         fetch(`http://localhost:5000/personas/${id}/terminado`, { method: 'PUT' })
//             .then(() => {
//                 setPersonas(personas.map(persona =>
//                     persona.id === id ? { ...persona, terminado: 1 } : persona
//                 ));
//             });
//     };

//     // Función para eliminar una persona
//     const handleEliminar = (id) => {
//         if (window.confirm('¿Estás seguro de que quieres eliminar esta persona?')) {
//             fetch(`http://localhost:5000/personas/${id}`, {
//                 method: 'DELETE'
//             })
//                 .then(response => {
//                     if (response.ok) {
//                         setPersonas(personas.filter(persona => persona.id !== id));
//                     } else {
//                         console.error('Error al eliminar persona');
//                     }
//                 })
//                 .catch(error => console.error('Error:', error));
//         }
//     };
// };
// return (
//     <div style={{ padding: '20px' }}>
//         <h1>Registro de Personas</h1>

//         <form onSubmit={handleSubmit}>
//             <Label for="dni">DNI:</Label>
//             <Input
//                 type="text"
//                 name="dni"
//                 value={formData.dni}
//                 onChange={handleChange}
//                 required
//             />

//             <Label for="nombre">Nombre:</Label>
//             <Input
//                 type="text"
//                 name="nombre"
//                 value={formData.nombre}
//                 onChange={handleChange}
//                 required
//             />

//             <Label for="apellido">Apellido:</Label>
//             <Input
//                 type="text"
//                 name="apellido"
//                 value={formData.apellido}
//                 onChange={handleChange}
//                 required
//             />

//             <Label for="mutual">Mutual:</Label>
//             <Input
//                 type="text"
//                 name="mutual"
//                 value={formData.mutual}
//                 onChange={handleChange}
//             />

//             <Button type="submit">Agregar</Button>
//         </form>

//         <h2>Lista de Personas</h2>
//         <Table>
//             <thead>
//                 <tr>
//                     <th>DNI</th>
//                     <th>Nombre</th>
//                     <th>Apellido</th>
//                     <th>Hora Entrada</th>
//                     <th>Mutual</th>
//                     <th>Estado</th>
//                     <th>Acciones</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {personas.map(persona => (
//                     <tr key={persona.id}>
//                         <td>{persona.dni}</td>
//                         <td>{persona.nombre}</td>
//                         <td>{persona.apellido}</td>
//                         <td>{new Date(persona.hora_entrada).toLocaleString()}</td>
//                         <td>{persona.mutual}</td>
//                         <td>
//                             {persona.terminado
//                                 ? <span style={{ color: 'green' }}>Terminado</span>
//                                 : <span style={{ color: 'orange' }}>Pendiente</span>
//                             }
//                         </td>
//                         <td>
//                             {!persona.terminado && (
//                                 <Button onClick={() => handleTerminado(persona.id)}>
//                                     Terminado
//                                 </Button>
//                             )}
//                             <Button
//                                 onClick={() => handleEliminar(persona.id)}
//                                 style={{ marginLeft: '10px', backgroundColor: '#ff4444' }}
//                             >
//                                 Eliminar
//                             </Button>
//                         </td>
//                     </tr>
//                 ))}
//             </tbody>
//         </Table>
//     </div>
// );


// export default App;


// import React, { useState, useEffect } from "react";
// import { Button, Input, Label } from '@headlessui/react';
// import './index.css';

// function App() {
//     const [personas, setPersonas] = useState([]);
//     const [formData, setFormData] = useState({
//         dni: '',
//         nombre: '',
//         apellido: '',
//         mutual: ''
//     });

//     // Cargar personas al iniciar
//     useEffect(() => {
//         fetch('http://localhost:5000/personas')
//             .then(response => response.json())
//             .then(data => setPersonas(data))
//             .catch(error => console.error('Error cargando personas:', error));
//     }, []);

//     // Manejar cambios en el formulario
//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     // Manejar envío del formulario
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         fetch('http://localhost:5000/personas', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(formData)
//         })
//             .then(response => response.json())
//             .then(newPersona => {
//                 setPersonas([...personas, newPersona]);
//                 setFormData({ dni: '', nombre: '', apellido: '', mutual: '' });
//             })
//             .catch(error => console.error('Error agregando persona:', error));
//     };

//     // Marcar como terminado
//     const handleTerminado = (id) => {
//         fetch(`http://localhost:5000/personas/${id}/terminado`, { method: 'PUT' })
//             .then(() => {
//                 setPersonas(personas.map(persona =>
//                     persona.id === id ? { ...persona, terminado: 1 } : persona
//                 ));
//             })
//             .catch(error => console.error('Error marcando como terminado:', error));
//     };

//     // Función para eliminar una persona
//     const handleEliminar = (id) => {
//         if (window.confirm('¿Estás seguro de que quieres eliminar esta persona?')) {
//             fetch(`http://localhost:5000/personas/${id}`, {
//                 method: 'DELETE'
//             })
//                 .then(response => {
//                     if (response.ok) {
//                         setPersonas(personas.filter(persona => persona.id !== id));
//                     } else {
//                         console.error('Error al eliminar persona');
//                     }
//                 })
//                 .catch(error => console.error('Error eliminando persona:', error));
//         }
//     };

//     return (
//         <div className="p-5">
//             <h1 className="text-2xl font-bold mb-4">Registro de Personas</h1>

//             <form onSubmit={handleSubmit} className="mb-5">
//                 <Label htmlFor="dni" className="block mb-1">DNI:</Label>
//                 <Input
//                     type="text"
//                     name="dni"
//                     id="dni"
//                     value={formData.dni}
//                     onChange={handleChange}
//                     required
//                     className="block w-full p-2 border border-gray-300 rounded mb-3"
//                 />

//                 <Label htmlFor="nombre" className="block mb-1">Nombre:</Label>
//                 <Input
//                     type="text"
//                     name="nombre"
//                     id="nombre"
//                     value={formData.nombre}
//                     onChange={handleChange}
//                     required
//                     className="block w-full p-2 border border-gray-300 rounded mb-3"
//                 />

//                 <Label htmlFor="apellido" className="block mb-1">Apellido:</Label>
//                 <Input
//                     type="text"
//                     name="apellido"
//                     id="apellido"
//                     value={formData.apellido}
//                     onChange={handleChange}
//                     required
//                     className="block w-full p-2 border border-gray-300 rounded mb-3"
//                 />

//                 <Label htmlFor="mutual" className="block mb-1">Mutual:</Label>
//                 <Input
//                     type="text"
//                     name="mutual"
//                     id="mutual"
//                     value={formData.mutual}
//                     onChange={handleChange}
//                     className="block w-full p-2 border border-gray-300 rounded mb-3"
//                 />

//                 <Button
//                     type="submit"
//                     className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//                 >
//                     Agregar
//                 </Button>
//             </form>

//             <h2 className="text-xl font-semibold mb-3">Lista de Personas</h2>
//             <table className="w-full border-collapse border border-gray-300">
//                 <thead>
//                     <tr className="bg-gray-100">
//                         <th className="p-2 border border-gray-300">DNI</th>
//                         <th className="p-2 border border-gray-300">Nombre</th>
//                         <th className="p-2 border border-gray-300">Apellido</th>
//                         <th className="p-2 border border-gray-300">Hora Entrada</th>
//                         <th className="p-2 border border-gray-300">Mutual</th>
//                         <th className="p-2 border border-gray-300">Estado</th>
//                         <th className="p-2 border border-gray-300">Acciones</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {personas.map(persona => (
//                         <tr key={persona.id}>
//                             <td className="p-2 border border-gray-300">{persona.dni}</td>
//                             <td className="p-2 border border-gray-300">{persona.nombre}</td>
//                             <td className="p-2 border border-gray-300">{persona.apellido}</td>
//                             <td className="p-2 border border-gray-300">
//                                 {new Date(persona.hora_entrada).toLocaleString()}
//                             </td>
//                             <td className="p-2 border border-gray-300">{persona.mutual}</td>
//                             <td className="p-2 border border-gray-300">
//                                 {persona.terminado
//                                     ? <span className="estado-terminado">Terminado</span>
//                                     : <span className="estado-pendiente">Pendiente</span>
//                                 }
//                             </td>
//                             <td className="p-2 border border-gray-300">
//                                 {!persona.terminado && (
//                                     <Button
//                                         onClick={() => handleTerminado(persona.id)}
//                                         className="btn-terminado"
//                                     >
//                                         Terminado
//                                     </Button>
//                                 )}
//                                 <Button
//                                     onClick={() => handleEliminar(persona.id)}
//                                     className="btn-eliminar"
//                                 >
//                                     Eliminar
//                                 </Button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default App;



// import React, { useState, useEffect } from "react";
// import { Button, Input, Label } from "@headlessui/react";
// import "./index.css";

// function App() {
//     const [personas, setPersonas] = useState([]);
//     const [formData, setFormData] = useState({
//         dni: "",
//         nombre: "",
//         apellido: "",
//         mutual: "",
//     });
//     const [error, setError] = useState(null); // Estado para manejar errores

//     // URL del backend desde variable de entorno
//     const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

//     // Cargar personas al iniciar
//     useEffect(() => {
//         fetch(`${API_URL}/personas`)
//             .then((response) => {
//                 if (!response.ok) throw new Error("Error al cargar personas");
//                 return response.json();
//             })
//             .then((data) => setPersonas(data))
//             .catch((error) => {
//                 setError(error.message);
//                 console.error("Error cargando personas:", error);
//             });
//     }, []);

//     // Manejar cambios en el formulario
//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     // Manejar envío del formulario
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setError(null); // Limpiar errores previos
//         fetch(`${API_URL}/personas`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(formData),
//         })
//             .then((response) => {
//                 if (!response.ok) {
//                     return response.json().then((err) => {
//                         throw new Error(err.error || "Error al agregar persona");
//                     });
//                 }
//                 return response.json();
//             })
//             .then((newPersona) => {
//                 setPersonas([...personas, newPersona]);
//                 setFormData({ dni: "", nombre: "", apellido: "", mutual: "" });
//             })
//             .catch((error) => {
//                 setError(error.message);
//                 console.error("Error agregando persona:", error);
//             });
//     };

//     // Marcar como terminado
//     const handleTerminado = (id) => {
//         setError(null);
//         fetch(`${API_URL}/personas/${id}/terminar`, { method: "PUT" })
//             .then((response) => {
//                 if (!response.ok) throw new Error("Error al marcar como terminado");
//                 return response.json();
//             })
//             .then(() => {
//                 setPersonas(
//                     personas.map((persona) =>
//                         persona.id === id ? { ...persona, terminado: 1 } : persona
//                     )
//                 );
//             })
//             .catch((error) => {
//                 setError(error.message);
//                 console.error("Error marcando como terminado:", error);
//             });
//     };

//     // Eliminar una persona
//     const handleEliminar = (id) => {
//         if (window.confirm("¿Estás seguro de que quieres eliminar esta persona?")) {
//             setError(null);
//             fetch(`${API_URL}/personas/${id}`, { method: "DELETE" })
//                 .then((response) => {
//                     if (!response.ok) throw new Error("Error al eliminar persona");
//                     setPersonas(personas.filter((persona) => persona.id !== id));
//                 })
//                 .catch((error) => {
//                     setError(error.message);
//                     console.error("Error eliminando persona:", error);
//                 });
//         }
//     };

//     return (
//         <div className="p-5">
//             <h1 className="text-2xl font-bold mb-4">Registro de Personas</h1>

//             {error && <div className="text-red-500 mb-4">{error}</div>}

//             <form onSubmit={handleSubmit} className="mb-5">
//                 <Label htmlFor="dni" className="block mb-1">
//                     DNI:
//                 </Label>
//                 <Input
//                     type="text"
//                     name="dni"
//                     id="dni"
//                     value={formData.dni}
//                     onChange={handleChange}
//                     required
//                     className="block w-full p-2 border border-gray-300 rounded mb-3"
//                 />

//                 <Label htmlFor="nombre" className="block mb-1">
//                     Nombre:
//                 </Label>
//                 <Input
//                     type="text"
//                     name="nombre"
//                     id="nombre"
//                     value={formData.nombre}
//                     onChange={handleChange}
//                     required
//                     className="block w-full p-2 border border-gray-300 rounded mb-3"
//                 />

//                 <Label htmlFor="apellido" className="block mb-1">
//                     Apellido:
//                 </Label>
//                 <Input
//                     type="text"
//                     name="apellido"
//                     id="apellido"
//                     value={formData.apellido}
//                     onChange={handleChange}
//                     required
//                     className="block w-full p-2 border border-gray-300 rounded mb-3"
//                 />

//                 <Label htmlFor="mutual" className="block mb-1">
//                     Mutual:
//                 </Label>
//                 <Input
//                     type="text"
//                     name="mutual"
//                     id="mutual"
//                     value={formData.mutual}
//                     onChange={handleChange}
//                     className="block w-full p-2 border border-gray-300 rounded mb-3"
//                 />

//                 <Button
//                     type="submit"
//                     className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//                 >
//                     Agregar
//                 </Button>
//             </form>

//             <h2 className="text-xl font-semibold mb-3">Lista de Personas</h2>
//             <table className="w-full border-collapse border border-gray-300">
//                 <thead>
//                     <tr className="bg-gray-100">
//                         <th className="p-2 border border-gray-300">DNI</th>
//                         <th className="p-2 border border-gray-300">Nombre</th>
//                         <th className="p-2 border border-gray-300">Apellido</th>
//                         <th className="p-2 border border-gray-300">Hora Entrada</th>
//                         <th className="p-2 border border-gray-300">Mutual</th>
//                         <th className="p-2 border border-gray-300">Estado</th>
//                         <th className="p-2 border border-gray-300">Acciones</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {personas.map((persona) => (
//                         <tr key={persona.id}>
//                             <td className="p-2 border border-gray-300">{persona.dni}</td>
//                             <td className="p-2 border border-gray-300">{persona.nombre}</td>
//                             <td className="p-2 border border-gray-300">{persona.apellido}</td>
//                             <td className="p-2 border border-gray-300">
//                                 {new Date(persona.hora_entrada).toLocaleString()}
//                             </td>
//                             <td className="p-2 border border-gray-300">{persona.mutual}</td>
//                             <td className="p-2 border border-gray-300">
//                                 {persona.terminado ? (
//                                     <span className="estado-terminado">Terminado</span>
//                                 ) : (
//                                     <span className="estado-pendiente">Pendiente</span>
//                                 )}
//                             </td>
//                             <td className="p-2 border border-gray-300">
//                                 {!persona.terminado && (
//                                     <Button
//                                         onClick={() => handleTerminado(persona.id)}
//                                         className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 mr-2"
//                                     >
//                                         Terminado
//                                     </Button>
//                                 )}
//                                 <Button
//                                     onClick={() => handleEliminar(persona.id)}
//                                     className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                                 >
//                                     Eliminar
//                                 </Button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default App;


// import React, { useState, useEffect } from "react";
// import { Button } from "@headlessui/react"; // Solo importamos Button
// import "./index.css";

// function App() {
//     const [personas, setPersonas] = useState([]);
//     const [formData, setFormData] = useState({
//         dni: "",
//         nombre: "",
//         apellido: "",
//         mutual: "",
//     });
//     const [error, setError] = useState(null);

//     const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

//     useEffect(() => {
//         fetch(`${API_URL}/personas`)
//             .then((response) => {
//                 if (!response.ok) throw new Error("Error al cargar personas");
//                 return response.json();
//             })
//             .then((data) => setPersonas(data))
//             .catch((error) => {
//                 setError(error.message);
//                 console.error("Error cargando personas:", error);
//             });
//     }, []);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setError(null);
//         fetch(`${API_URL}/personas`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(formData),
//         })
//             .then((response) => {
//                 if (!response.ok) {
//                     return response.json().then((err) => {
//                         throw new Error(err.error || "Error al agregar persona");
//                     });
//                 }
//                 return response.json();
//             })
//             .then((newPersona) => {
//                 setPersonas([...personas, newPersona]);
//                 setFormData({ dni: "", nombre: "", apellido: "", mutual: "" });
//             })
//             .catch((error) => {
//                 setError(error.message);
//                 console.error("Error agregando persona:", error);
//             });
//     };

//     const handleTerminado = (id) => {
//         setError(null);
//         fetch(`${API_URL}/personas/${id}/terminar`, { method: "PUT" })
//             .then((response) => {
//                 if (!response.ok) throw new Error("Error al marcar como terminado");
//                 return response.json();
//             })
//             .then(() => {
//                 setPersonas(
//                     personas.map((persona) =>
//                         persona.id === id ? { ...persona, terminado: 1 } : persona
//                     )
//                 );
//             })
//             .catch((error) => {
//                 setError(error.message);
//                 console.error("Error marcando como terminado:", error);
//             });
//     };

//     const handleEliminar = (id) => {
//         if (window.confirm("¿Estás seguro de que quieres eliminar esta persona?")) {
//             setError(null);
//             fetch(`${API_URL}/personas/${id}`, { method: "DELETE" })
//                 .then((response) => {
//                     if (!response.ok) throw new Error("Error al eliminar persona");
//                     setPersonas(personas.filter((persona) => persona.id !== id));
//                 })
//                 .catch((error) => {
//                     setError(error.message);
//                     console.error("Error eliminando persona:", error);
//                 });
//         }
//     };

//     return (
//         <div className="p-5">
//             <h1 className="text-2xl font-bold mb-4">Registro de Personas</h1>

//             {error && <div className="text-red-500 mb-4">{error}</div>}

//             <form onSubmit={handleSubmit} className="mb-5">
//                 <label htmlFor="dni" className="block mb-1">
//                     DNI:
//                 </label>
//                 <input
//                     type="text"
//                     name="dni"
//                     id="dni"
//                     value={formData.dni}
//                     onChange={handleChange}
//                     required
//                     className="block w-full p-2 border border-gray-300 rounded mb-3"
//                 />

//                 <label htmlFor="nombre" className="block mb-1">
//                     Nombre:
//                 </label>
//                 <input
//                     type="text"
//                     name="nombre"
//                     id="nombre"
//                     value={formData.nombre}
//                     onChange={handleChange}
//                     required
//                     className="block w-full p-2 border border-gray-300 rounded mb-3"
//                 />

//                 <label htmlFor="apellido" className="block mb-1">
//                     Apellido:
//                 </label>
//                 <input
//                     type="text"
//                     name="apellido"
//                     id="apellido"
//                     value={formData.apellido}
//                     onChange={handleChange}
//                     required
//                     className="block w-full p-2 border border-gray-300 rounded mb-3"
//                 />

//                 <label htmlFor="mutual" className="block mb-1">
//                     Mutual:
//                 </label>
//                 <input
//                     type="text"
//                     name="mutual"
//                     id="mutual"
//                     value={formData.mutual}
//                     onChange={handleChange}
//                     className="block w-full p-2 border border-gray-300 rounded mb-3"
//                 />

//                 <Button
//                     type="submit"
//                     className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//                 >
//                     Agregar
//                 </Button>
//             </form>

//             <h2 className="text-xl font-semibold mb-3">Lista de Personas</h2>
//             <table className="w-full border-collapse border border-gray-300">
//                 <thead>
//                     <tr className="bg-gray-100">
//                         <th className="p-2 border border-gray-300">DNI</th>
//                         <th className="p-2 border border-gray-300">Nombre</th>
//                         <th className="p-2 border border-gray-300">Apellido</th>
//                         <th className="p-2 border border-gray-300">Hora Entrada</th>
//                         <th className="p-2 border border-gray-300">Mutual</th>
//                         <th className="p-2 border border-gray-300">Estado</th>
//                         <th className="p-2 border border-gray-300">Acciones</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {personas.map((persona) => (
//                         <tr key={persona.id}>
//                             <td className="p-2 border border-gray-300">{persona.dni}</td>
//                             <td className="p-2 border border-gray-300">{persona.nombre}</td>
//                             <td className="p-2 border border-gray-300">{persona.apellido}</td>
//                             <td className="p-2 border border-gray-300">
//                                 {new Date(persona.hora_entrada).toLocaleString()}
//                             </td>
//                             <td className="p-2 border border-gray-300">{persona.mutual}</td>
//                             <td className="p-2 border border-gray-300">
//                                 {persona.terminado ? (
//                                     <span className="estado-terminado">Terminado</span>
//                                 ) : (
//                                     <span className="estado-pendiente">Pendiente</span>
//                                 )}
//                             </td>
//                             <td className="p-2 border border-gray-300">
//                                 {!persona.terminado && (
//                                     <Button
//                                         onClick={() => handleTerminado(persona.id)}
//                                         className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 mr-2"
//                                     >
//                                         Terminado
//                                     </Button>
//                                 )}
//                                 <Button
//                                     onClick={() => handleEliminar(persona.id)}
//                                     className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                                 >
//                                     Eliminar
//                                 </Button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default App;


import React, { useState, useEffect } from "react";
import { Button } from "@headlessui/react";
import "./index.css";

function App() {
    const [personas, setPersonas] = useState([]);
    const [formData, setFormData] = useState({
        dni: "",
        nombre: "",
        apellido: "",
        mutual: "",
        atencion: "", // Nuevo campo
    });
    const [error, setError] = useState(null);
    const [showForm, setShowForm] = useState(false); // Estado para mostrar/ocultar formulario

    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

    useEffect(() => {
        fetch(`${API_URL}/personas`)
            .then((response) => {
                if (!response.ok) {
                    // Intenta leer el cuerpo del error como texto para depurar
                    return response.text().then(text => {
                        console.error("Server response (not ok):", text);
                        throw new Error(`Error al cargar personas. Status: ${response.status}`);
                    });
                }
                return response.json();
            })
            .then((data) => setPersonas(data))
            .catch((error) => {
                setError(error.message);
                console.error("Error cargando personas:", error);
            });
    }, [API_URL]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const response = await fetch(`${API_URL}/personas`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Error al agregar persona");
            }

            setPersonas((prev) => [...prev, result]);
            setFormData({ dni: "", nombre: "", apellido: "", mutual: "", atencion: "" });
            setShowForm(false); // Ocultar formulario tras agregar
        } catch (error) {
            setError(error.message);
            console.error("Error agregando persona:", error);
        }
    };

    const handleTerminado = async (id) => {
        setError(null);
        try {
            const response = await fetch(`${API_URL}/personas/${id}/terminar`, { method: "PUT" });
            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.error || "Error al marcar como terminado");
            }
            setPersonas((prev) =>
                prev.map((persona) =>
                    persona.id === id ? { ...persona, terminado: 1 } : persona
                )
            );
        } catch (error) {
            setError(error.message);
            console.error("Error marcando como terminado:", error);
        }
    };

    const handleEliminar = async (id) => {
        if (window.confirm("¿Estás seguro de que quieres eliminar esta persona?")) {
            setError(null);
            try {
                const response = await fetch(`${API_URL}/personas/${id}`, { method: "DELETE" });
                if (!response.ok) {
                    const err = await response.json();
                    throw new Error(err.error || "Error al eliminar persona");
                }
                setPersonas((prev) => prev.filter((persona) => persona.id !== id));
            } catch (error) {
                setError(error.message);
                console.error("Error eliminando persona:", error);
            }
        }
    };

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-4">Registro de Personas</h1>

            <Button
                onClick={() => setShowForm(!showForm)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mb-4"
            >
                {showForm ? "Ocultar Formulario" : "Mostrar Formulario"}
            </Button>

            {error && <div className="text-red-500 mb-4">Error: {error}</div>}

            {showForm && (
                <form onSubmit={handleSubmit} className="mb-5">
                    <label htmlFor="dni" className="block mb-1">
                        DNI:
                    </label>
                    <input
                        type="text"
                        name="dni"
                        id="dni"
                        value={formData.dni}
                        onChange={handleChange}
                        required
                        className="block w-full p-2 border border-gray-300 rounded mb-3"
                    />

                    <label htmlFor="nombre" className="block mb-1">
                        Nombre:
                    </label>
                    <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="block w-full p-2 border border-gray-300 rounded mb-3"
                    />

                    <label htmlFor="apellido" className="block mb-1">
                        Apellido:
                    </label>
                    <input
                        type="text"
                        name="apellido"
                        id="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        required
                        className="block w-full p-2 border border-gray-300 rounded mb-3"
                    />

                    <label htmlFor="mutual" className="block mb-1">
                        Mutual:
                    </label>
                    <input
                        type="text"
                        name="mutual"
                        id="mutual"
                        value={formData.mutual}
                        onChange={handleChange}
                        className="block w-full p-2 border border-gray-300 rounded mb-3"
                    />

                    <label htmlFor="atencion" className="block mb-1">
                        Atención:
                    </label>
                    <textarea
                        name="atencion"
                        id="atencion"
                        value={formData.atencion}
                        onChange={handleChange}
                        className="block w-full p-2 border border-gray-300 rounded mb-3"
                        rows="4"
                        placeholder="Descripción de la atención"
                    />

                    <Button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Agregar
                    </Button>
                </form>
            )}

            <h2 className="text-xl font-semibold mb-3">Lista de Personas</h2>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-2 border border-gray-300">DNI</th>
                        <th className="p-2 border border-gray-300">Nombre</th>
                        <th className="p-2 border border-gray-300">Apellido</th>
                        <th className="p-2 border border-gray-300">Hora Entrada</th>
                        <th className="p-2 border border-gray-300">Mutual</th>
                        <th className="p-2 border border-gray-300">Atención</th>
                        <th className="p-2 border border-gray-300">Estado</th>
                        <th className="p-2 border border-gray-300">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {personas.map((persona) => (
                        <tr key={persona.id}>
                            <td className="p-2 border border-gray-300">{persona.dni}</td>
                            <td className="p-2 border border-gray-300">{persona.nombre}</td>
                            <td className="p-2 border border-gray-300">{persona.apellido}</td>
                            <td className="p-2 border border-gray-300">
                                {new Date(persona.hora_entrada).toLocaleString()}
                            </td>
                            <td className="p-2 border border-gray-300">{persona.mutual}</td>
                            <td className="p-2 border border-gray-300">{persona.atencion || '-'}</td>
                            <td className="p-2 border border-gray-300">
                                {persona.terminado ? (
                                    <span className="estado-terminado">Terminado</span>
                                ) : (
                                    <span className="estado-pendiente">Pendiente</span>
                                )}
                            </td>
                            <td className="p-2 border border-gray-300">
                                {!persona.terminado && (
                                    <Button
                                        onClick={() => handleTerminado(persona.id)}
                                        className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 mr-2"
                                    >
                                        Terminado
                                    </Button>
                                )}
                                <Button
                                    onClick={() => handleEliminar(persona.id)}
                                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                    Eliminar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;