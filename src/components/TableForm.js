import React from "react";
import { v4 as uuidv4 } from "uuid";
import {AiFillDelete} from "react-icons/ai"
import {AiFillEdit} from "react-icons/ai"
import { useState , useEffect} from "react";

function TableForm({
  itemDesc,
  price,
  quantity,
  amount,
  list,
  setItemDesc,
  setPrice,
  setQuantity,
  setAmount,
  setList,
  total,
  setTotal
}) {
    useEffect(() => {
        let rows= document.querySelectorAll(".amount");
    let sum= 0;
    let i
    for(i=0 ; i<rows.length ; i++){
        if(rows[i].className==="amount"){
            sum+=isNaN(rows[i].innerHTML)?0: parseInt(rows[i].innerHTML)
            setTotal(sum)
        }
    }
    })
    

    
    const [edited, setEdited] = useState(false)
  const handleSubmit = (e) => {
    const newItem = {
      id: uuidv4(),
      itemDesc,
      quantity,
      price,
      amount,
    };
    setItemDesc("");
    setPrice("");
    setQuantity("");
    setAmount("");
    setList([newItem, ...list]);
  };
  const delet=(id)=>{
    setList(list.filter((row)=>row.id !== id))
  }
  const edit=(id)=>{
      const editedRow=list.find((row)=>row.id===id)
      setEdited(true)
      setItemDesc(editedRow.itemDesc)
      setQuantity(editedRow.quantity)
      setPrice(editedRow.price)
      setList(list.filter((row)=>row.id !== id))
  }
  return (
    <div>
      <form>
        <label htmlFor="ItemDesc" className="font-bold">
          Enter item description
        </label>
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Enter item description"
          required
          value={itemDesc}
          onChange={(e) => setItemDesc(e.target.value)}
          className="w-full bg-blue-200 rounded-lg"
        />
        <label htmlFor="quantity" className="font-bold">
          Quantity
        </label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          placeholder="0"
          required
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full bg-blue-200 rounded-lg"
        />
        <label htmlFor="price" className="font-bold">
          Price
        </label>
        <input
          type="number"
          name="price"
          id="price"
          placeholder="0"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full bg-blue-200 rounded-lg"
        />
        <button
            className="bg-blue-500 rounded-lg shadow text-white py-2 px-6 border-2 border-blue-500 hover:bg-transparent transition-all duration-300 hover:text-blue-500 mt-5"
          type="submit"
          onClick={(e) => {
            handleSubmit();
            e.preventDefault();
            setEdited(false)
          }}
        >
          {edited? "Editing..." :"add item"}
        </button>
      </form>
      <table style={{ width: "100%" , marginTop:"30px" }}>
        <thead>
          <tr className="text-left bg-gray-200 p-2 rounded shadow">
            <th style={{ width: "50%" }}>Item Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Amount</th>
          </tr>
        </thead>
        {list.map(({ id, itemDesc, quantity, price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr>
                <td>{itemDesc}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td className="amount">{amount}</td>
                <td><button onClick={()=>{delet(id)}}><AiFillDelete className="text-red-500 font-bold text-xl"/></button></td>
                <td><button onClick={()=>{edit(id)}}><AiFillEdit className="text-blue-500 font-bold text-xl"/></button></td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
      <h3 style={{margin : "20px"}} >Total:{total}</h3>
    </div>
  );
}

export default TableForm;
