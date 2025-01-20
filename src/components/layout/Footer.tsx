import { Footer } from 'flowbite-react';

export default function FooterLayout() {
    return (
        <Footer container className="bottom-0 z-50 absolute">
            <div className="w-full text-center">
                <div className="sm:flex justify-between sm:justify-between sm:items-center w-full">
                    <Footer.Brand
                        href="https://flowbite.com"
                        src="https://flowbite.com/docs/images/logo.svg"
                        alt="Flowbite Logo"
                        name="Flowbite"
                    />
                    <Footer.LinkGroup>
                        <Footer.Link href="#">About</Footer.Link>
                        <Footer.Link href="#">Privacy Policy</Footer.Link>
                        <Footer.Link href="#">Licensing</Footer.Link>
                        <Footer.Link href="#">Contact</Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <Footer.Divider />
                <Footer.Copyright href="#" by="Flowbite™" year={2022} />
            </div>
        </Footer>
    );
}
