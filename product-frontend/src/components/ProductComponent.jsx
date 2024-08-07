import { useState, useEffect } from "react";
import {
  createProduct,
  getProduct,
  updateProduct,
} from "../services/ProductsService";
import { useNavigate, useParams } from "react-router-dom";

const ProductComponent = () => {
  const [pid, setPid] = useState("");
  const [pname, setPname] = useState("");
  const [price, setPrice] = useState("");

  /*{User Navigation}*/
  const navigator = useNavigate();
  /* {This is used to read id from query string} */
  const { id } = useParams();

  /*{This is used to get the particular product details when we enter update} */
  useEffect(() => {
    if (id) {
      getProduct(id)
        .then((response) => {
          setPid(response.data.pid);
          setPname(response.data.pname);
          setPrice(response.data.price);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  /*{save product details} */
  const saveOrUpdate = (e) => {
    e.preventDefault();
    if (validation()) {
      const product = { pid, pname, price };
      if (id) {
        updateProduct(id, product)
          .then((response) => {
            console.log(response.data);
            navigator("/products");
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        createProduct(product)
          .then((response) => {
            console.log(response.data);
            navigator("/products");
          })
          .catch((err) => {
            console.log(err);
          });
      }
      console.log(product);
    }
  };

  /*{Peform the validation} */
  const [errors, setErrors] = useState({
    pid: "",
    pname: "",
    price: "",
  });

  function validation() {
    let valid = true;
    const errorCopy = { ...errors };
    if (pid) {
      errorCopy.pid = "";
    } else {
      errorCopy.pid = "PID IS REQUIRED";
      valid = false;
    }
    if (pname.trim()) {
      errorCopy.pname = "";
    } else {
      errorCopy.pname = "PNAME IS REQUIRED";
      valid = false;
    }
    if (price) {
      errorCopy.price = "";
    } else {
      errorCopy.price = "PRICE IS REQUIRED";
      valid = false;
    }
    setErrors(errorCopy);
    return valid;
  }

  /*{ Handle the form data} */
  const handlePidData = (e) => {
    setPid(e.target.value);
  };
  const handlePNameData = (e) => {
    setPname(e.target.value);
  };
  const handlePriceData = (e) => {
    setPrice(e.target.value);
  };

  /* {Dynmically Changing the Title of the form i.e. ADD PRODUCT, UDPATE PRODUCT by using hook called as useParam} */
  function pageTitle() {
    if (id) {
      return <h2 className="text-center">UPDATE PRODUCT</h2>;
    } else {
      return <h2 className="text-center">ADD PRODUCT</h2>;
    }
  }

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {pageTitle()}
          <div className="card-body">
            <form action="">
              <div className="form-group mb-2">
                <label className="form-label">PID</label>
                <input
                  type="text"
                  className={`form-control ${errors.pid ? "is-invalid" : ""}`}
                  name="pid"
                  value={pid}
                  onChange={handlePidData}
                />
                {errors.pid && (
                  <span className="invalid-feedback">{errors.pid}</span>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">PNAME</label>
                <input
                  type="text"
                  className={`form-control ${errors.pname ? "is-invalid" : ""}`}
                  name="pname"
                  value={pname}
                  onChange={handlePNameData}
                />
                {errors.pname && (
                  <span className="invalid-feedback">{errors.pname}</span>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">PRICE</label>
                <input
                  type="text"
                  className={`form-control ${errors.price ? "is-invalid" : ""}`}
                  name="price"
                  value={price}
                  onChange={handlePriceData}
                />
                {errors.price && (
                  <span className="invalid-feedback">{errors.price}</span>
                )}
              </div>
              <button className="btn btn-success" onClick={saveOrUpdate}>
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
