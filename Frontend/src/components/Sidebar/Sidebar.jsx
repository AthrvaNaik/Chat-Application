
import SearchInput from './SearchInput'
import { Conversations } from './Conversations'
import LogoutBtn from './LogoutBtn'

const Sidebar = () => {
  return (
    <div className='border-r border-s-slate-500 p-4 flex flex-col'>
        <SearchInput/>
        <div className='divider px-3'></div>
        <Conversations/>
        <LogoutBtn/>
    </div>
  )
}

export default Sidebar