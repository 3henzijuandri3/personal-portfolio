import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./style";
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineGlobal,
} from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import FotoFormal from "@/public/images/formal.jpeg";
import Container from "@/components/Container";
import ExperienceText from "@/components/ExperienceText";
import CertificationCard from "@/components/CertificationCard";

const ProfileSection = ({ profileData }) => (
  <div className={styles.profileWrapper}>
    <div className={styles.profileText}>
      <p className={styles.name}>{profileData.name}</p>
      <p className={styles.tagline}>{profileData.summary}</p>
      <div className={styles.locationWrapper}>
        <FaLocationDot color="#111827" size={12} />
        <p className={styles.location}>{profileData.location}</p>
      </div>
      <div className={styles.socialWrapper}>
        <Link href="/" className={styles.iconLink}>
          <AiOutlineGlobal className="m-auto" color="#111827" />
        </Link>
        <Link
          href="mailto:henzijuandri.work@gmail.com"
          className={styles.iconLink}
        >
          <AiOutlineMail className="m-auto" color="#111827" />
        </Link>
        <Link
          href="https://www.instagram.com/henzijuandri"
          target="_blank"
          className={styles.iconLink}
        >
          <AiOutlineInstagram className="m-auto" color="#111827" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/henzi-juandri-514a9019a"
          target="_blank"
          className={styles.iconLink}
        >
          <AiOutlineLinkedin className="m-auto" color="#111827" />
        </Link>
        <Link
          href="https://github.com/3henzijuandri3"
          target="_blank"
          className={styles.iconLink}
        >
          <AiOutlineGithub className="m-auto" color="#111827" />
        </Link>
      </div>
    </div>
    <Image className={styles.photo} alt="Foto Formal" src={FotoFormal} />
  </div>
);

const AboutSection = ({ aboutData }) => (
  <div className={styles.sectionWrapper}>
    <h1 className={styles.sectionTitle}>About</h1>
    <p className={styles.paragraph}>{aboutData.about}</p>
  </div>
);

const WorkExperience = ({ workExperiences }) => (
  <div className={styles.sectionWrapper}>
    <h1 className={styles.sectionTitle}>Work Experiences</h1>
    {workExperiences.map((data, id, arr) => (
      <ExperienceText
        key={id}
        experienceData={data}
        isLast={id === arr.length - 1}
      />
    ))}
  </div>
);

const OrganisationalExperience = ({ organizationExperiences }) => (
  <div className={styles.sectionWrapper}>
    <h1 className={styles.sectionTitle}>Organisational Experiences</h1>
    {organizationExperiences.map((data, id, arr) => (
      <ExperienceText
        key={id}
        experienceData={data}
        isLast={id === arr.length - 1}
      />
    ))}
  </div>
);

const ExperiencesSection = ({ experienceData }) => (
  <div className="w-full resume-md:max-w-[55%]">
    <WorkExperience workExperiences={experienceData.work} />
    <OrganisationalExperience
      organizationExperiences={experienceData.organisational}
    />
  </div>
);

const EducationSection = ({ isDesktop = true, educationData }) => (
  <div
    className={`${styles.sectionWrapper} ${
      isDesktop ? "hidden resume-md:flex" : "resume-md:hidden"
    }`}
  >
    <h1 className={styles.sectionTitle}>Education</h1>
    <div className={styles.educationRow}>
      <p className={styles.educationName}>{educationData.university}</p>
      <p className={styles.educationPeriod}>{educationData.period}</p>
    </div>
    <p className={styles.paragraph}>{educationData.degree} | {educationData.gpa}</p>
  </div>
);

const SkillSection = ({ skills }) => (
  <div className={styles.sectionWrapper}>
    <h1 className={styles.sectionTitle}>Skills</h1>
    <div className={styles.skillGrid}>
      {skills.map((data, id) => (
        <div key={id} className={styles.skillItem}>
          <p className={styles.skillText}>{data}</p>
        </div>
      ))}
    </div>
  </div>
);

const OtherExperiences = ({ certifications }) => (
  <div className={styles.sectionWrapper}>
    <h1 className={styles.sectionTitle}>Other Experiences</h1>
    <div className={styles.certificationWrapper}>
      {certifications.map((data, id, arr) => (
        <CertificationCard
          key={id}
          certificationData={data}
          isLast={id === arr.length - 1}
        />
      ))}
    </div>
  </div>
);

const Resume = ({ resumeData }) => {
  return (
    <Container isResume>
      <ProfileSection profileData={resumeData} />
      <AboutSection aboutData={resumeData} />
      <EducationSection educationData={resumeData.education} isDesktop={false} />
      <div className="resume-md:flex gap-8">
        <ExperiencesSection experienceData={resumeData} />
        <div className="resume-md:flex-1">
          <EducationSection educationData={resumeData.education} />
          <SkillSection skills={resumeData.skills} />
          <OtherExperiences certifications={resumeData.certification} />
        </div>
      </div>
    </Container>
  );
};

export default Resume;
