import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function SignUpPage() {
  return (
    <main className="flex-1">
      <div className="container flex items-center justify-between pb-8 pt-6 md:py-10">
        <div className="relative h-[805px] w-[50%]">
          <Image
            alt="Shopping cart with smartphone and shopping bags"
            className="object-cover"
            fill
            src="/mobile.png?height=805&width=781"
            priority
          />
        </div>

        <div className="space-y-6 h-[600px] w-[440px] ml-20">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Create an account</h1>
            <p className="text-gray-500">Enter your details below</p>
          </div>
          <div className="space-y-4">
            <Input placeholder="Name" />
            <Input placeholder="Email or Phone Number" />
            <Input type="password" placeholder="Password" />
            <Button className="w-full bg-red-500 hover:bg-red-600">
              Create Account
            </Button>
            <Button className="w-full" variant="outline">
              <Image
                alt="Google logo"
                height={20}
                src="/placeholder.svg?height=20&width=20"
                width={20}
                className="mr-2"
              />
              Sign up with Google
            </Button>
            <div className="text-center text-sm">
              Already have account?{" "}
              <Link href="/login" className="text-red-500 hover:underline">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


