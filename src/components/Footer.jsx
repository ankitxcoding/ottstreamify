import {
  GITHUB_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  TWITTER_URL,
} from "../utils/constants";

const Footer = () => {
  return (
    <footer className="bg-black/50 text-white p-2 relative">
      <div className="container mx-auto flex justify-center gap-4">
        <a
          href={GITHUB_URL}
          target="_blank"
          className="fa-brands fa-github mx-2 text-white text-2xl border-2 border-white px-[12px] py-2 rounded-full hover:text-black hover:bg-white"
          rel="noopener noreferrer"
        ></a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          className="fa-brands fa-linkedin-in mx-2 text-white text-2xl border-2 border-white px-[13px] py-2 rounded-full hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2]"
          rel="noopener noreferrer"
        ></a>
        <a
          href={TWITTER_URL}
          target="_blank"
          className="fa-brands fa-x-twitter mx-2 text-white text-2xl border-2 border-white px-[12px] py-2 rounded-full hover:text-black hover:bg-white"
          rel="noopener noreferrer"
        ></a>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          className="fa-brands fa-instagram mx-2 text-white text-2xl border-2 border-white px-[13px] py-2 rounded-full hover:text-[#E1306C] hover:bg-white"
          rel="noopener noreferrer"
        ></a>
      </div>
    </footer>
  );
};

export default Footer;
