export default function Client({ clientName, clientAddress }) {
    return (
      <>
        <article className="flex flex-col items-start justify-between px-5 lg:px-0 text-center mt-10">
          <h3 className="uppercase font-bold text-2xl">{clientName}</h3>
          <p>{clientAddress}</p>
        </article>
      </>
    )
  }