import useLogout from "../../Hooks/useLogout.js";
import { CiLogout } from "react-icons/ci";

const LogoutBtn = () => {
  const {logout} = useLogout();
  return (
    <div className='mt-auto '>
        <CiLogout size={26} className='text-white cursor-pointer'
          onClick={logout}
        />
    </div>
  )
}

export default LogoutBtn