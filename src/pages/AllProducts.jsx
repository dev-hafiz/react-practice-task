import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/shoes/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    console.log("Product ID is", id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/shoes/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setProducts(products.filter((product) => product.id !== id));
            Swal.fire({
              title: "Deleted!",
              text: `Your product ${data.title} has been deleted.`,
              icon: "success",
            });
          });
      }
    });
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">All Products</h1>
      <div className="my-16 flex flex-wrap gap-4">
        <div className="overflow-x-auto w-full">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Delete</th>
                <th>Edit </th>
              </tr>
            </thead>
            <tbody>
              {products.map((shoe) => (
                <>
                  <tr key={shoe.id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={shoe?.image_url}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{shoe?.title}</div>
                          <div className="text-sm opacity-50">
                            {shoe?.brand}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>$ {shoe?.price}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(shoe?.id)}
                        className="btn bg-red-600 text-white btn-ghost btn-xs"
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <Link to={`/dashboard/all-products/edit/${shoe?.id}`}>
                        <button className="btn bg-green-600 text-white btn-ghost btn-xs">
                          Edit
                        </button>
                      </Link>
                    </td>
                  </tr>
                </>
              ))}

              {/* <SingleProductCardDashboard
            key={shoe.id}
            shoe={shoe}
            onDelete={handleDeleteProduct}
          /> */}

              {/* row 1 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
