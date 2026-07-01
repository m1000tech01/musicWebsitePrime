import type { MenuLink } from '../data/staticData'

interface SocialMenuProps {
  links: MenuLink[]
  className?: string
  hasTitle?: boolean
}

export function SocialMenu({ className, links, hasTitle }: SocialMenuProps) {
  return (
    <ul className={className} data-wow-duration="700ms" data-wow-delay="300ms">
      {links.map((item, index) => (
        <li key={index} className={item.name + ' style_prevu_kit2'}>
          <a href={item.link} target="_blank" rel="noreferrer">
            {hasTitle ? item.title : ''}
          </a>
        </li>
      ))}
    </ul>
  )
}
