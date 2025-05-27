"use client";
import React, { useState } from "react";
import {
  Search,
  Copy,
  CheckCircle,
  Eye,
  Users,
  Calendar,
  DollarSign,
  TrendingUp,
  Download,
  RefreshCw,
} from "lucide-react";

function AffiliateDashboard() {
  const [copiedId, setCopiedId] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const affiliateData = {
    id: "EP-AFF-789456",
    availableBalance: 2847.5,
    pendingBalance: 456.75,
    totalEarnings: 12543.25,
    totalReferrals: 89,
  };

  const liveEvents = [
    {
      id: 1,
      name: "Fashion Designer of the Year Awards",
      category: "Fashion",
      totalPurchases: 245,
      earningsToday: 124.5,
      totalEarnings: 1245.3,
      status: "Live",
      lastUpdate: "6:03:16 PM",
    },
    {
      id: 2,
      name: "Tech Innovation Awards 2025",
      category: "Technology",
      totalPurchases: 189,
      earningsToday: 89.75,
      totalEarnings: 892.75,
      status: "Live",
      lastUpdate: "6:02:45 PM",
    },
    {
      id: 3,
      name: "Best Restaurant Awards",
      category: "Food & Dining",
      totalPurchases: 167,
      earningsToday: 67.4,
      totalEarnings: 674.4,
      status: "Live",
      lastUpdate: "6:01:22 PM",
    },
  ];

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedId(type);
    setTimeout(() => setCopiedId(""), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/logo/logo.png"
                alt="Event Pulse"
                className="w-[12rem] h-10"
              />
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                <span className="text-green-800 font-medium">CD</span>
              </div>
              <span className="text-gray-700 font-medium">Clifford Donkor</span>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-2">
                Welcome Back 👋, Clifford
              </h1>
              <p className="text-gray-600">
                Affiliate Dashboard | Real-time Earnings
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Visibility: Active
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <button className="bg-blue-600 cursor-pointer text-white px-4 md:px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm md:text-base">
                  REQUEST WITHDRAWAL
                </button>
                <button className="border cursor-pointer border-gray-300 px-4 md:px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm md:text-base">
                  VIEW MATERIALS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-[#dacaef] p-6 rounded-2xl ">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl">
                <DollarSign />
              </span>
              <span className="text-xs uppercase tracking-wider opacity-80">
                Available Balance
              </span>
            </div>
            <div className="text-3xl font-bold mb-2">
              ${affiliateData.availableBalance.toLocaleString()}
            </div>
            <div className="text-sm opacity-80 underline cursor-pointer">
              Withdraw now
            </div>
          </div>

          <div className="bg-[#b1daee] p-6 rounded-2xl ">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl">
                <Users />
              </span>
              <span className="text-xs uppercase tracking-wider opacity-80">
                Total Referrals
              </span>
            </div>
            <div className="text-3xl font-bold mb-2">
              {affiliateData.totalReferrals}
            </div>
            <div className="text-sm opacity-80 underline cursor-pointer">
              See details
            </div>
          </div>

          <div className="bg-[#d0efb3] p-6 rounded-2xl ">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl">
                <TrendingUp />
              </span>
              <span className="text-xs uppercase tracking-wider opacity-80">
                Total Earnings
              </span>
            </div>
            <div className="text-3xl font-bold mb-2">
              ${affiliateData.totalEarnings.toLocaleString()}
            </div>
            <div className="text-sm opacity-80 underline cursor-pointer">
              See details
            </div>
          </div>

          <div className="bg-[#f0cdc7] p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl">
                <Calendar />
              </span>
              <span className="text-xs uppercase tracking-wider opacity-80">
                Pending Balance
              </span>
            </div>
            <div className="text-3xl font-bold mb-2">
              ${affiliateData.pendingBalance.toLocaleString()}
            </div>
            <div className="text-sm opacity-80 underline cursor-pointer">
              See details
            </div>
          </div>
        </div>

        {/* Affiliate Info */}
        <div className="bg-white rounded-2xl p-6 mb-8 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Your Affiliate Information
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Affiliate ID
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={affiliateData.id}
                  readOnly
                  className="flex-1 p-3 border border-gray-300 rounded-lg bg-gray-50 font-mono"
                />
                <button
                  onClick={() => copyToClipboard(affiliateData.id, "id")}
                  className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {copiedId === "id" ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Referral Link
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={`https://event-pulse.com/ref/${affiliateData.id}`}
                  readOnly
                  className="flex-1 p-3 border border-gray-300 rounded-lg bg-gray-50"
                />
                <button
                  onClick={() =>
                    copyToClipboard(
                      `https://event-pulse.com/ref/${affiliateData.id}`,
                      "link"
                    )
                  }
                  className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {copiedId === "link" ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Live Events Section */}
        <div className="bg-white rounded-2xl border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                Live Events - Real-time Earnings
              </h2>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-600 font-medium">
                    Live
                  </span>
                  <RefreshCw className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Find Event"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Categories</option>
                <option value="Fashion">Fashion</option>
                <option value="Technology">Technology</option>
                <option value="Food & Dining">Food & Dining</option>
              </select>
            </div>
          </div>

          <div className="p-6">
            {selectedCategory &&
            liveEvents.filter((event) => event.category === selectedCategory)
              .length === 0 ? (
              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No events in selected category
                </h3>
                <p className="text-gray-600">
                  Try selecting a different category or view all events.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">
                        Event Name
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">
                        Total Purchases
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">
                        Today's Earnings
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">
                        Total Earnings
                      </th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-700">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {liveEvents
                      .filter(
                        (event) =>
                          !selectedCategory ||
                          event.category === selectedCategory
                      )
                      .map((event) => (
                        <tr
                          key={event.id}
                          className="border-b border-gray-100 hover:bg-gray-50"
                        >
                          <td className="py-4 px-4">
                            <div>
                              <div className="font-semibold text-gray-900">
                                {event.name}
                              </div>
                              <div className="text-sm text-gray-600">
                                {event.category}
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-blue-600">
                                {event.totalPurchases}
                              </span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="font-semibold text-green-600">
                              +${event.earningsToday}
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="font-semibold text-gray-900">
                              ${event.totalEarnings}
                            </div>
                          </td>
                          <td className="py-4 px-4 text-right">
                            <button className="text-blue-600 hover:text-blue-800 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                              <Eye className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
            <p className="text-sm text-gray-600">
              Last updated: 5/24/2025, 6:03:16 PM (Updates automatically)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AffiliateDashboard;
