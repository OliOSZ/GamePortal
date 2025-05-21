import { User } from "lucide-react";

export interface INavbarProps {
  onSearchChanged?: (searchString: string) => void
}
export default function NavBar(props?: INavbarProps) {
  const onSearchChanged = (event: any) => {
    if (props?.onSearchChanged) {
      props.onSearchChanged (event.target.value)
    }
  }
  return (
    <nav className="flex items-center justify-between bg-gray-900 p-4 text-white">
      <div className="flex items-center">
        <a href="/">
          <img src="/GamePortal_logo.png" alt="Game Hub" className="h-10"/>
        </a>
      </div>
      <div className="flex-1 mx-4">
        <input type="text" onChange={onSearchChanged} placeholder="Search games..." className="w-full px-4 py-2 rounded-full text-white border-color-white"/>
      </div>
      <div>
        <a href="/login">
        <button className="bg-yellow-400 hover:bg-yellow-500 focus:outline-2 focus:outline-offset-2 focus:outline-yellow-500 active:bg-yellow-600  text-white px-4 py-2 rounded-full">
          <User />
        </button>
        </a>
      </div>
    </nav>
  );
}
