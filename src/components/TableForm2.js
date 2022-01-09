import React from "react";
import { v4 as uuidv4 } from "uuid";

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
    
        let rows= document.querySelectorAll(".amount");
        let sum= 0;
        let i
        for(i=0 ; i<rows.length ; i++){
            if(rows[i].className==="amount"){
                sum+=isNaN(rows[i].innerHTML)?0: parseInt(rows[i].innerHTML)
                setTotal(sum)
            }
        
  };
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <div>
    <br />
      <table style={{ width: "100%" }}>
        <thead>
          <tr className="text-left bg-gray-200 p-2 rounded shadow">
            <th style={{paddingLeft:"20px", width: "50%" }}>Item Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Amount</th>
          </tr>
        </thead>
        {list.map(({ id, itemDesc, quantity, price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr>
                <td style={{paddingLeft:"20px"}}>{itemDesc}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{amount}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
      <h1 style={{paddingTop: "21px",paddingLeft:"20px"}}>Total: {numberWithCommas(total)} ₹</h1>
    </div>
  );
}

export default TableForm;
