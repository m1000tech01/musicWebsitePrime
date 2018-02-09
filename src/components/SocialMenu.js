import React from 'react'
import PropTypes from 'prop-types'

const SocialMenu = ({ className, links, hasTitle }) => (
    <ul className={className} data-wow-duration="700ms" data-wow-delay="300ms">
        { links.map((item, index) => (
            <li key={index} className={item.name + " style_prevu_kit2"}>
              <a href={item.link}>{hasTitle ? item.title : ''}</a>
            </li>
        ))}
    </ul>
)

SocialMenu.propTypes = {
  className: PropTypes.string,
  links: PropTypes.array,
  hasTitle: PropTypes.bool
}

export { SocialMenu }
