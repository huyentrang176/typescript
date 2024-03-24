import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <>
      <div className="row">
        <div className="card-group mt-5">
          <Link className="card" to="/productDeTails">
            <img src="./img/anh1.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-success">Vintage Dress</h5>
              <h5 className="card-title">350.000</h5>
              <p className="card-text">
                Vintage fashion style can be suitable for many occasions, from going to work, going
                out to parties. Vintage outfits often make a difference and attract people's
                attention. This also means that this style has also become an indispensable part of
                the modern fashion industry.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">✰✰✰✰✰</small>
              </p>
            </div>
          </Link>
          <div className="card">
            <img src="./img/anh1.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-success">Vintage Dress</h5>
              <h5 className="card-title">350.000</h5>
              <p className="card-text">
                Vintage fashion style can be suitable for many occasions, from going to work, going
                out to parties. Vintage outfits often make a difference and attract people's
                attention. This also means that this style has also become an indispensable part of
                the modern fashion industry.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">✰✰✰✰✰</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img src="./img/anh1.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-success">Vintage Dress</h5>
              <h5 className="card-title">350.000</h5>
              <p className="card-text">
                Vintage fashion style can be suitable for many occasions, from going to work, going
                out to parties. Vintage outfits often make a difference and attract people's
                attention. This also means that this style has also become an indispensable part of
                the modern fashion industry.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">✰✰✰✰✰</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-group mt-5">
        <div className="card">
          <img src="./img/anh2.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-success">Vintage Clothes</h5>
            <h5 className="card-title">550.000</h5>
            <p className="card-text">
              Vintage fashion style can be suitable for many occasions, from going to work, going
              out to parties. Vintage outfits often make a difference and attract people's
              attention. This also means that this style has also become an indispensable part of
              the modern fashion industry.
            </p>
            <p className="card-text">
              <small className="text-body-secondary">✰✰✰✰✰</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src="./img/anh2.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-success">Vintage Clothes</h5>
            <h5 className="card-title">550.000</h5>
            <p className="card-text">
              Vintage fashion style can be suitable for many occasions, from going to work, going
              out to parties. Vintage outfits often make a difference and attract people's
              attention. This also means that this style has also become an indispensable part of
              the modern fashion industry.
            </p>
            <p className="card-text">
              <small className="text-body-secondary">✰✰✰✰✰</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src="./img/anh2.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-success">Vintage Clothes</h5>
            <h5 className="card-title">550.000</h5>
            <p className="card-text">
              Vintage fashion style can be suitable for many occasions, from going to work, going
              out to parties. Vintage outfits often make a difference and attract people's
              attention. This also means that this style has also become an indispensable part of
              the modern fashion industry.
            </p>
            <p className="card-text">
              <small className="text-body-secondary">✰✰✰✰✰</small>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
