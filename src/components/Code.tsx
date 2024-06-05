"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const CodeView = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative w-full max-w-6xl bg-white shadow-lg rounded-lg p-4">
      {isLoading && (
        <div className="flex justify-center items-center w-full aspect-video rounded-lg bg-gray-100">
          <motion.div
            className="flex space-x-2 text-4xl"
            initial={{ x: -20 }}
            animate={{ x: 20 }}
            transition={{ yoyo: Infinity, duration: 0.5 }}
          >
            <span>♔</span>
            <span>♕</span>
            <span>♖</span>
            <span>♗</span>
            <span>♘</span>
            <span>♙</span>
          </motion.div>
        </div>
      )}
      <iframe
        className={`w-full aspect-video rounded-lg ${
          isLoading ? "hidden" : ""
        }`}
        src="https://notebooks.githubusercontent.com/view/ipynb?browser=chrome&amp;bypass_fastly=true&amp;color_mode=auto&amp;commit=1058280c9719f72f8af53a9f0f0ecae8b6790f7e&amp;device=unknown_device&amp;docs_host=https%3A%2F%2Fdocs.github.com&amp;enc_url=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f476f64706c65782f63686573732d70726564696374696f6e2f313035383238306339373139663732663861663533613966306630656361653862363739306637652f50726f796563746f5f616a656472657a2e6970796e62&amp;logged_in=true&amp;nwo=Godplex%2Fchess-prediction&amp;path=Proyecto_ajedrez.ipynb&amp;platform=mac&amp;repository_id=808427814&amp;repository_type=Repository&amp;version=125#96b921b5-3e30-4aff-acd3-b5bf80f509ae"
        sandbox="allow-scripts allow-same-origin allow-top-navigation"
        title="Chess"
        onLoad={handleLoad}
      ></iframe>
    </div>
  );
};

export default CodeView;
