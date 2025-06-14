"use client";  // if you use Next.js 13 app directory

import Marquee from 'react-fast-marquee';
import { portfolioData } from '@/constants/data';

export default function SkillsMarquee() {
  const skills = portfolioData.sections.skills.items;

  return (
    <Marquee gradient={false} speed={100}>
      {skills.map((skill, index) => (
        <span key={index} className="mx-4 text-sm font-medium">
          {skill}
        </span>
      ))}
    </Marquee>
  );
}
