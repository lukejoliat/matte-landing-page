import logo from './assets/logo.svg';

const Footer = () => {
    return (
        <footer className='bg-black p-12'>
            <div className='max-w-7xl m-auto flex flex-col sm:flex-row'>
                <div className='max-w-sm'>
                    <img src={logo} alt="" />
                    <p className='text-gray my-4'>Aliquam et tellus urna. Phasellus egetadipiscing elit. Mauris id nunc odio. Aliquam et tellus urna. Phasellus eget</p>
                </div>
                <div className='flex flex-1 justify-end flex-col sm:flex-row gap-4'>
                    <ul>
                        <li>COMPANY</li>
                        <FooterItem>Features</FooterItem>
                        <FooterItem>Company</FooterItem>
                        <FooterItem>Blog</FooterItem>
                        <FooterItem>Shop</FooterItem>
                    </ul>
                    <ul>
                        <li>SOCIAL MEDIA</li>
                        <FooterItem>Features</FooterItem>
                        <FooterItem>Company</FooterItem>
                        <FooterItem>Blog</FooterItem>
                        <FooterItem>Shop</FooterItem>
                    </ul>
                    <ul>
                        <li>WEBFLOW STUFF</li>
                        <FooterItem>Features</FooterItem>
                        <FooterItem>Company</FooterItem>
                        <FooterItem>Blog</FooterItem>
                        <FooterItem>Shop</FooterItem>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

const FooterItem = ({ children }) => {
    return (
        <li className='text-gray my-2'>{children}</li>
    )
}

export { Footer }