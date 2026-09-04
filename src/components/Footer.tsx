import { profile } from '../data/content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {year} {profile.name}
        </p>
        <p className="footer-note">{profile.location} · Flutter Developer</p>
      </div>
    </footer>
  )
}
