import type { Metadata } from "next"
import TermsOfServiceContent from "./TermsOfServiceContent"

export const metadata: Metadata = {
  title: "Terms of Service | Karv Capital",
  description: "Terms of Service for Karv Capital - Read our terms and conditions for using our financial services.",
}

export default function TermsOfService() {
  return <TermsOfServiceContent />
}
