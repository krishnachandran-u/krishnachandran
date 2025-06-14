import { portfolioData } from '@/constants/data'
import Link from 'next/link';
import SkillsMarquee from '@/components/skillsMarquee';

export default function Home() {
  const { header, sections } = portfolioData;

  return (
    <div className="flex flex-row justify-center w-full h-full bg-black text-white md:text-base text-sm">
      <div className="max-w-[1280px] w-full md:px-[32px] px-[12px]">
        <div className="flex flex-row pt-[24px] pb-[16px] justify-between">
          <div className="flex flex-col md:flex-row md:gap-[12px] md:items-center">
            <div className="text-xl md:text-4xl font-bold">{header.name}</div>
            <div className="text-xs">{header.subtitle}</div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center items-end gap-[6px] md:gap-[12px] md:text-base text-sm">
            {header.links.map((link, index) => (
              <Link  key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm underline underline-offset-2">
                {link.text}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-row justify-between gap-[48px] py-[16px]">
          <div className="flex flex-col gap-[12px]">
            <div className="font-medium">{sections.summary.title}</div>
            <div className='border p-4 rounded-md'>{sections.summary.content}</div>
          </div>
          {/* <div className="flex flex-col gap-[12px]">
            <div className="font-medium">{sections.summary.title}</div>
            {sections.summary.content}
          </div> */}
        </div>

        <div className="flex flex-col gap-[12px] py-[16px]">
          <div className="font-medium">{sections.recommendations.title}</div>
          {Array.from({ length: Math.ceil(sections.recommendations.items.length / 2) }).map((_, rowIndex) => (
            <div key={rowIndex} className="flex flex-col md:flex-row gap-[12px]">
              {sections.recommendations.items
                .slice(rowIndex * 2, rowIndex * 2 + 2)
                .map((rec, index) => (
                  <div key={index} className="flex-1 italic border p-4 rounded-md">
                    “{rec.text}”
                    <div className="not-italic font-medium text-right">– {rec.author}</div>
                  </div>
                ))}
            </div>
          ))}
        </div>


        <div className="flex flex-col py-[16px] gap-[12px]">
          <div className="font-medium">{sections.experience.title}</div>
          {sections.experience.items.map((item, index) => (
            <div key={index} className='border p-4 rounded-md'>
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
          ))}
        </div>

        <div className="flex flex-col py-[16px] gap-[12px]">
          <p className="font-medium">{sections.skills.title}</p>
          <SkillsMarquee />
        </div>

        <div className="flex flex-col py-[16px] gap-[12px]">
          <div className="font-medium">{sections.education.title}</div>
          {sections.education.items.map((item, index) => (
            <div key={index} className='border p-4 rounded-md'>
              <p className="font-medium">{item.institution}</p>
              <p>{item.degree}</p>
              <p>{item.duration} | {item.cgpa}</p>
              <p>{item.coursework}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col py-[16px] gap-[12px]">
          <div className="font-medium">{sections.featuredWorks.title}</div>
          {Array.from({ length: Math.ceil(sections.featuredWorks.items.length / 2) }).map((_, rowIndex) => (
            <div key={rowIndex} className="flex flex-col md:flex-row gap-[12px]">
              {sections.featuredWorks.items
                .slice(rowIndex * 2, rowIndex * 2 + 2)
                .map((item, index) => (
                  <div key={index} className="flex-1 border p-4 rounded-md">
                    <p className="font-medium">{item.title}</p>
                    <p>{item.duration}</p>
                    <p>{item.description}</p>
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4"
                    >
                      See project
                    </Link>
                  </div>
                ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col py-[16px] gap-[12px]">
          <div className="font-medium">{sections.achievements.title}</div>
          <div className="space-y-2">
            {sections.achievements.items.map((item, index) => (
              <div key={index} className="border-l-2 pl-4">
                <div className="">{item}</div>
              </div>
            ))}
          </div>
        </div> 

        <div className="flex flex-col py-[16px] gap-[12px]">
          <div className="font-medium">{sections.connect.title}</div>
          <div className="border p-4 rounded-md space-y-2">
            {/* <p className="text-lg font-semibold">Let&apos;s Get in Touch!</p> */}
            <p className="">Feel free to reach out to me via any of the following channels:</p>
            <div className="flex flex-row md:flex-col gap-[12px] md:gap-[8px]">
              {sections.connect.items.map((item, index) => (
                <div key={index} className="flex items-center gap-[12px]">
                  {/* <div className="w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center"></div> */}
                  <Link href={item.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    {item.text}
                  </Link>
                </div>
              ))}
            </div>
          </div>
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