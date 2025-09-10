import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ShoppingCart, Search, User, Package, Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  const navigationItems = [
    { name: "Products", url: createPageUrl("Products") },
    { name: "Cart", url: createPageUrl("Cart") },
    { name: "Orders", url: createPageUrl("Orders") },
  ];

  const categories = [
    "Electronics",
    "Clothing", 
    "Books",
    "Home",
    "Sports",
    "Beauty",
    "Toys"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <style>
        {`
          :root {
            --primary: #1e40af;
            --primary-foreground: white;
            --accent: #f59e0b;
            --accent-foreground: white;
          }
        `}
      </style>
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to={createPageUrl("Products")} className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">MarketPlace</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.url}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.url
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Heart className="w-5 h-5" />
              </Button>
              <Link to={createPageUrl("Cart")}>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs bg-blue-600">
                    0
                  </Badge>
                </Button>
              </Link>
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col space-y-4 mt-6">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.url}
                        className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Category Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-8 py-3 overflow-x-auto">
            {categories.map((category) => (
              <Link
                key={category}
                to={createPageUrl(`Products?category=${category.toLowerCase()}`)}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">MarketPlace</h3>
              <p className="text-gray-400 text-sm">
                Your premium destination for quality products and exceptional service.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to={createPageUrl("Products")} className="hover:text-white">All Products</Link></li>
                <li><Link to={createPageUrl("Products?category=electronics")} className="hover:text-white">Electronics</Link></li>
                <li><Link to={createPageUrl("Products?category=clothing")} className="hover:text-white">Clothing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Account</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to={createPageUrl("Orders")} className="hover:text-white">My Orders</Link></li>
                <li><Link to={createPageUrl("Cart")} className="hover:text-white">Shopping Cart</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 MarketPlace. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
