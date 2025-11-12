import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, Lock, Eye, Key } from "lucide-react";

export default function ProtectedPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Protected Area</h2>
        <p className="text-muted-foreground">
          This page demonstrates protected content that requires authentication.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <Shield className="h-6 w-6 text-green-600" />
            <div className="ml-4">
              <CardTitle>Secure Access</CardTitle>
              <CardDescription>
                This content is only visible to authenticated users
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              You have successfully accessed a protected route. This
              demonstrates that the authentication system is working properly.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <Lock className="h-6 w-6 text-blue-600" />
            <div className="ml-4">
              <CardTitle>Session Status</CardTitle>
              <CardDescription>
                Your current authentication status
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">Active Session</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Session expires in 24 hours
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <Eye className="h-6 w-6 text-purple-600" />
            <div className="ml-4">
              <CardTitle>Sensitive Data</CardTitle>
              <CardDescription>
                Information that requires authorization
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="p-3 bg-gray-50 rounded border-l-4 border-purple-500">
                <p className="text-sm font-medium">User ID: USR_123456</p>
                <p className="text-xs text-muted-foreground">
                  Internal identifier
                </p>
              </div>
              <div className="p-3 bg-gray-50 rounded border-l-4 border-purple-500">
                <p className="text-sm font-medium">
                  Access Level: Administrator
                </p>
                <p className="text-xs text-muted-foreground">
                  Permission level
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <Key className="h-6 w-6 text-orange-600" />
            <div className="ml-4">
              <CardTitle>Authentication Info</CardTitle>
              <CardDescription>
                Details about your current session
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-1 text-sm">
              <p>
                <span className="font-medium">Login Time:</span> 2:30 PM
              </p>
              <p>
                <span className="font-medium">IP Address:</span> 192.168.1.100
              </p>
              <p>
                <span className="font-medium">Device:</span> MacOS Browser
              </p>
              <p>
                <span className="font-medium">Location:</span> San Francisco, CA
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Protected Resources</CardTitle>
          <CardDescription>
            These resources are only available to authenticated users
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <div className="flex items-center justify-between p-3 border rounded">
              <div>
                <p className="font-medium">User Management Dashboard</p>
                <p className="text-sm text-muted-foreground">
                  Manage user accounts and permissions
                </p>
              </div>
              <div className="text-sm text-green-600 font-medium">
                ✓ Accessible
              </div>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <div>
                <p className="font-medium">System Analytics</p>
                <p className="text-sm text-muted-foreground">
                  View system performance and usage data
                </p>
              </div>
              <div className="text-sm text-green-600 font-medium">
                ✓ Accessible
              </div>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <div>
                <p className="font-medium">Security Logs</p>
                <p className="text-sm text-muted-foreground">
                  Access authentication and security event logs
                </p>
              </div>
              <div className="text-sm text-green-600 font-medium">
                ✓ Accessible
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
