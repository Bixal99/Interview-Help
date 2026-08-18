import Link from "next/link";
import { InnerPage } from "@/components/inner-page";

export default function NotFound() {
  return (
    <InnerPage title="This path is not in the tutorial." description="The page may have moved, or the source link may need an update.">
      <Link href="/courses" className="btn-next">Browse tutorials</Link>
    </InnerPage>
  );
}
