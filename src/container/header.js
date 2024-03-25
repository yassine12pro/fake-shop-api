import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className='bgg  ui fixed menu'>
        <div className=' ui container center'>
            <Link className='titre' to={"/"}>Fake Shop</Link>
        </div>
    </div>
  )
}
