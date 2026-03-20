
function Product(props){  //{props:{productObj:{}}}
    console.log(props)
    const {productObj}=props;
    return(
        <div className="shadow-2xl px-3 mx-3 rounded-2xl border-2">
         <h2 className="text-cyan-950">{productObj.title}</h2>
        <p>price:{productObj.price}</p> 
        </div>
    )
}
export default Product;