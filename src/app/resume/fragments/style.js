const styles = {
    profileWrapper: 'flex items-center justify-between gap-[10px] w-full',
    profileText: 'flex-1 items-start',
    name: 'text-primary-resume text-[26px] font-bold',
    tagline: 'text-secondary-resume max-w-md mt-[8px] text-sm font-mono break-words',
    locationWrapper: 'flex items-center gap-2 mt-[6px]',
    location: 'text-secondary-resume text-xs font-mono break-words',
    socialWrapper: 'flex gap-2 mt-[10px]',
    iconLink: 'flex w-[32px] h-[32px] border-[#e4e7eb] border rounded-lg hover:bg-[#F3F4F6] hover:cursor-pointer transition-all',
    photo: 'w-[110px] h-[130px] rounded-md',
  
    sectionWrapper: 'flex flex-col items-start gap-2 mt-5',
    sectionTitle: 'text-primary-resume text-[20px] font-bold',
    paragraph: 'text-secondary-resume text-sm font-mono break-words',
  
    educationRow: 'w-full flex justify-between items-center',
    educationName: 'text-primary-resume font-semibold',
    educationPeriod: 'text-[#6B7280] text-sm',
  
    skillGrid: 'flex flex-wrap gap-1',
    skillItem: 'px-[10px] py-[4px] bg-[#111827CC] rounded-md',
    skillText: 'text-xs text-[#F9FAFB] font-mono font-semibold',

    certificationWrapper: "grid grid-cols-1 gap-3 min-[650px]:grid-cols-2 resume-md:grid-cols-1",
  
    mainContent: 'resume-md:flex gap-8',
    rightColumn: 'resume-md:flex-1',
};

export default styles;