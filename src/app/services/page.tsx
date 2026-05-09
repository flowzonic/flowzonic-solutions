import { redirect } from "next/navigation";

/**
 * This page has been removed in favor of direct service sub-pages.
 * Redirecting users to the primary Web Development service.
 */
export default function ServicesRedirect() {
  redirect("/services/web");
}
