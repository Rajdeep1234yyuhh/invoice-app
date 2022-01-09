export default function InvoiceNumber({ invoiceNumber, dueDate, invoiceDate }) {
    return (
      <>
        <article className="flex flex-col items-end px-5 justify-between lg:px-0 mt-10">
          <p>Invoice Number: {invoiceNumber}</p>
          <p>Invoice Date: {invoiceDate}</p>
          <p>Due date: {dueDate}</p>
        </article>
      </>
    )
  }