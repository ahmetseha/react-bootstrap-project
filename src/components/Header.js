import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar className="navbar-dark bg-dark p-4">
      <Container>
        <Navbar.Brand href="#home">Ahmet Seha</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="https://github.com/ahmetseha/react-bootstrap-table-project">
              Repo
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
