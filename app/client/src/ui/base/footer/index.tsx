"use client";
import { useContext } from "react";

import { Link, Paragraph } from "@/ui/kit";
import { LanguageContext } from "@/models";

import "./index.scss";

const Footer = () => {
  const { languageData } = useContext(LanguageContext);
  const { contactData } = languageData;

  return (
    <footer className="footer" data-scroll-section>
      <div className="footer__row">
        <div className="footer__row_item">
          <nav className="footer__nav">
            {contactData.map((link, index) => (
              <Link key={index} href={link.href}>
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="footer__row_item">
          <Paragraph size="small">
            Icons by
            <Link
              target="_blank"
              size="small"
              href="https://iconscout.com/contributors/thaophan210"
            >
              Thao Phan
            </Link>{" "}
            on{" "}
            <Link target="_blank" size="small" href="https://iconscout.com">
              IconScout
            </Link>
          </Paragraph>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
