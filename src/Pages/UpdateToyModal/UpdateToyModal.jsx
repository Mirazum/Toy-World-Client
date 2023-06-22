

import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";



const UpdateToyModal = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const { handleToyUpdate } = props;
      //   console.log(handleToyUpdate);
      console.log(props.toy)

      const updateModal=(data)=>{
        handleToyUpdate({_id:props?.toy?._id,...data})
       
      }
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title
              className="text-center w-100 m-auto"
              id="contained-modal-title-vcenter"
            >
              Update Toy
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form
              className="container text-center"
              onSubmit={handleSubmit(updateModal)}
            >
              {errors.exampleRequired && <span>This field is required</span>}
              <input
                className="text-input"
                {...register("title")}
                placeholder="title"
                defaultValue={props?.toy?.title}
              />
              <input
                className="text-input"
                {...register("quantity", { required: true })}
                placeholder="quantity"
                type="number"
                defaultValue={props?.toy?.quantity}
              />
              <input
                className="text-input"
                {...register("price", { required: true })}
                placeholder="price"
                type="number"
                defaultValue={props?.toy?.price}
              />
              

              <div className="form-column">
                  <textarea
                    className="text-input"
                    {...register("description")}
                    placeholder="description"
                    style={{ height: "150px", width: "300px" }}
                  />
                </div>
              <input className="submit-btn" value="Update toy" type="submit" />
            </form>
          </Modal.Body>
         
        </Modal>
      );
    };

export default UpdateToyModal;

