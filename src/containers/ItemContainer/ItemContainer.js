import React from 'react'
import PropTypes from 'prop-types'

import ItemPreview from '../../components/ItemPreview/ItemPreview'
import './ItemContainer.css'

const ItemContainer = props => {
  return (
    <section className={props.cssClass + '_container item_container'}>
      <h4>{props.title}</h4>
      {props.items.map((value, index) => {
        return <ItemPreview {...value} key={index} cssClass={props.cssClass} />
      })}
    </section>
  )
}

ItemContainer.propTypes = { items: PropTypes.array.isRequired }

export default ItemContainer
