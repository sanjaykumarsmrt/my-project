import React from 'react';
import javascript from '../../assets/javascript.png';
import html from '../../assets/html.png';
import  css from '../../assets/css.png';
import webdesign from '../../assets/web-design.png';
import python from '../../assets/python.png';
import react from '../../assets/react.png';

function Skills() {
    return(
        <section id='skills' className='relative overflow-hidden flex flex-col text-white body-font'>
            <div className='container flex flex-wrap px-5 py-24 mx-auto item-center'>
                <div
                data-aos='fade-up'
                data-aos-delay='200'
                 className='md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pd-10 border-b border-orange-400'>
                    <h1 data-aos='fade-right' data-aos-delay='500' className='sm-text-4xl text-2xl font-medium title-font mb-2 text-white'>Skills</h1>
                    <p data-aos='font-right' data-aos-delay='500' className='leading-relaxed text-base'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aliquid beatae totam nihil molestiae sequi vel dolorum unde, illum alias. Sapiente, voluptate iste. Aliquid magni, exercitationem porro nulla reprehenderit aliquam ea debitis id, a consectetur, perspiciatis labore architecto earum deserunt sint ad. Laborum assumenda, suscipit in facilis nulla et aliquid!
                    </p>
                </div>
                <div data-aos='fade-left' data-aos-delay='500' className='flex flex-col md:w-1/2 md:pl-12'>
                <nav className='flex flex-wrap list-name -mb-1'>
                    <li className='lg:w-1/3 mb-4 w-1/2'>
                        <img src={javascript} alt="JS image" className='rounded-full w-24 h-24 object-cover'/>
                    </li>
                    <li className='lg:w-1/3 mb-4 w-1/2'>
                        <img src={html} alt="html image" className='rounded-full w-24 h-24 object-cover'/>
                    </li>
                    <li className='lg:w-1/3 mb-4 w-1/2'>
                        <img src={css} alt="CSS image" className='rounded-full w-24 h-24 object-cover'/>
                    </li>
                    <li className='lg:w-1/3 mb-4 w-1/2'>
                        <img src={webdesign} alt="webdesign imag" className='rounded-full w-24 h-24 object-cover'/>
                    </li>
                    <li className='lg:w-1/3 mb-4 w-1/2'>
                        <img src={python} alt="python imag" className='rounded-full w-24 h-24 object-cover'/>
                    </li>
                    <li className='lg:w-1/3 mb-4 w-1/2'>
                        <img src={react} alt="react imag" className='rounded-full w-24 h-24 object-cover'/>
                    </li>
                </nav>
                </div>
            </div>

        </section>
    );
}


export default Skills