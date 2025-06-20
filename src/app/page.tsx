import { portfolioData } from '@/constants/data'
import Link from 'next/link';
import SkillsMarquee from '@/components/skillsMarquee';
import { SkillsDrawer } from '@/components/drawers'; 
import FadeInWhenVisible from '@/components/FadeInWhenVisible';
import { RecommendationDrawer } from '@/components/drawers';

export default function Home() {
  const { header, sections } = portfolioData;

  return (
    <div className="flex flex-row justify-center w-full h-full bg-black text-white md:text-base text-sm">
      <div className="max-w-[1280px] w-full md:px-[32px] px-[12px] pb-[16px]">
        <div className="flex flex-row pt-[24px] pb-[16px] justify-between">
          <div className="flex flex-col md:flex-row md:gap-[12px] md:items-center">
            <FadeInWhenVisible flow="up"><div className="text-xl md:text-4xl font-bold">{header.name}</div></FadeInWhenVisible>
            <FadeInWhenVisible flow="up"><div className="text-xs">{header.subtitle}</div></FadeInWhenVisible>
          </div>
          <FadeInWhenVisible flow="up">
          <div className="flex flex-col md:flex-row md:items-center items-end gap-[6px] md:gap-[12px] md:text-base text-sm">
            {header.links.map((link, index) => (
              <Link  key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm underline underline-offset-2">
                {link.text}
              </Link>
            ))}
          </div>
          </FadeInWhenVisible>
        </div>

        <div className="flex flex-row justify-between gap-[48px] py-[16px]">
          <div className="flex flex-col gap-[12px]">
          <FadeInWhenVisible flow="up"><div className="font-medium">{sections.summary.title}</div></FadeInWhenVisible>
          <FadeInWhenVisible flow="up"><div className='border border-white  p-4'>{sections.summary.content}</div></FadeInWhenVisible>
          </div>
        </div>

        <div className="flex flex-col gap-[12px] py-[16px]">
          <FadeInWhenVisible flow="up"><div className="font-medium">{sections.recommendations.title}</div></FadeInWhenVisible>
          {Array.from({ length: Math.ceil(sections.recommendations.items.length / 2) }).map((_, rowIndex) => (
            <div key={rowIndex} className="flex flex-col md:flex-row gap-[12px] items-stretch">
              {sections.recommendations.items
                .slice(rowIndex * 2, rowIndex * 2 + 2)
                .map((rec, index) => (
                  <FadeInWhenVisible key={index} flow="up" className="flex-1 border border-white p-4 flex flex-col justify-between md:gap-[12px] gap-[8px]">
                      <span className='italic block'>&quot;{rec.highlight}&quot; <RecommendationDrawer text={rec.text} author={rec.author} /> </span>
                      <div className='flex flex-row justify-end'>
                        <div className="font-medium text-right">– {rec.author}</div>
                      </div>
                  </FadeInWhenVisible>
                ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col py-[16px] gap-[12px]">
          <FadeInWhenVisible flow="up"><div className="font-medium">{sections.experience.title}</div></FadeInWhenVisible>
          {sections.experience.items.map((item, index) => (
            <FadeInWhenVisible key={index} flow="up">
              <div className='border  border-white p-4'>
                <p className="font-medium">{item.title}</p>
                <p>{item.company}</p>
                <p>{item.duration}</p>
                <p>{item.location}</p>
                <ul className="list-disc pl-5">
                  {item.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex}>{responsibility}</li>
                  ))}
                </ul>
                <Link href={item.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Visit {item.company}</Link>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

        <div className="flex flex-col py-[16px] gap-[12px]">
          <FadeInWhenVisible className='flex flex-row' flow="up">
            <p className="font-medium">{sections.skills.title}</p>
          </FadeInWhenVisible>
          <SkillsMarquee />
          <div>
            <SkillsDrawer />
          </div>
        </div>

        <div className="flex flex-col py-[16px] gap-[12px] ">
          <FadeInWhenVisible flow="up"><div className="font-medium">{sections.education.title}</div></FadeInWhenVisible>
          {sections.education.items.map((item, index) => (
            <FadeInWhenVisible key={index} flow="up">
              <div className='border border-white p-4'>
                <p className="font-medium">{item.institution}</p>
                <p>{item.degree}</p>
                <p>{item.duration} | {item.cgpa}</p>
                <p>{item.coursework}</p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

        <div className="flex flex-col py-[16px] gap-[12px]">
          <FadeInWhenVisible flow="up"><div className="font-medium">{sections.featuredWorks.title}</div></FadeInWhenVisible>
          {Array.from({ length: Math.ceil(sections.featuredWorks.items.length / 2) }).map((_, rowIndex) => (
            <div key={rowIndex} className="flex flex-col md:flex-row gap-[12px] items-stretch">
              {sections.featuredWorks.items
                .slice(rowIndex * 2, rowIndex * 2 + 2)
                .map((item, index) => (
                  <FadeInWhenVisible key={index} flow="up" className="flex-1 border border-white p-4">
                      <p className="font-medium">{item.title}</p>
                      <p>{item.duration}</p>
                      <ul className="list-disc pl-5">
                        {item.description
                          .split('.')
                          .map(sentence => sentence.trim())
                          .filter(sentence => sentence.length > 0)
                          .map((sentence, i) => (
                            <li key={i}>{sentence}.</li>
                          ))}
                      </ul>
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4"
                      >
                        See project
                      </Link>
                  </FadeInWhenVisible>
                ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col py-[16px] gap-[12px]">
          <FadeInWhenVisible flow="up"><div className="font-medium">{sections.achievements.title}</div></FadeInWhenVisible>
          <div className="flex flex-col gap-2">
            {sections.achievements.items.map((item, index) => (
              <FadeInWhenVisible key={index} flow="up">
                <div className="border-l-2 pl-4">
                  <div className="">{item}</div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div> 

        <div className="flex flex-col py-[16px] gap-[12px]">
          <FadeInWhenVisible flow="up"><div className="font-medium">{sections.connect.title}</div></FadeInWhenVisible>
          <FadeInWhenVisible flow="up">
            <div className="border border-white p-4 space-y-2">
              <p className="">Feel free to reach out to me via any of the following channels:</p>
              <div className="flex flex-row md:flex-col gap-[12px] md:gap-[8px]">
                {sections.connect.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-[12px]">
                    <Link href={item.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                      {item.text}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </FadeInWhenVisible>
        </div>

          <div className="flex justify-center items-center text-xs md:text-sm text-gray-600 py-[16px]">
            <p>
              <span className="md:text-xl">&copy;</span> {new Date().getFullYear()} Krishnachandran U. All rights reserved.
            </p>
          </div>

      </div>
    </div>
  );
}