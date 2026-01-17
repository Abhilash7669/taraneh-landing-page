/* eslint-disable @next/next/no-img-element */
import FooterLogo from "@/assets/logo/footer-logo.svg";
export default function Footer() {
  return (
    <footer className="bg-white pt-48 flex items-center justify-center">
      <img src={FooterLogo.src} alt="footer logo" />
    </footer>
  );
}
