import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div>
        <h1> Strings</h1>
      </div>

      <div>
        <Link href={"/signin"}> Sign in </Link>
      </div>
      <div>
        <Link href={"/signup"}> Sign up </Link>
      </div>
    </main>
  );
}
