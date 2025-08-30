import type { Metadata } from "next"
import CookiePolicyClient from "./CookiePolicyClient"

export const metadata: Metadata = {
  title: "Cookie Policy | Karv Capital",
  description: "Cookie Policy for Karv Capital - Learn about how we use cookies on our website.",
}

export default function CookiePolicy() {
  return <CookiePolicyClient />
}
