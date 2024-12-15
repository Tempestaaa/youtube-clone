import Logo from "@/components/shared/logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  IoAdd,
  IoMenu,
  IoMic,
  IoNotificationsOutline,
  IoSearchOutline,
} from "react-icons/io5";

export default function Navbar() {
  return (
    <header className="min-h-14 max-h-14 h-14 overflow-hidden flex items-center">
      <nav className="size-full flex items-center justify-between gap-2 px-4">
        <section className="inline-flex items-center gap-2 h-full">
          <Button variant="ghost" size="icon">
            <IoMenu />
          </Button>

          <Logo />
        </section>

        <section className="flex items-center gap-2 flex-1 h-full justify-center">
          <div className="flex items-center w-1/3 *:h-10">
            <Input
              placeholder="Search"
              className="rounded-l-full rounded-r-none focus-visible:ring-0 px-5 caret-foreground/60"
            />
            <Button
              variant="secondary"
              className="rounded-r-full rounded-l-none px-6"
            >
              <IoSearchOutline />
            </Button>
          </div>

          <Button variant="secondary" size="icon">
            <IoMic />
          </Button>
        </section>

        <section className="flex items-center gap-2 h-full">
          <Button
            variant="secondary"
            size="lg"
            className="rounded-full px-4 gap-1"
          >
            <IoAdd className="!size-6" />
            <span>Create</span>
          </Button>

          <Button variant="ghost" size="icon">
            <IoNotificationsOutline />
          </Button>

          <Avatar className="ml-4">
            <AvatarImage src="/images/user-profile.jpg" alt="user's avatar" />
            <AvatarFallback>US</AvatarFallback>
          </Avatar>
        </section>
      </nav>
    </header>
  );
}
