
import { IoSearchOutline } from "react-icons/io5";

const SearchInput = () => {
  return (
    <div>
        <form className='flex items-center gap-2'>
            <input type="text" placeholder="Search..." className="input input-bordered rounded-full" />
            <button type='submit' className='btn btn-circle bg-sky-500 text-white border-black border-2'>
                <IoSearchOutline size={24}/>
            </button>
        </form>
    </div>
  )
}

export default SearchInput