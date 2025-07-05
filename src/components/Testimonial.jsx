

import React from 'react'
import GlowCard from './GlowCard'
import { testimonialsNew } from '../constants'
import TitleHeader from './TitleHeader'

const Testimonial = () => {
      const openLinkedInProfile = (url) => {
        window.open(url, "_blank");
    };
  return (
     <section id="testimonials" className="flex justify-center items-center md:px-10 md:mt-40 mt-20">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title={"What People Say About Me"}
          sub={"💬 Testimonials from Clients & Colleagues"}
        />
        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
            {
                testimonialsNew.map((testimonial, index) => (
                    <GlowCard
                    card={testimonial}
                    key={index}
                    type={"testimonial"}
                    handleClick={openLinkedInProfile}
                    >
                        <div className="flex items-center gap-3 mb-3">
                           <div>
                            <img src={testimonial.imgPath} className="w-[56px] h-[56px]" alt="testimonial" />

                           </div>
                           <p className="font-bold">
                            {testimonial.name}
                           </p>
                           <p  className="text-white-50 ">{testimonial.mentions}</p>
                        </div>
                    </GlowCard>
                ))

            }

        </div>
      </div>
    </section>
  )
}

export default Testimonial