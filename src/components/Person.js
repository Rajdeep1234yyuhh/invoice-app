export default function Person({ name, address }) {
    return (
      <>
        <article className="flex flex-col items-end justify-end px-5 lg:px-0 text-center">
          <h1 className="uppercase font-bold text-4xl mt-10">{name}</h1>
          <p>{address}</p>
        </article>
      </>
    )
  }