export default function Footer({ name, address, email, phoneNumber }) {
    return (
      <>
        <footer className="px-5 mt-10 lg:px-0 border-t border-gray-300 pt-5 pb-10">
        <h3>Delivered by </h3>
          <ul className="flex items-center justify-center flex-wrap">
            <li className="font-bold mx-2">
              {name}, <span className="font-light">{address}</span>
            </li>
            <li className="font-bold mx-2">
              Email: <span className="font-light">{email}</span>
            </li>
            <li className="font-bold mx-2">
              Phone: <span className="font-light">{phoneNumber}</span>
            </li>
          </ul>
        </footer>
      </>
    )
  }