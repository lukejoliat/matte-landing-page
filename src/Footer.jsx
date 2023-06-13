import logo from './assets/logo.svg';

const Footer = () => {
    return (
        <footer className='bg-black p-12'>
            <div className='max-w-7xl m-auto flex'>
                <div className='max-w-sm'>
                    <img src={logo} alt="" />
                    <p className='text-gray my-4'>Aliquam et tellus urna. Phasellus egetadipiscing elit. Mauris id nunc odio. Aliquam et tellus urna. Phasellus eget</p>
                </div>
                <div className='flex flex-1 justify-end'>
                    <ul className='mx-4'>
                        <li>COMPANY</li>
                        <li className='text-gray my-2'>Features</li>
                        <li className='text-gray my-2'>Company</li>
                        <li className='text-gray my-2'>Blog</li>
                        <li className='text-gray my-2'>Shop</li>
                    </ul>
                    <ul className='mx-4'>
                        <li>SOCIAL MEDIA</li>
                        <li className='text-gray my-2'>Features</li>
                        <li className='text-gray my-2'>Company</li>
                        <li className='text-gray my-2'>Blog</li>
                        <li className='text-gray my-2'>Shop</li>
                    </ul>
                    <ul className='mx-4'>
                        <li>WEBFLOW STUFF</li>
                        <li className='text-gray my-2'>Features</li>
                        <li className='text-gray my-2'>Company</li>
                        <li className='text-gray my-2'>Blog</li>
                        <li className='text-gray my-2'>Shop</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export { Footer }