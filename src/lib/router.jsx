"use client";
// Drop-in replacements for the react-router-dom APIs the original app used,
// backed by the Next.js App Router.
import { forwardRef, useEffect } from "react";
import NextLink from "next/link";
import {
  useParams as useNextParams,
  usePathname,
  useRouter,
} from "next/navigation";

export const Link = forwardRef(function Link({ to, href, ...rest }, ref) {
  return <NextLink ref={ref} href={to ?? href ?? "#"} {...rest} />;
});

export function useNavigate() {
  const router = useRouter();
  return (to, options) =>
    options?.replace ? router.replace(to) : router.push(to);
}

export function useParams() {
  return useNextParams() ?? {};
}

export function useLocation() {
  return { pathname: usePathname() };
}

export function Navigate({ to }) {
  const router = useRouter();
  useEffect(() => {
    router.replace(to);
  }, [router, to]);
  return null;
}
