import React from 'react'

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="h2">Danh mục sản phẩm</div>
      <ul className="list-group mt-3" style={{ cursor: 'pointer' }}>
        <li className="list-group-item text-info">Dress</li>
        <li className="list-group-item text-info">T-shirt</li>
        <li className="list-group-item text-info">Trousers</li>
      </ul>
    </>
  )
}

export default Sidebar
