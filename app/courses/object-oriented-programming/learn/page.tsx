import { HashRedirect } from "@/components/hash-redirect";
import { legacyOopLearnMap } from "@/lib/legacy-routes";

export default function OopLearnRedirect() {
  const map = legacyOopLearnMap();
  return (
    <main id="main-content">
      <HashRedirect map={map} fallback="/courses/computer-science/phase/3" />
    </main>
  );
}
