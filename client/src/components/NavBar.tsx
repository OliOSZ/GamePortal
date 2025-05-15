import { User } from 'lucide-react';

export default function NavBar() {
    return (
        <nav className='flex items-center justify-between bg-gray-900 p-4 text-white'>
            <div className='flex items-center'>
                <a href="/">
                <img src="/assets/GamePortal_logo.png" alt="Game Hub" className='h-10' />
                </a>
            </div>
            <div className='flex-1 mx-4'>
                <input type="text"
                placeholder='Search games...' 
                className='w-full px-4 py-2 rounded-full text-black'
                />
            </div>
            <div>
                <button className='bg-yellow-400  text-white px-4 py-2 rounded-full'>
                    <User />
                </button>
            </div>
        </nav>
    );
}