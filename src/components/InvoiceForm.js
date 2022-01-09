import { useState, useEffect, useRef } from "react";
import React from "react";
import { FaPrint, FaDownload } from "react-icons/fa";

import {
  Person,
  Client,
  InvoiceNumber,
  InvoiceDetails,
  Details,
  Notes,
  Footer,
} from "./index";
import TableForm from "./TableForm";
import TableForm2 from "./TableForm2";
import ReactToPrint from "react-to-print";

export default function InvoiceForm() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [showInvoice, setShowInvoice] = useState(false);
  const [itemDesc, setItemDesc] = useState("");
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const componentRef = useRef();
  const handleSubmit = (e) => {
    // Prevent page reload on form submit
    e.preventDefault();
  };
  useEffect(() => {
    const CalculateAmount = (amount) => {
      setAmount(price * quantity);
    };
    CalculateAmount(amount);
  }, [amount, setAmount, price, quantity]);

  return (
    <div className=" md:max-w-4xl md:mx-auto">{<button
            style={{ position: "fixed", left: "7px", top: "37px" }}
            className="bg-blue-500 rounded-lg shadow text-white  px-2 border-2 border-blue-500 hover:bg-transparent transition-all duration-300 hover:text-blue-500"
            onClick={() => {
              window.location.reload(false);
              window.scroll(0,0);
            }}
          >New</button>}
      {!showInvoice && (
        <section className="p-10">
          <h1 className="text-center px-5 mb-3 text-4xl lg:text-6xl">
            Welcome to the <span className="text-blue-700">Invoicer</span> app
          </h1>
          <p style={{ color:"blue" , fontWeight:"700"}} className="text-center mb-5">
            Make your invoice online faster and better
          </p>
          <p className="mb-5" style={{textAlign:"center"}}>
            Please fill in the form with accurate information (double check before submitting). This is what will
            be displayed on your invoice.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start justify-start"
          >
            {/* Your details */}
            <label htmlFor="name" className="font-bold">
              Your name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-blue-200 rounded-lg"
            />
            <label htmlFor="address" className="font-bold">
              Where do you stay?
            </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full bg-blue-200 rounded-lg"
            />
            <label htmlFor="email" className="font-bold">
              Your email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-blue-200 rounded-lg"
            />
            <label htmlFor="tel" className="font-bold">
              Your phone number:
            </label>
            <input
              type="tel"
              name="tel"
              id="tel"
              placeholder="Your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full bg-blue-200 rounded-lg"
            />
            {/* End of personal details */}

            {/* Client details */}
            <label htmlFor="clientName" className="font-bold">
              Client's name
            </label>
            <input
              type="text"
              name="clientName"
              id="clientName"
              placeholder="Client's name"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full bg-blue-200 rounded-lg"
            />
            <label htmlFor="clientAddress" className="font-bold">
              Client's Address
            </label>
            <input
              type="text"
              name="clientAddress"
              id="clientAddress"
              placeholder="Client's address"
              value={clientAddress}
              onChange={(e) => setClientAddress(e.target.value)}
              className="w-full bg-blue-200 rounded-lg"
            />
            {/* End of client details */}

            {/* Invoice number */}
            <label htmlFor="invoice__number" className="font-bold">
              Invoice Number:
            </label>
            <input
              type="text"
              id="invoice__number"
              value={invoiceNumber}
              placeholder="e.g 1002"
              onChange={(e) => setInvoiceNumber(e.target.value)}
              className="w-full bg-blue-200 rounded-lg"
            />
            <label htmlFor="invoice__date" className="font-bold">
              Invoice date:
            </label>
            <input
              type="date"
              id="invoice__date"
              id="invoice__date"
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
              className="w-full bg-blue-200 rounded-lg"
            />
            <label htmlFor="due__date" className="font-bold">
              Due date:
            </label>
            <input
              type="date"
              name="due__date"
              id="due__date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full bg-blue-200 rounded-lg"
            />
            {/* End of invoice number */}

            {/* Invoice details */}
            <h3 className="text-xl">Invoice items and details</h3>
            <TableForm
              itemDesc={itemDesc}
              price={price}
              quantity={quantity}
              amount={amount}
              list={list}
              setItemDesc={setItemDesc}
              setPrice={setPrice}
              setQuantity={setQuantity}
              setAmount={setAmount}
              setList={setList}
              total={total}
              setTotal={setTotal}
            />

            {/* End of invoice details */}

            {/* Additional Notes */}
            <Notes notes={notes} setNotes={setNotes} />
            {/* End of Additional Notes */}

            <button
              type="submit"
              onClick={() => setShowInvoice(true)}
              className="bg-blue-500 rounded-lg shadow text-white py-2 px-6 border-2 border-blue-500 hover:bg-transparent transition-all duration-300 hover:text-blue-500 mt-5"
            >
              Submit information
            </button>
          </form>
        </section>
      )}

      {/* Invoice */}
      <section className="bg-white p-10 mt-10 rounded-lg shadow">
        {showInvoice && (
          <ReactToPrint
            trigger={() => (
              <button className="flex items-center bg-blue-300 text-gray-800 py-1 px-4 rounded shadow hover:bg-gray-400 transition-all duration-300">
                print/download
                <FaPrint className="ml-2" />
              </button>
            )}
            content={() => componentRef.current}
          />
        )}
        {showInvoice && (
          
          <div ref={componentRef}>
            <h6 style={{ paddingLeft: "758px" }}>from</h6>
            <Person name={name} address={address} />
            <h6 style={{ paddingLeft: "21px" }}>Delivered to</h6>
            <Client clientName={clientName} clientAddress={clientAddress} />
            <InvoiceNumber
              invoiceNumber={invoiceNumber}
              dueDate={dueDate}
              invoiceDate={invoiceDate}
            />
            <TableForm2
              itemDesc={itemDesc}
              price={price}
              quantity={quantity}
              amount={amount}
              list={list}
              setItemDesc={setItemDesc}
              setPrice={setPrice}
              setQuantity={setQuantity}
              setAmount={setAmount}
              setList={setList}
              total={total}
              setTotal={setTotal}
            />
            <div className="p-5 md:w-9/12 md:px-0">
              <h3 className="text-lg">Additional notes:</h3>
              <p>{notes}</p>
            </div>
            <Footer
              name={name}
              address={address}
              email={email}
              phoneNumber={phoneNumber}
            />
          </div>
        )}
      </section>

      {showInvoice && (
        <button
          onClick={() => setShowInvoice(false)}
          className="bg-blue-500 rounded-lg shadow text-white py-2 px-6 border-2 border-blue-500 hover:bg-transparent transition-all duration-300 hover:text-blue-500 mt-5"
        >
          Edit information
        </button>
      )}
    </div>
  );
}
