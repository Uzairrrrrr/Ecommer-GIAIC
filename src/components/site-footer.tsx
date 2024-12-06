import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="container grid grid-cols-1 gap-12 px-4 py-12 md:grid-cols-4 lg:grid-cols-5">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Exclusive</h2>
          <div className="space-y-2">
            <h3 className="font-medium">Subscribe</h3>
            <p className="text-sm text-gray-400">Get 10% off your first order</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent"
              />
              <Button variant="outline">
                <span className="sr-only">Subscribe</span>
                →
              </Button>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium">Support</h3>
          <address className="space-y-2 text-sm text-gray-400 not-italic">
            <p>111 Bijoy sarani, Dhaka,</p>
            <p>DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </address>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium">Account</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-white">My Account</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Login / Register</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Cart</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Wishlist</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Shop</a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium">Quick Link</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-white">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Terms Of Use</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">FAQ</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Contact</a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium">Download App</h3>
          <p className="text-sm text-gray-400">Save $3 with App New User Only</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="h-24 w-24 bg-gray-800" />
            <div className="space-y-2">
              <img
                alt="Get it on Google Play"
                height="40"
                src="/placeholder.svg?height=40&width=120"
                style={{
                  aspectRatio: "120/40",
                  objectFit: "cover",
                }}
                width="120"
              />
              <img
                alt="Download on the App Store"
                height="40"
                src="/placeholder.svg?height=40&width=120"
                style={{
                  aspectRatio: "120/40",
                  objectFit: "cover",
                }}
                width="120"
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-primary">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-primary">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="container px-4 py-6 text-center text-sm text-gray-400">
          © Copyright Rimel 2022. All right reserved
        </div>
      </div>
    </footer>
  )
}

