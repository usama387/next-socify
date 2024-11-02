import { UserButton } from "@clerk/nextjs";

const HomePage = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
};

export default HomePage;
