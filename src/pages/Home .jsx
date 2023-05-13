import React from 'react'
import Navbar from '../components/Navbar'
import '../../CSS/index.css'

const Home = () => {
  return (
    <div className='bg pos-rel'>
      <header>
        <Navbar />
      </header>

      <main>
        <div className='main-container grid '>
          <section className='main-container__left-section flex flex-col'>
            <article>
              <h1 className='big-heading'>Make remote work</h1>
              <p>
                Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
              </p>

              <a href='#'>
              <button className='big-btn' >Learn more</button>
            </a>
            </article>
            
            <ul className='flex client-companies'>
              <li>
                <img src='/images/client-databiz.svg'/>
                <span className='sr-only'>databiz</span>
              </li>

              <li>
                <img src='/images/client-audiophile.svg'/>
                <span className='sr-only'>audiophile</span>
              </li>

              <li>
                <img src='/images/client-meet.svg'/>
                <span className='sr-only'>meet</span>
              </li>

              <li>
                <img src='/images/client-maker.svg'/>
                <span className='sr-only'>maker</span>
              </li>
            </ul>
          </section>
          <section>
            <picture>
              <source className='hero-img' media='(max-width:900px)' srcSet='/images/image-hero-mobile.png' />
              <img className='hero-img' src='/images/image-hero-desktop.png' />
            </picture>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Home 