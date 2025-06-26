"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiGreaterThan } from "react-icons/pi";

export const Breadcrumbs = () => {
  const pathName = usePathname();
  const pathSegments = pathName.split("/").filter(Boolean);

  const makeLabel = (segment: string) =>
    segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

  const breadcrumbs = [
    { label: "Home", href: "/", isHome: true },
    ...pathSegments.map((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/");
      return { label: makeLabel(segment), href, isHome: false };
    }),
  ];

  return (
    <nav className="text-sm flex items-center flex-wrap">
      {breadcrumbs.map((crumb, index) => {
        const isLast = index === breadcrumbs.length - 1;

        return (
          <span key={crumb.href} className="flex items-center space-x-1">
            {index !== 0 && (
              <span className="text-text8 mx-1">
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
