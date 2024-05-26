import { useLoaderData } from "react-router-dom";
import "./ProductDetails.css";
import { FaCartShopping } from "react-icons/fa6";
const ProductDetails = () => {
  const shoe = useLoaderData();

  const { brand, description, image_url, price, title } = shoe;

  console.log(image_url);

  return (
    <div className="container">
      <div className="left-column">
        <img src={image_url} alt="product image" />
      </div>

      {/* <!-- Right Column --> */}
      <div className="right-column">
        {/* <!-- Product Description --> */}
        <div className="product-description">
          <span className="brand" style={{ color: "#fff" }}>
            shoe
          </span>
          <h1>{title}</h1>
          <p style={{ paddingBottom: "10px" }}>{description}</p>
        </div>

        {/* <!-- Product Configuration --> */}
        <div className="product-configuration">
          {/* <!-- Product Color --> */}
          <div className="product-color">
            <span>Color</span>

            <div className="color-choose">
              <div>
                <input
                  data-image="red"
                  type="radio"
                  id="red"
                  name="color"
                  value="red"
                  checked
                />
                <label value="red">
                  <span></span>
                </label>
              </div>
              <div>
                <input
                  data-image="blue"
                  type="radio"
                  id="blue"
                  name="color"
                  value="blue"
                />
                <label value="blue">
                  <span></span>
                </label>
              </div>
              <div>
                <input
                  data-image="black"
                  type="radio"
                  id="black"
                  name="color"
                  value="black"
                />
                <label value="black">
                  <span></span>
                </label>
              </div>
            </div>
          </div>

          {/* <!-- Cable Configuration --> */}
          <div className="cable-config">
            <span>Category </span>

            <div className="cable-choose" style={{ marginTop: "10px" }}>
              <button style={{ marginRight: "10px" }}>Running</button>
              <button style={{ marginRight: "10px" }}>Casuel</button>
              <button>Sports</button>
            </div>
          </div>
        </div>

        {/* <!-- Product Pricing --> */}
        <div className="product-price">
          <span style={{ color: "#FF4F03", fontWeight: "bold" }}>{price}$</span>
          <button
            className="cart-btn"
            style={{ display: "flex", alignItems: "center" }}
          >
            Add to cart <FaCartShopping className="shopping-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
