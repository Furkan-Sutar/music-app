import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal'

const StickyComp = () => {

    const data = [
        {
          "title": "The Beauty of Nature",
          "description": "Nature's beauty is a gift that cultivates appreciation and gratitude. From breathtaking landscapes to the delicate balance of ecosystems, nature inspires awe and wonder."
        },
        {
          "title": "Advancements in Technology",
          "description": "Technology is rapidly evolving, transforming industries and lifestyles. Innovations in artificial intelligence, robotics, and biotechnology are reshaping how we work, communicate, and live."
        },
        {
          "title": "The Importance of Mental Health",
          "description": "Mental health is crucial for overall well-being and should be prioritized. It encompasses emotional, psychological, and social well-being, influencing how we think, feel, and behave."
        },
        {
          "title": "Exploring the Universe",
          "description": "The universe is vast and full of mysteries waiting to be discovered. From distant galaxies to the fundamental particles of matter, cosmologists and physicists continue to unravel its secrets."
        },
        {
          "title": "The Future of Renewable Energy",
          "description": "Renewable energy sources are key to a sustainable future for our planet. Solar, wind, hydroelectric, and geothermal power offer clean alternatives to fossil fuels, mitigating climate change."
        },
        {
          "title": "The Impact of Artificial Intelligence",
          "description": "Artificial Intelligence (AI) is revolutionizing industries, enhancing efficiency, and raising ethical concerns. From autonomous vehicles to predictive analytics, AI continues to shape our future."
        }
      ];
      
      
      
  return (
    <div>
        <StickyScroll content={data} />
    </div>
  )
}

export default StickyComp