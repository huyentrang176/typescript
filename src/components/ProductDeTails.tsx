import React from 'react'

const ProductDeTails: React.FC = () => {
  return (
    <div className="wrap-content3">
      <div className="left-wrap-cnt">
        <div className="top-left-wr d-flex">
          <div className="card-img">
            <img src="./img/anh1.jpg" alt="" width={490} />
            <p>
              <img src="./img/anh1.jpg" alt="" width={90} />
              <img src="./img/anh1.jpg" alt="" width={90} />
              <img src="./img/anh1.jpg" alt="" width={90} />
              <img src="./img/anh1.jpg" alt="" width={90} />
              <img src="./img/anh1.jpg" alt="" width={90} />
            </p>
          </div>
          <div className="txt-detail ms-2">
            <h1>Vintage Dress</h1>
            <p>
              Rating: <span>Not update yet</span>
            </p>
            <p>
              Product pirce: <span>350.00</span>
            </p>
            <p className="detail">
              {' '}
              Vintage fashion style can be suitable for many occasions, from going to work, going
              out to parties. Vintage outfits often make a difference and attract people's
              attention. This also means that this style has also become an indispensable part of
              the modern fashion industry.
            </p>
            <button type="submit" className="btn btn-primary">
              Buy product
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDeTails
