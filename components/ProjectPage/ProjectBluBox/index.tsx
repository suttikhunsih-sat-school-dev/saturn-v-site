'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { cn } from '../../../lib/utils';
import Text from '../../Text';
import WhiteDotSpan from '../../WhiteDot';

interface ProjectBluBoxProps {
  title: string;
  imgSrc: string;
  imageAlt?: string;
  subtitle?: string;
  list: {
    label: string;
    navLink: string;
  }[];
  isDarkBlue?: boolean;
}

const ProjectBluBox: React.FC<ProjectBluBoxProps> = ({
  title,
  imgSrc,
  list,
  isDarkBlue = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full max-w-md mx-auto"
    >
      <div
        className={cn(
          'rounded-2xl shadow-xl border-6 border-sat-school-primary-yellow overflow-hidden h-[608px]',
          isDarkBlue ? 'bg-sat-school-dark-blue' : 'bg-sat-school-blue'
        )}
      >
        <div className="p-6 flex flex-col gap-6 justify-center items-center h-full">
          {/* Title */}
          <div
            className="bg-sat-school-secondary-yellow text-black font-bold text-center px-6 py-3 rounded-2xl w-full max-w-[250] h-[80px] flex items-center justify-center"
            style={{
              boxShadow: '8px 8px 0 0 white, 0 4px 12px 0 rgba(0, 0, 0, 0.15)',
            }}
          >
            <Text.CardTitle textColor="black">{title}</Text.CardTitle>
          </div>

          {/* List */}
          <ul className="flex flex-col gap-4 text-white text-base md:text-[30px] flex-1 overflow-y-auto pr-2 leading-[1]">
            {list?.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <WhiteDotSpan />
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
                className="w-full h-48 object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectBluBox;
