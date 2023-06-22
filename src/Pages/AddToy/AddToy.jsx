import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProviders";
import './AddToy.css'
import Swal from "sweetalert2";

const AddToy = () => {
    const { user } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
        fetch("https://toy-marketplace-server-opal.vercel.app/addtoys",{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data),
        })
        .then((res)=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Toy Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                }
            
        })
       
      }
    
    return (
        <div className="container">
            <div className="add-toy-container">
        <div className="add-toy row ">
          <div className="col-md-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              {errors.exampleRequired && <span>This field is required</span>}
              <input
                className="text-input"
                {...register("price")}
                placeholder="price"
                type="number"
               
              />
               <input
              className="text-input"
              {...register("title")}
              placeholder="Name"
             
            />
  
              <input
                className="text-input"
                {...register("rating", { required: true })}
                placeholder="rating"
                
              />
              <input
                className="text-input"
                {...register("quantity", { required: true })}
                placeholder="quantity"
                type="number"
              />
              <select className="text-input" {...register("category")}>
                <option value="lego city">lego city</option>
                <option value="lego star wars">lego star wars</option>
                <option value="lego cars">lego cars</option>
                
              </select>
              
              <input
                className="text-input"
                {...register("image")}
                placeholder="image link"
                type="url"
               
              />
              <input
                className="text-input"
                {...register("deadline")}
                placeholder="deadline"
                type="date"
              />
              <input
                className="text-input"
                value={user?.email}
                {...register("postedBy")}
                placeholder="your email"
                type="email"
              />
              {/* <input
                className="text-input "
                value={user?.displayName}
                {...register("postedBy")}
                placeholder="your name"
                type="text"
                
              />
             
              <textarea
                className="mt-3"
                {...register("description")}
                placeholder="description"
                style={{ height: "150px", width: "300px" }} 
              /> */}
                  
               
                  <div className="form-column">
                  <textarea
                    className="text-input"
                    {...register("description")}
                    placeholder="description"
                    style={{ height: "150px", width: "300px" }}
                  />
                </div>
              

              
              <input className="submit-btn" value="Add Toy" type="submit" />
            </form>
          </div>
         
        </div>
      </div>
        </div>
    );
};

export default AddToy;

