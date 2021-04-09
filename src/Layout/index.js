import Dashboard from '@comps/Dashboard'

const Layout = ({ Component , ...props}) => {
  return (
    <Dashboard>
      <Component {...props} />
    </Dashboard>
  )
}

export default Layout
