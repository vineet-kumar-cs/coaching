import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const navItems = [['Courses', '/courses'], ['Faculty', '/faculty'], ['Results', '/results'], ['About', '/about'], ['Contact', '/contact']]

export function Layout({ children }) {
  const [open, setOpen] = useState(false)
  return <div className="site-shell">
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">A</span><span><strong>Apex</strong><small>ACADEMY</small></span></Link>
        <nav className={`nav-links ${open ? 'is-open' : ''}`}>
          {navItems.map(([label, path]) => <NavLink key={path} to={path} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>)}
          <Link to="/admission" className="button button-small button-coral" onClick={() => setOpen(false)}>Enquire now <ArrowUpRight size={15} /></Link>
        </nav>
        <button className="mobile-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
    <main>{children}</main>
    <footer className="footer"><div className="container footer-grid">
      <div><Link to="/" className="brand footer-brand"><span className="brand-mark">A</span><span><strong>Apex</strong><small>ACADEMY</small></span></Link><p className="footer-note">Learn today. Lead tomorrow.<br />Purposeful preparation for a bigger future.</p><div className="socials"><a href="#instagram" aria-label="Instagram">ig</a><a href="#youtube" aria-label="Youtube">yt</a><a href="#linkedin" aria-label="LinkedIn">in</a></div></div>
      <div><h4>Explore</h4><Link to="/courses">Courses</Link><Link to="/faculty">Our faculty</Link><Link to="/results">Our results</Link><Link to="/about">About Apex</Link></div>
      <div><h4>Support</h4><Link to="/admission">Admissions</Link><Link to="/contact">Contact us</Link><a href="#faq">FAQs</a><a href="#privacy">Privacy policy</a></div>
      <div><h4>Visit us</h4><p>14, Knowledge Park<br />Vasant Kunj, New Delhi 110070</p><p className="footer-contact">+91 11 4567 8900<br />hello@apexacademy.in</p></div>
    </div><div className="container footer-bottom"><span>© 2025 Apex Academy. All rights reserved.</span><span>Made for learners with ambition.</span></div></footer>
  </div>
}

export function SectionHeading({ eyebrow, title, text, align = '' }) { return <div className={`section-heading ${align}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div> }
export function Button({ children, to = '#', variant = 'coral', className = '' }) { return <Link className={`button button-${variant} ${className}`} to={to}>{children}<ArrowUpRight size={16} /></Link> }
export function PageIntro({ eyebrow, title, text }) { return <section className="page-intro"><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></div></section> }
