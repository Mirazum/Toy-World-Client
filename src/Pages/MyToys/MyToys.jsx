
import  { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { AuthContext } from '../../providers/AuthProviders';
import UpdateToyModal from '../UpdateToyModal/UpdateToyModal';
import Swal from 'sweetalert2';
import './MyToys.css'

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [toy, setSelectedToy] = useState({});
  const [control, setControl] = useState(false);
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    fetch(`https://toy-marketplace-server-opal.vercel.app/mytoys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, [user,control]);

  const sortByPrice = (order) => {
    let sortedToys = [...toys];

    if (order === 'asc') {
      sortedToys.sort((a, b) => a.price - b.price);
      setSortOrder('asc');
    } else if (order === 'desc') {
      sortedToys.sort((a, b) => b.price - a.price);
      setSortOrder('desc');
    }

    setToys(sortedToys);
  };

  

  const handleToyUpdate = (data) => {
    console.log(data);
    fetch(`https://toy-marketplace-server-opal.vercel.app/updatetoy/${data?._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          setControl(!control);
          Swal.fire({
            title: 'Success!',
            text: 'Toy Updated Successfully',
            icon: 'success',
           confirmButtonText: 'Cool'
           
          });
          setSelectedToy(data); // Set the updated toy data in the modal
         
        }
        
       
      });
  };


  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {


            fetch(`https://toy-marketplace-server-opal.vercel.app/toy/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your item has been deleted.',
                            'success'
                        )
                        const remaining = toys.filter(cof => cof._id !== _id);
                        setToys(remaining);
                    }
                })

        }
    })
}
  return (
    <div>
      <div className="container">
        <h1 className="text-center p-4"> My Toys</h1>

        <div className="text-center">
        <Button
            variant="primary m-1 p-2"
            onClick={() => sortByPrice('asc')}
            className={sortOrder === 'asc' ? 'sort-button selected' : 'sort-button'} 
          >
        Price Low to High
          </Button>

          <Button
            variant="primary m-1 p-2"
            onClick={() => sortByPrice('desc')}
            className={sortOrder === 'desc' ? 'sort-button selected' : 'sort-button'}
          >
             Price High to Low
          </Button>
        </div>

       
        <Table striped bordered hover className="container">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
          {toys
              ?.sort((a, b) => {
                if (sortOrder === 'asc') {
                  return a.price - b.price;
                } else if (sortOrder === 'desc') {
                  return b.price - a.price;
                }
                return 0;
              })?.map((toy, index) => (
              <tr key={toy.id}>
                <td>{index + 1}</td>
                <td>{toy.title}</td>
                <td>{toy.category}</td>
                <td>{toy.quantity}</td>
                <td>{toy.price}$</td>
                <td className='w-50 '>{toy.description}</td>
                <td>
                  <Button variant="primary" onClick={() => {
                    setModalShow(true)
                    setSelectedToy(toy)
                  }}>
                    Edit
                  </Button>
                 
                </td>
                <td>
                  <button onClick={()=>handleDelete(toy._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
       <UpdateToyModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    toy={toy}
                    handleToyUpdate={handleToyUpdate} 
                  />
    </div>
  );
};

export default MyToys;








