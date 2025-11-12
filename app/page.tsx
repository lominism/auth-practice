import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <div className="text-center mb-12">
          <Image
            className="dark:invert mx-auto mb-2"
            src="/gilamesh-logo.svg"
            alt="Gilamesh logo"
            width={300}
            height={100}
            priority
          />
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 mb-4">
            Authentication Practice
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            A Next.js application to practice authentication with NestJS
            backend. Explore the authentication system and protected routes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 w-full max-w-2xl">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🔐 Authentication
              </CardTitle>
              <CardDescription>
                Login or create a new account to access protected features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Link href="/auth/login" className="block">
                  <Button className="w-full" variant="default">
                    Login
                  </Button>
                </Link>
                <Link href="/auth/register" className="block">
                  <Button className="w-full" variant="outline">
                    Create Account
                  </Button>
                </Link>
                <Link href="/auth" className="block">
                  <Button className="w-full" variant="ghost" size="sm">
                    View All Auth Options
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🏠 Dashboard
              </CardTitle>
              <CardDescription>
                Access the protected main area with sidebar navigation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Link href="/main" className="block">
                  <Button className="w-full" variant="default">
                    Enter Dashboard
                  </Button>
                </Link>
                <p className="text-sm text-zinc-500 text-center">
                  This is a protected route that demonstrates authentication
                </p>
                <div className="text-xs text-zinc-400 space-y-1">
                  <p>• Dashboard overview</p>
                  <p>• User profile management</p>
                  <p>• Settings and preferences</p>
                  <p>• Protected content area</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Built with Next.js, Tailwind CSS, and shadcn/ui components
          </p>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-2">
            Ready for NestJS backend integration
          </p>
        </div>
      </main>
    </div>
  );
}
