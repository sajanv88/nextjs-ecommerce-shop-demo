import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@nuvui/react";
import Link from "next/link";
import { Fragment } from "react";
import { href, type Path } from "@/lib/routes";
import "./site-breadcrumb.scss";

export interface Crumb {
  name: string;
  path: Path;
}

// The trail above a page's heading. The last crumb is the page itself, and isn't a link.
export function SiteBreadcrumb({ trail }: { trail: readonly Crumb[] }) {
  return (
    <Breadcrumb className="site-breadcrumb">
      <BreadcrumbList>
        {trail.map((crumb, index) => (
          <Fragment key={crumb.path}>
            {index > 0 && <BreadcrumbSeparator>/</BreadcrumbSeparator>}
            <BreadcrumbItem>
              {index === trail.length - 1 ? (
                <BreadcrumbPage>{crumb.name}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={href(crumb.path)}>{crumb.name}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
