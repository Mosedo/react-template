import React from 'react'
import code from '../assets/code-square.svg'
import gear from '../assets/gear.svg'
import camera from '../assets/camera-video.svg'
import arrow_right from '../assets/arrow-right-short.svg'
import arrow_right_dark from '../assets/arrow-right-short-dark.svg'
import '../styles/home.css'

function HomeComponent() {
  return (
    <>
        <div className='container d-sm-flex pt-5 justify-content-between'>
            <div className='mt-5' style={{ width:"600px" }}>
                <h3 className='tailwind-text'>By the makers of Tailwind CSS</h3>
                <h1 className='tailwind-title'><strong>Beautiful UI components, crafted with Tailwind CSS.</strong></h1>
                <div className='d-flex mt-4'>
                    <span className='code-section'><img src={code} alt="icon" height="25" width="25"/> HTML</span>
                    <span className='px-3'></span>
                    <span className='code-section'><img src={gear} alt="icon" height="25" width="25"/> React</span>
                    <span className='px-3'></span>
                    <span className='code-section'><img src={camera} alt="icon" height="25" width="25"/> Vue</span>
                </div>
                <p className='text-secondary mt-3 desc-text'>Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content.</p>
                <div className='d-flex mt-4'>
                    <a className="text-white nav-link btn btn-dark px-2 pb-2 pt-1 btn-md" aria-current="page" href="/#">Live preview<span><img src={arrow_right} alt="icon" height="18" width="18"/></span></a>
                    <span className='px-2'></span>
                    <button type="button" class="btn btn-outline-secondary">Documentation<span><img src={arrow_right_dark} alt="icon" height="18" width="18"/></span></button>
                </div>
            </div>

            <div class="card" style={{ width: "18rem" }}>
                <div class="card-header">
                    Featured
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                </ul>
                </div>
        </div>
    </>
  )
}

export default HomeComponent