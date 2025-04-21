import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Resume | Henzi Juandri",
  description:
    "Resume page for Henzi Juandri, frontend and mobile app developer.",
};

const ResumeDownload = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-white py-[4px] text-center text-sm text-muted-foreground resume-md:block">
      <a
        href={'/resume.pdf'}
        download
        className="text-primary-resume hover:text-red-400 hover:underline hover:cursor-pointer"
      >
        Download Resume
      </a>
    </div>
  );
};

export default function ResumeLayout({ children }) {
  return (
    <main className={`${inter.className} relative`}>
        {children}
        <ResumeDownload />
    </main>
  );
}
