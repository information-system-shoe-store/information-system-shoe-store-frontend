import { Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink } from 'reactstrap';

const Header = () => {

    return (
        <div>
            <Navbar
                color="light"
                expand="md"
                light
            >
                <NavbarBrand href="/">
                    Автоматизированная справочная система "Магазин обуви"
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink href="/products">
                                Обувь
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/providers">
                                Поставщики
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/sales">
                                Продажи
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/statistics">
                                Статистика
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        User
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
