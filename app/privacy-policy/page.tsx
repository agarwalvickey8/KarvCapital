import type { Metadata } from "next"
import PrivacyPolicyClient from "./PrivacyPolicyClient"

export const metadata: Metadata = {
  title: "Privacy Policy | Karv Capital",
  description: "Privacy Policy for Karv Capital - Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicy() {
  return <PrivacyPolicyClient />
}
