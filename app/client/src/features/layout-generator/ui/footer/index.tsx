"use client";
import type { StrapiFooter } from "@/shared/types";
import { Link, Paragraph } from "@/shared/ui";

import "./index.scss";

const Footer = (props: StrapiFooter) => {
  return (
    <footer className="footer" data-scroll-section>
      <div className="footer__row">
        <div className="footer__row_item">
          <nav className="footer__nav">
            {props.links.map((link) => (
              <Link key={link.id} isExternal={link.isExternal} href={link.href}>
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="footer__row_item">
          <Paragraph size="small">
            Icons by{" "}
            <Link
              isExternal={true}
              size="small"
              href="https://iconscout.com/contributors/thaophan210"
            >
              Thao Phan
            </Link>{" "}
            on{" "}
            <Link isExternal={true} size="small" href="https://iconscout.com">
              IconScout
            </Link>
          </Paragraph>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
