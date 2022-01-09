export default function Notes({ notes, setNotes }) {
    return (
      <>
        <article className="px-5 lg:px-0 mt-10">
          <h3 className="font-bold text-2xl">Additional Notes:</h3>
          <p>Optional: Include information such as payment and bank details</p>
          <textarea
            name="notes"
            id="notes"
            cols="39"
            rows="5"
            className="shadow bg-gray-200 focus:bg-white rounded"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="bg-blue-200 w-full"
          ></textarea>
        </article>
      </>
    )
  }