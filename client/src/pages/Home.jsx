import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import {
  headContainerAnimation,
  headTextAnimation,
  headContentAnimation,
  slideAnimation,
} from "../config/motion";
import state from "../store";
import { CustomButton } from "../components";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section key="unique-key-1" className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
            <h1 className="head-text text-white">
                Lest's <br className="xl-block hidden" /> Do it
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-azure-600 text-base">
                Welcome to our cutting-edge t-shirt customization experience,
                where you can turn your ideas into 3D reality
              </p>
              <p className="max-w-md font-normal text-gray-600">
                "Design your t-shirts with precision and preview them in
                stunning <strong>3D simulations.</strong>"
              </p>
            </motion.div>
            <CustomButton 
                type="filled"
                title="Customize It =>"
                handleClick={() => state.intro = false}
                customStyle="w-fit px-4 py-2.5 font-bold text-sm"
              />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
