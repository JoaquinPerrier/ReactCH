import React from 'react'


const ItemListConteiner = ({greeting}) => {
  return<>
        <label for="item">{greeting}</label>
        <select name="items" id="item" className='selector-item'>
        <option value="motherboard">Mother board</option>
        <option value="memory-ram">Memory RAM</option>
        <option value="ssd-disk">SSD Disk</option>
        <option value="processor">Processor</option>
        <option value="keyboard">Keyboard</option>
        <option value="mouse">Mouse</option>
        <option value="mouse-pad">Mouse Pad</option>
        <option value="video-card">Video Card</option>
      </select>
        </>
}

export default ItemListConteiner;