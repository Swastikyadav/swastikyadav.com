import Link from "next/link";
import Image from "next/image";

import { posts } from "#site/content";
import { sortPosts } from "@/lib/utils";
import { cn, formatDate } from "@/lib/utils";
import { siteConfig } from "@/config/site";

import { buttonVariants } from "../ui/button";
import { Icons } from "../icons";
import { ModeToggle } from "../mode-toggle";

export function Minimalist() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));

  return (
    <div className="container max-w-3xl">
      {/* Profile */}
      <div className="flex flex-col-reverse my-16 sm:flex-row sm:justify-between sm:items-center">
        <section>
          <div className="grid grid-cols-1 gap-1">
            <h1 className="text-2xl font-bold">{siteConfig.author}</h1>
            <small className="block text-base text-gray-500">
              {siteConfig.description}
            </small>
            <div>
              {siteConfig.links.map((link) => (
                <Link href={link.url} target="_blank" rel="noreferrer">
                  <div
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "w-8 h-8 p-2 mr-2 border"
                    )}
                  >
                    {Icons[link.name].call()}
                    <span className="sr-only">{link.name}</span>
                  </div>
                </Link>
              ))}
              {/* TODO: Move theme toggle somewhere else later. */}
              <ModeToggle />
            </div>
          </div>
        </section>

        <Image
          src={siteConfig.authorProfileImg}
          className="rounded-xl"
          width="100"
          height="100"
        />
      </div>

      {/* About */}
      <div className="grid grid-cols-1 gap-1 my-12">
        <h1 className="text-2xl font-bold">About</h1>
        <small className="block text-base text-gray-500">
          {siteConfig.about}
        </small>
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 gap-2 my-12">
        <h1 className="text-2xl font-bold">Projects</h1>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {siteConfig.projects.map((project) => (
            <section className="p-2 border rounded-lg">
              <span className="flex items-center text-lg font-semibold">
                {/* <Icons.github className="w-4 h-4" />{" "} */}
                <Image src={project.logo} width={20} height={20} />
                <Link href={project.url} target="_blank" className="mx-2">
                  {project.name}
                </Link>
                <span
                  className={`w-2 h-2 rounded-full ${
                    project.isActive ? "bg-green-600" : "bg-red-600"
                  }`}
                ></span>
              </span>
              <small className="block text-xs text-gray-500">
                {project.description}
              </small>
            </section>
          ))}
        </div>
      </div>

      {/* Blog */}
      <div className="grid grid-cols-1 gap-2 my-12">
        <h1 className="text-2xl font-bold">
          Blog{" "}
          {/* <Link href="/blog" className="text-sm font-light underline">
            View all blogs
          </Link> */}
        </h1>

        <div>
          {sortedPosts.map(({ slug, date, title, description }) => (
            <p className="flex items-center justify-between py-2 my-2 text-base font-medium text-gray-500 border-b hover:border-gray-600">
              <Link href={slug}>{title}</Link>
              <time className="font-light" dateTime={date}>
                {formatDate(date)}
              </time>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
