import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://toy-marketplace-server-opal.vercel.app/alltoys')
      .then(res => res.json())
      .then(data => setToys(data));
  }, []);

  const handleSearch = () => {
    fetch(`https://toy-marketplace-server-opal.vercel.app/getToysByText/${searchText}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setToys(data);
      });
  };

  const handleViewDetails = (toyId) => {
    // Check if the user is logged in
    const isLoggedIn = true; // Replace this with your actual login check

    if (isLoggedIn) {
      navigate(`/toy/${toyId}`);
    } else {
      navigate('/login'); // Redirect to the login page if the user is not logged in
    }
  };

  return (
    <div>
      <div className="container">
        <h1 className="text-center p-4">My Toys</h1>
        <div className="search-box p-2 text-center">
          <input
            onChange={e => setSearchText(e.target.value)}
            type="text"
            className="p-2"
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <Table striped bordered hover className="container">
          <thead>
            <tr>
              <th>#</th>
              <th>User Email</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {toys?.map((toy, index) => (
              <tr key={toy.id}>
                <td>{index + 1}</td>
                <td>{toy.postedBy}</td>
                <td>{toy.title}</td>
                <td>{toy.category}</td>
                <td>{toy.quantity}</td>
                <td>{toy.price}$</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleViewDetails(toy._id)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AllToys;
