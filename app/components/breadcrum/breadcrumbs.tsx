"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiGreaterThan } from "react-icons/pi";
import { breadcrumbsLabel } from "./breadcrumbsLabel";

export const Breadcrumbs = () => {
  const pathName = usePathname();
  const pathSegments = pathName.split("/").filter(Boolean);

  const customFullLabel = breadcrumbsLabel[pathName];

  let breadcrumbs;

  if (customFullLabel) {
   
    breadcrumbs = [
      { label: "Home", href: "/", isHome: true },
      { label: customFullLabel, href: pathName, isHome: false },
    ];
  } else {
   
    breadcrumbs = [
      { label: "Home", href: "/", isHome: true },
      ...pathSegments.map((segment, index) => {
        const href = "/" + pathSegments.slice(0, index + 1).join("/");
        const customLabel = breadcrumbsLabel[href];

        const label =
          customLabel ||
          segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase());

        return { label, href, isHome: false };
      }),
    ];
  }

  return (
    <nav className="text-sm md:flex hidden  items-center flex-wrap ">
      {breadcrumbs.map((crumb, index) => {
        const isLast = index === breadcrumbs.length - 1;

        return (
          <span key={crumb.href} className="flex items-center space-x-4">
            {index !== 0 && (
              <span className="text-text8 mx-3">
                <PiGreaterThan size={12} className="mt-0.5" />
              </span>
            )}

            {!isLast ? (
              <Link
                href={crumb.href}
                className={`transition-colors duration-300 text-md font-medium ${
                  crumb.isHome
                    ? pathSegments.length === 1
                      ? "text-text11"
                      : "text-text19 hover:text-text6"
                    : "text-text19 hover:text-text6"
                }`}
              >
                {crumb.label}
              </Link>
            ) : (
              <span className="text-text6 font-medium">{crumb.label}</span>
            )}
          </span>
        );
      })}
    </nav>
  );
};
