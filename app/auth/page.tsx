import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AuthPage() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">Welcome</CardTitle>
        <CardDescription className="text-center">
          Choose an option to continue
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-6">
          <Link href="/auth/login">
            <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900">Login</h3>
              <p className="text-sm text-gray-500 text-center mt-1">
                Sign in to your account
              </p>
            </div>
          </Link>
          <Link href="/auth/register">
            <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900">Register</h3>
              <p className="text-sm text-gray-500 text-center mt-1">
                Create a new account
              </p>
            </div>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
