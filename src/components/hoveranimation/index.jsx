"use client"

import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

// interface Props {
//   children: JSX.Element;
//   width?: "fit-content" | "100%";
// }
export const Hoveranimation = ({ children }) => {
  // const ref = useRef(null)
  // const isInView = useInView(ref, { once: true }); // once: true means animation only happens once

  // const mainControls = useAnimation()
  // const slideControls = useAnimation()

  // useEffect(() => {
  //   if (isInView) {
  //     //fire the animation
  //     mainControls.start('visible')
  //   }
  // }, [isInView])

  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{
          scale: 0.9,
          rotate: -360,
          borderRadius: "100%"
        }}
      >
        {children}
      </motion.div>
      {/* <motion.div
        variants={{
          hidden: { left: 0},
          visible: { left: '100%' },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: 'rgb(52,124,245)',
          zIndex: 20,
        }}
      /> */}
    </div>
  )
}
