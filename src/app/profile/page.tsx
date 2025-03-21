"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  User,
  Settings,
  History,
  Users,
  Edit,
  LogOut,
  Copy,
  ChevronRight,
  Star,
  DollarSign,
  Gift,
  Shield,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

const userData = {
  id: "user_12345",
  username: "LuckyShot",
  email: "luckyshot@example.com",
  avatar: "/placeholder.svg?height=200&width=200",
  joinDate: "January 15, 2025",
  level: 42,
  xp: 8750,
  xpToNextLevel: 10000,
  coins: 1250,
  totalCasesOpened: 387,
  totalSpins: 156,
  totalUpgrades: 89,
  successfulUpgrades: 32,
  bestDrop: {
    name: "AWP | Dragon Lore",
    image: "/placeholder.svg?height=60&width=60",
    rarity: "legendary",
    value: 1250,
    date: "2 weeks ago",
    color: "from-yellow-500 to-amber-600",
  },
  recentDrops: [
    {
      id: 1,
      name: "AK-47 | Fire Serpent",
      image: "/placeholder.svg?height=60&width=60",
      rarity: "epic",
      value: 750,
      date: "2 days ago",
      color: "from-red-500 to-orange-600",
    },
    {
      id: 2,
      name: "USP-S | Kill Confirmed",
      image: "/placeholder.svg?height=60&width=60",
      rarity: "epic",
      value: 180,
      date: "3 days ago",
      color: "from-red-500 to-orange-600",
    },
    {
      id: 3,
      name: "Glock-18 | Fade",
      image: "/placeholder.svg?height=60&width=60",
      rarity: "epic",
      value: 320,
      date: "1 week ago",
      color: "from-purple-500 to-pink-600",
    },
  ],
  achievements: [
    {
      id: 1,
      name: "First Case",
      description: "Open your first case",
      completed: true,
      icon: Gift,
    },
    {
      id: 2,
      name: "Lucky Spin",
      description: "Win a legendary item from the spinner",
      completed: true,
      icon: Zap,
    },
    {
      id: 3,
      name: "Collector",
      description: "Have 50 items in your inventory",
      completed: true,
      icon: Star,
    },
    {
      id: 4,
      name: "High Roller",
      description: "Open 10 premium cases",
      completed: true,
      icon: DollarSign,
    },
    {
      id: 5,
      name: "Master Upgrader",
      description: "Successfully upgrade 10 items",
      completed: true,
      icon: ChevronRight,
    },
    {
      id: 6,
      name: "Veteran",
      description: "Be a member for 3 months",
      completed: false,
      progress: 65,
      icon: Shield,
    },
    {
      id: 7,
      name: "Case Enthusiast",
      description: "Open 500 cases",
      completed: false,
      progress: 77,
      icon: Gift,
    },
    {
      id: 8,
      name: "Legendary Collection",
      description: "Own 5 legendary items at once",
      completed: false,
      progress: 60,
      icon: Star,
    },
  ],
  friends: [
    {
      id: 1,
      username: "HeadshotPro",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "online",
      lastActive: "Now",
    },
    {
      id: 2,
      username: "FragMaster",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "online",
      lastActive: "Now",
    },
    {
      id: 3,
      username: "SniperElite",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "offline",
      lastActive: "2 hours ago",
    },
    {
      id: 4,
      username: "NinjaDefuser",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "offline",
      lastActive: "1 day ago",
    },
  ],
  transactions: [
    {
      id: 1,
      type: "deposit",
      amount: 500,
      method: "Credit Card",
      date: "2 days ago",
      status: "completed",
    },
    {
      id: 2,
      type: "withdrawal",
      amount: 250,
      method: "Bitcoin",
      date: "1 week ago",
      status: "completed",
    },
    {
      id: 3,
      type: "deposit",
      amount: 1000,
      method: "PayPal",
      date: "2 weeks ago",
      status: "completed",
    },
    {
      id: 4,
      type: "withdrawal",
      amount: 750,
      method: "Ethereum",
      date: "1 month ago",
      status: "completed",
    },
  ],
  notifications: {
    emailNotifications: true,
    pushNotifications: true,
    marketingEmails: false,
    friendRequests: true,
    newDrops: true,
    promotions: true,
  },
};

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [copied, setCopied] = useState(false);

  const copyUserId = () => {
    navigator.clipboard.writeText(userData.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900 text-white">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5 z-0"></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="relative mb-4 group">
                    <Avatar className="h-24 w-24 border-2 border-gray-700">
                      <AvatarImage
                        src={userData.avatar}
                        alt={userData.username}
                      />
                      <AvatarFallback className="bg-gradient-to-br from-purple-600 to-pink-600 text-xl">
                        {userData.username.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <Edit className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <h2 className="text-xl font-bold mb-1">
                    {userData.username}
                  </h2>
                  <div className="flex items-center mb-4 text-sm text-gray-400">
                    <span className="truncate max-w-[120px]">
                      {userData.id}
                    </span>
                    <button
                      onClick={copyUserId}
                      className="ml-1 text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      {copied ? (
                        <Badge
                          variant="outline"
                          className="text-green-400 border-green-400"
                        >
                          Copied!
                        </Badge>
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                    </button>
                  </div>

                  <div className="w-full mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">
                        Level {userData.level}
                      </span>
                      <span className="text-sm text-gray-400">
                        {userData.xp}/{userData.xpToNextLevel} XP
                      </span>
                    </div>
                    <Progress
                      value={(userData.xp / userData.xpToNextLevel) * 100}
                      className="h-2 bg-gray-700"
                    >
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                        style={{
                          width: `${
                            (userData.xp / userData.xpToNextLevel) * 100
                          }%`,
                        }}
                      />
                    </Progress>
                  </div>

                  <div className="w-full space-y-2">
                    <Button
                      variant="ghost"
                      className={`w-full justify-start ${
                        activeTab === "overview" ? "bg-gray-700/50" : ""
                      }`}
                      onClick={() => setActiveTab("overview")}
                    >
                      <User className="mr-2 h-4 w-4" />
                      Overview
                    </Button>


                    <Button>
                      <Link href={"/StatsAchievements"}>Stats & Achievements</Link>
                    </Button>


                    <Button
                      variant="ghost"
                      className={`w-full justify-start ${
                        activeTab === "history" ? "bg-gray-700/50" : ""
                      }`}
                      onClick={() => setActiveTab("history")}
                    >
                      <History className="mr-2 h-4 w-4" />
                      Transaction History
                    </Button>


                    <Button
                      variant="ghost"
                      className={`w-full justify-start ${
                        activeTab === "friends" ? "bg-gray-700/50" : ""
                      }`}
                      onClick={() => setActiveTab("friends")}
                    >
                      <Users className="mr-2 h-4 w-4" />
                      Friends
                    </Button>


                    <Button
                      variant="ghost"
                      className={`w-full justify-start ${
                        activeTab === "settings" ? "bg-gray-700/50" : ""
                      }`}
                      onClick={() => setActiveTab("settings")}
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Button>


                    <Separator className="my-2 bg-gray-700" />
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-950/30"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700 mb-6">
                  <CardHeader>
                    <CardTitle>Account Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="bg-gray-700/50 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">
                          Member Since
                        </div>
                        <div className="font-medium">{userData.joinDate}</div>
                      </div>
                      <div className="bg-gray-700/50 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">
                          Current Balance
                        </div>
                        <div className="font-medium text-yellow-400">
                          {userData.coins} coins
                        </div>
                      </div>
                      <div className="bg-gray-700/50 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">
                          Cases Opened
                        </div>
                        <div className="font-medium">
                          {userData.totalCasesOpened}
                        </div>
                      </div>
                      <div className="bg-gray-700/50 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">
                          Upgrade Success Rate
                        </div>
                        <div className="font-medium">
                          {Math.round(
                            (userData.successfulUpgrades /
                              userData.totalUpgrades) *
                              100
                          )}
                          %
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700">
                    <CardHeader>
                      <CardTitle>Best Drop</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center">
                        <div className="relative mr-4">
                          <div
                            className={`absolute inset-0 rounded-md bg-gradient-to-br ${userData.bestDrop.color} opacity-20`}
                          ></div>
                          <Image
                            src={userData.bestDrop.image || "/placeholder.svg"}
                            alt={userData.bestDrop.name}
                            width={80}
                            height={80}
                            className="relative z-10"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">
                            {userData.bestDrop.name}
                          </h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge
                              className={
                                userData.bestDrop.rarity === "legendary"
                                  ? "bg-yellow-500/20 text-yellow-300"
                                  : userData.bestDrop.rarity === "epic"
                                  ? "bg-purple-500/20 text-purple-300"
                                  : "bg-blue-500/20 text-blue-300"
                              }
                            >
                              {userData.bestDrop.rarity}
                            </Badge>
                            <span className="text-sm text-gray-400">
                              {userData.bestDrop.date}
                            </span>
                          </div>
                          <div className="mt-2 text-yellow-400 font-medium">
                            {userData.bestDrop.value} coins
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle>Recent Drops</CardTitle>
                      <Link
                        href="/inventory"
                        className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        View All
                      </Link>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {userData.recentDrops.map((drop) => (
                          <div key={drop.id} className="flex items-center">
                            <div className="relative mr-3">
                              <div
                                className={`absolute inset-0 rounded-md bg-gradient-to-br ${drop.color} opacity-20`}
                              ></div>
                              <Image
                                src={drop.image || "/placeholder.svg"}
                                alt={drop.name}
                                width={40}
                                height={40}
                                className="relative z-10"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-sm">
                                {drop.name}
                              </h4>
                              <div className="flex items-center mt-1">
                                <span className="text-yellow-400 text-xs mr-2">
                                  {drop.value} coins
                                </span>
                                <span className="text-xs text-gray-400">
                                  {drop.date}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Recent Achievements</CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30"
                      onClick={() => setActiveTab("stats")}
                    >
                      View All
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {userData.achievements
                        .filter((a) => a.completed)
                        .slice(0, 4)
                        .map((achievement) => (
                          <div
                            key={achievement.id}
                            className="flex items-center p-3 bg-gray-700/30 rounded-lg"
                          >
                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                              <achievement.icon className="h-5 w-5 text-green-400" />
                            </div>
                            <div>
                              <h4 className="font-medium">
                                {achievement.name}
                              </h4>
                              <p className="text-sm text-gray-400">
                                {achievement.description}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            

            {/* Transaction History Tab */}
            {activeTab === "history" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700">
                  <CardHeader>
                    <CardTitle>Transaction History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {userData.transactions.map((transaction) => (
                        <div
                          key={transaction.id}
                          className="flex items-center p-4 bg-gray-700/30 rounded-lg"
                        >
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                              transaction.type === "deposit"
                                ? "bg-green-500/20"
                                : "bg-red-500/20"
                            }`}
                          >
                            {transaction.type === "deposit" ? (
                              <DollarSign className="h-5 w-5 text-green-400" />
                            ) : (
                              <DollarSign className="h-5 w-5 text-red-400" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h4 className="font-medium capitalize">
                                {transaction.type}
                              </h4>
                              <span
                                className={
                                  transaction.type === "deposit"
                                    ? "text-green-400"
                                    : "text-red-400"
                                }
                              >
                                {transaction.type === "deposit" ? "+" : "-"}
                                {transaction.amount} coins
                              </span>
                            </div>
                            <div className="flex justify-between mt-1">
                              <span className="text-sm text-gray-400">
                                via {transaction.method}
                              </span>
                              <span className="text-sm text-gray-400">
                                {transaction.date}
                              </span>
                            </div>
                          </div>
                          <Badge className="ml-4 bg-green-500/20 text-green-400">
                            {transaction.status}
                          </Badge>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 text-center">
                      <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:opacity-90">
                        View All Transactions
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Friends Tab */}
            {activeTab === "friends" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700 mb-6">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Friends</CardTitle>
                    <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:opacity-90">
                      Add Friend
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {userData.friends.map((friend) => (
                        <div
                          key={friend.id}
                          className="flex items-center p-3 bg-gray-700/30 rounded-lg"
                        >
                          <div className="relative mr-3">
                            <Avatar>
                              <AvatarImage
                                src={friend.avatar}
                                alt={friend.username}
                              />
                              <AvatarFallback className="bg-gradient-to-br from-purple-600 to-pink-600">
                                {friend.username.substring(0, 2).toUpperCase()}
                              </AvatarFallback>
                            </Avatar>
                            <div
                              className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-800 ${
                                friend.status === "online"
                                  ? "bg-green-500"
                                  : "bg-gray-500"
                              }`}
                            ></div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{friend.username}</h4>
                            <p className="text-xs text-gray-400">
                              {friend.status === "online"
                                ? "Online"
                                : `Last seen ${friend.lastActive}`}
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-cyan-500 text-cyan-500 hover:bg-cyan-500/20"
                            >
                              Message
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-purple-500 text-purple-500 hover:bg-purple-500/20"
                            >
                              View Profile
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700">
                  <CardHeader>
                    <CardTitle>Friend Suggestions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[1, 2, 3, 4].map((id) => (
                        <div
                          key={id}
                          className="flex items-center p-3 bg-gray-700/20 rounded-lg"
                        >
                          <Avatar className="mr-3">
                            <AvatarImage
                              src={`/placeholder.svg?height=40&width=40`}
                            />
                            <AvatarFallback className="bg-gradient-to-br from-gray-600 to-gray-700">
                              {String.fromCharCode(65 + id)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h4 className="font-medium">Suggested User {id}</h4>
                            <p className="text-xs text-gray-400">
                              3 mutual friends
                            </p>
                          </div>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:opacity-90"
                          >
                            Add
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Settings Tab */}
            {activeTab === "settings" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700 mb-6">
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-4">
                          Profile Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="username">Username</Label>
                            <Input
                              id="username"
                              defaultValue={userData.username}
                              className="bg-gray-700/50 border-gray-600"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              defaultValue={userData.email}
                              className="bg-gray-700/50 border-gray-600"
                            />
                          </div>
                        </div>
                      </div>

                      <Separator className="bg-gray-700" />

                      <div>
                        <h3 className="text-lg font-medium mb-4">Security</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="current-password">
                              Current Password
                            </Label>
                            <Input
                              id="current-password"
                              type="password"
                              placeholder="••••••••"
                              className="bg-gray-700/50 border-gray-600"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="new-password">New Password</Label>
                            <Input
                              id="new-password"
                              type="password"
                              placeholder="••••••••"
                              className="bg-gray-700/50 border-gray-600"
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:opacity-90">
                            Update Password
                          </Button>
                        </div>
                      </div>

                      <Separator className="bg-gray-700" />

                      <div>
                        <h3 className="text-lg font-medium mb-4">
                          Two-Factor Authentication
                        </h3>
                        <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                          <div>
                            <h4 className="font-medium">Enable 2FA</h4>
                            <p className="text-sm text-gray-400">
                              Add an extra layer of security to your account
                            </p>
                          </div>
                          <Switch id="2fa" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700">
                  <CardHeader>
                    <CardTitle>Notification Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Email Notifications</h4>
                          <p className="text-sm text-gray-400">
                            Receive emails about your account activity
                          </p>
                        </div>
                        <Switch
                          id="email-notifications"
                          defaultChecked={
                            userData.notifications.emailNotifications
                          }
                        />
                      </div>

                      <Separator className="bg-gray-700" />

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Push Notifications</h4>
                          <p className="text-sm text-gray-400">
                            Receive notifications on your device
                          </p>
                        </div>
                        <Switch
                          id="push-notifications"
                          defaultChecked={
                            userData.notifications.pushNotifications
                          }
                        />
                      </div>

                      <Separator className="bg-gray-700" />

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Marketing Emails</h4>
                          <p className="text-sm text-gray-400">
                            Receive emails about promotions and news
                          </p>
                        </div>
                        <Switch
                          id="marketing-emails"
                          defaultChecked={
                            userData.notifications.marketingEmails
                          }
                        />
                      </div>

                      <Separator className="bg-gray-700" />

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Friend Requests</h4>
                          <p className="text-sm text-gray-400">
                            Get notified about new friend requests
                          </p>
                        </div>
                        <Switch
                          id="friend-requests"
                          defaultChecked={userData.notifications.friendRequests}
                        />
                      </div>

                      <Separator className="bg-gray-700" />

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">New Drops</h4>
                          <p className="text-sm text-gray-400">
                            Get notified about new case drops
                          </p>
                        </div>
                        <Switch
                          id="new-drops"
                          defaultChecked={userData.notifications.newDrops}
                        />
                      </div>

                      <Separator className="bg-gray-700" />

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Promotions</h4>
                          <p className="text-sm text-gray-400">
                            Get notified about special offers
                          </p>
                        </div>
                        <Switch
                          id="promotions"
                          defaultChecked={userData.notifications.promotions}
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:opacity-90">
                        Save Notification Settings
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
