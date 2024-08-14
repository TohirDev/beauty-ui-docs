import { pageTree } from "@/app/source";
import { type HomeLayoutProps } from "fumadocs-ui/home-layout";
import { type DocsLayoutProps } from "fumadocs-ui/layout";
import Image from "next/image";
import logo from "./assets/logo.png";
// shared configuration
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: (
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <Image src={logo} alt="Logo" />
        <span
          style={{
            margin: "0 0 8px -8px",
            display: "block",
            fontSize: "25px",
          }}
        >
          eauty/ui
        </span>
      </div>
    ),
  },
  githubUrl: "https://github.com/tohirdev",
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: pageTree,
};
