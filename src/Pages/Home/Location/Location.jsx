
import img from '../../../assets/get.jpg';

const Location = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="contact-section container" >
      <div>
        <h2 className='text-center'>Contact Us</h2>
       <div className='d-md-flex justify-content-between align-items-center'>
       <div>
          <img src={img} alt="" style={{ height: '300px' }} />
        </div>
        <div>
        <p className='p-2'>We would love to hear from you. Fill out the form below to get in touch!</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group m-2 px-2 w-25">
            <label htmlFor="name" >Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group m-2 px-2 w-25">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group m-2 px-2 w-25">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className='m-2 p-1'>Submit</button>
        </form>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Location;
