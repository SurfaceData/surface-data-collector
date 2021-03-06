import { Link, routes } from '@redwoodjs/router';
import { Container, FlexboxGrid, Header, Navbar, Content, Footer } from 'rsuite';

type AuthLayoutProps = {
  children?: React.ReactNode
}

const RedwoodLink = React.forwardRef((props) => {
  return <Link {...props} />
})

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Container className="flex flex-col h-screen justify-between">
      <Header>
        <Navbar>
          <Navbar.Brand as={RedwoodLink} to={routes.home()}>
            Surface Data Collector
          </Navbar.Brand>
        </Navbar>
      </Header>
      <Content className="mb-auto h-10 p-4">
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={12}>
            {children}
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Content>
      <Footer>
      </Footer>
    </Container>
  );
}

export default AuthLayout
