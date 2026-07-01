import { Link } from 'react-router'

export default function NotFoundPage() {
  return (
    <div style={{ padding: '120px 20px', textAlign: 'center' }}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/">Go back to homepage</Link>
    </div>
  )
}
