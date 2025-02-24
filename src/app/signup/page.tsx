"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function SignupForm() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [agreed, setAgreed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted", { username, email, password, agreed })
  }

  return (
    <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-yellow-500">CSGO Skins Signup</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="username" className="text-gray-300">
            Username
          </Label>
          <Input
            id="username"
            type="text"
            placeholder="Your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="mt-1 bg-gray-700 text-white border-gray-600 focus:border-yellow-500"
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-gray-300">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 bg-gray-700 text-white border-gray-600 focus:border-yellow-500"
          />
        </div>
        <div>
          <Label htmlFor="password" className="text-gray-300">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 bg-gray-700 text-white border-gray-600 focus:border-yellow-500"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" checked={agreed} onCheckedChange={(checked) => setAgreed(checked as boolean)} required />
          <Label htmlFor="terms" className="text-sm text-gray-300">
            I agree to the{" "}
            <a href="#" className="text-yellow-500 hover:underline">
              Terms and Conditions
            </a>
          </Label>
        </div>
        <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold">
          Sign Up
        </Button>
      </form>
      <p className="mt-4 text-sm text-center text-gray-400">
        Already have an account?{" "}
        <a href="#" className="text-yellow-500 hover:underline">
          Log in
        </a>
      </p>
    </div>
  )
}

