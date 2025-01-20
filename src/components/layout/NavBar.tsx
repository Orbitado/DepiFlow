import { Button, Navbar } from 'flowbite-react';
import { DarkThemeToggle } from 'flowbite-react';

function NavBarLayout() {
    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="https://flowbite-react.com">
                <span className="font-semibold text-xl dark:text-white whitespace-nowrap self-center">
                    Flowbite React
                </span>
            </Navbar.Brand>
            <div className="flex gap-4 md:order-2">
                <DarkThemeToggle />
                <Button>Login</Button>
                <Button>Get started</Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="#" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="#">About</Navbar.Link>
                <Navbar.Link href="#">Services</Navbar.Link>
                <Navbar.Link href="#">Pricing</Navbar.Link>
                <Navbar.Link href="#">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBarLayout;
