import fs from "fs";
import path from "path";
import "../App.test";
import Image from "next/image";

export default function Home() {
  const filePath = path.join(process.cwd(), "App.test.js");
  fs.readFile("App.test.js", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });

  let content: string;
  try {
    content = fs.readFileSync(filePath, "utf8");
  } catch (err: any) {
    content = `Error reading file: ${err?.message ?? String(err)}`;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-16 px-8 bg-white dark:bg-black sm:items-start">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={80}
              height={16}
              priority
            />
          </div>
        </div>

        <section className="w-full mb-24">
          <h2 className="text-lg font-medium mb-3 text-zinc-200">
            Contents of App.test.js
          </h2>
          <pre className="whitespace-pre-wrap bg-zinc-900 text-white p-4 rounded-md text-sm text-left">
            {content}
          </pre>
        </section>
      </main>
    </div>
  );
}
