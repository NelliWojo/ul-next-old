import Link from "next/link";

export default function LinkA({ text, href }) {
  return <Link href={href}>{text}</Link>;
}
