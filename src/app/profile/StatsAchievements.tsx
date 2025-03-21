"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Star,
  DollarSign,
  Gift,
  Shield,
  Zap,
  Badge,
} from "lucide-react";
import { useState } from "react";

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

export const StatsAchievements = () => {
  const [activeTab] = useState("overview");

  return (
    <div>
      {activeTab === "stats" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700 mb-6">
            <CardHeader>
              <CardTitle>Your Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Gift className="h-5 w-5 text-cyan-400 mr-2" />
                    <div className="text-lg font-medium">Cases Opened</div>
                  </div>
                  <div className="text-3xl font-bold">
                    {userData.totalCasesOpened}
                  </div>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Zap className="h-5 w-5 text-purple-400 mr-2" />
                    <div className="text-lg font-medium">Spins</div>
                  </div>
                  <div className="text-3xl font-bold">
                    {userData.totalSpins}
                  </div>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <ChevronRight className="h-5 w-5 text-pink-400 mr-2" />
                    <div className="text-lg font-medium">Upgrades</div>
                  </div>
                  <div className="text-3xl font-bold">
                    {userData.totalUpgrades}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    {userData.successfulUpgrades} successful (
                    {Math.round(
                      (userData.successfulUpgrades / userData.totalUpgrades) *
                        100
                    )}
                    %)
                  </div>
                </div>
              </div>

              <div className="bg-gray-700/30 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-medium mb-4">Activity Over Time</h3>
                <div className="h-48 flex items-end justify-between space-x-2">
                  {Array.from({ length: 30 }).map((_, i) => {
                    const height = Math.floor(Math.random() * 100);
                    return (
                      <div
                        key={i}
                        className="flex-1 flex flex-col items-center"
                      >
                        <div
                          className="w-full bg-gradient-to-t from-cyan-600 to-purple-600 rounded-t-sm"
                          style={{ height: `${height}%` }}
                        ></div>
                        {i % 5 === 0 && (
                          <div className="text-xs text-gray-500 mt-1">
                            {30 - i}d
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700">
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {userData.achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`flex items-center p-4 rounded-lg ${
                      achievement.completed
                        ? "bg-gray-700/30"
                        : "bg-gray-700/10 border border-gray-700"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                        achievement.completed
                          ? "bg-green-500/20"
                          : "bg-gray-600/20"
                      }`}
                    >
                      <achievement.icon
                        className={`h-6 w-6 ${
                          achievement.completed
                            ? "text-green-400"
                            : "text-gray-400"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{achievement.name}</h4>
                      <p className="text-sm text-gray-400">
                        {achievement.description}
                      </p>
                      {!achievement.completed &&
                        achievement.progress !== undefined && (
                          <div className="mt-2">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-xs text-gray-400">
                                {achievement.progress}% complete
                              </span>
                            </div>
                            <Progress
                              value={achievement.progress}
                              className="h-1.5 bg-gray-700"
                            >
                              <div
                                className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                                style={{
                                  width: `${achievement.progress}%`,
                                }}
                              />
                            </Progress>
                          </div>
                        )}
                    </div>
                    {achievement.completed && (
                      <Badge className="bg-green-500/20 text-green-400 ml-2">
                        Completed
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
};
