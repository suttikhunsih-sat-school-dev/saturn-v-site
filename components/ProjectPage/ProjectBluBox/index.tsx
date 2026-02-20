'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import Text from '../../Text';
interface ProjectBluBoxProps {
  title: string;
  imgSrc: string;
  imageAlt?: string;
  subtitle?: string;
  list: {
    label: string;
    navLink: string;
  }[];
}

const ProjectBluBox: React.FC<ProjectBluBoxProps> = ({ title, imgSrc, list }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full max-w-md mx-auto"
    >
      <div className="rounded-2xl shadow-xl bg-sat-school-blue border-4 border-yellow-400 overflow-hidden">
        <div className="p-6 flex flex-col gap-6">
          {/* Title */}
          <div className="bg-sat-school-secondary-yellow text-black font-bold text-center px-2 py-2 rounded-2xl shadow-md w-fit mx-auto w-full h-[80px] flex items-center justify-center">
            <Text.CardTitle textColor="black">{title}</Text.CardTitle>
          </div>

          {/* List */}
          <ul className="flex flex-col gap-4 text-white text-base md:text-lg">
            {list?.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 bg-white rounded-full shrink-0" />
                <Link
                  href={item.navLink}
                  className="hover:underline underline-offset-4 transition-all"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Image */}
          {imgSrc && (
            <div className="w-full rounded-2xl overflow-hidden">
              <img
                src={imgSrc}
                alt="project visual"
                className="w-full h-56 object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectBluBox;
