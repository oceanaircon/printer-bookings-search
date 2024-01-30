import NavBar from "@/app/ui/NavBar";
import { UserButton } from "@clerk/nextjs";

export default function Nav() {
  return (
    <div>
      <ul className="flex">
        <li>
          <NavBar />
        </li>
        <li className="pt-4 pl-6 space-x-6 text-zinc">
          <UserButton afterSignOutUrl="/" />
        </li>
      </ul>
    </div>
  );
}
