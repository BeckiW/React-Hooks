import React, { useState, useEffect } from "react";
import Product from "../product"
import "./style.css";
import Header from "../Header"

let URL = "http://localhost:8080/products/"

function Productpage() {

    const [products, setProducts] = useState([]);
    const [newProduct, setnewProduct] = useState({});
    const [newProductAdded, setnewProductAdded] = useState(false);

      // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    this.fetchData()
  });




  fetchData = () => {
      fetch(URL)
        .then((response) => {
          return response.json()
        })
        .then((json) => {
          this.setState({
            products: json
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }


    postData = () => {
      const url = "http://localhost:8080/product"
      const { newProduct } = this.state
      fetch(url, {
        method: "POST",
        body: JSON.stringify(newProduct),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          if (response.status === 201) {
            this.setState({
              newProductAdded: true
            })
          }
        })
        .catch(error => {
          console.log(error)
        })
    }

    addNewProduct = newProduct => {
      this.setState({
        newProduct
      }, () => { this.postData() })
    }


  render() {

    return (
      <div className="App">
<Header />

       <div className="product-container">

              {this.state.products.map((item) => {
                return <Product key= {item.id}
                  name={item.name}
                  image={item.image}
                  type={item.type}
                  substance={item.substance}
                  size={item.size}
                  numberInPack={item.numberInPack}
                  price={item.price}
                  deliveryTime={item.deliveryTime}
                  />
              })}

</div>

</div>

    )
  }

}

export default Productpage
