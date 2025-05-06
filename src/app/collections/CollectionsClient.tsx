"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import CollectionTable, {
  Collection,
} from "@/components/TokenTable/TokenTable";

const API_URL = "https://api-apechain.reservoir.tools/collections/v7";
const API_KEY = "demo-api-key";

export default function CollectionsClient() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(API_URL, {
        headers: {
          accept: "*/*",
          "x-api-key": API_KEY,
        },
        params: {
          limit: 10,
        },
      })
      .then((res) => {
        const items = res.data.collections || [];
        const mapped: Collection[] = items.map((item: any) => ({
          image: item.image || "/collections/placeholder.png",
          name: item.name || "-",
          floorPrice: item.floorAsk?.price?.amount?.native || 0,
          topBid: item.topBid?.price?.amount?.native || 0,
          change1D: item.volumeChange1d || 0,
          change7D: item.volumeChange7d || 0,
          volume1D: item.volume?.["1day"] || 0,
          volume7D: item.volume?.["7day"] || 0,
          totalVolume: item.volume?.["allTime"] || 0,
          owners: item.ownerCount ? `${item.ownerCount}` : "-",
          supply: item.supply || 0,
        }));
        setCollections(mapped);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch collections");
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#181A20] text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-[#23262F] border-b border-[#23262F]">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="bg-green-500 rounded-full w-7 h-7 flex items-center justify-center text-black font-extrabold">
              GMI
            </span>
            <span>Collections</span>
          </div>
          <div className="hidden md:flex gap-6 ml-8 text-sm font-medium">
            <span className="text-green-400 border-b-2 border-green-400 pb-1 cursor-pointer">
              Collections
            </span>
            <span className="hover:text-green-400 cursor-pointer">
              Portfolio
            </span>
            <span className="hover:text-green-400 cursor-pointer">
              Activity
            </span>
            <span className="hover:text-green-400 cursor-pointer">Airdrop</span>
            <span className="hover:text-green-400 cursor-pointer">
              Launchpad
            </span>
            <span className="hover:text-green-400 cursor-pointer">
              Resources
            </span>
          </div>
        </div>
        <button className="bg-green-500 text-black font-semibold px-5 py-2 rounded-lg hover:bg-green-400 transition">
          Connect Wallet
        </button>
      </nav>

      {/* Filter Bar */}
      <div className="flex items-center justify-between px-8 py-3 bg-[#23262F] border-b border-[#23262F]">
        <div className="flex gap-2 text-sm font-medium">
          <button className="px-4 py-1 rounded bg-[#181A20] text-green-400 border border-green-400">
            Collections
          </button>
          <button className="px-4 py-1 rounded hover:bg-[#23262F]">
            Favorites
          </button>
          <button className="px-4 py-1 rounded hover:bg-[#23262F]">
            Liquidity Bonds
          </button>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-1 rounded bg-[#181A20] border border-[#23262F] text-white placeholder-gray-400 focus:outline-none"
            style={{ minWidth: 180 }}
          />
          <button className="bg-[#23262F] p-2 rounded hover:bg-[#181A20]">
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="px-8 py-6">
        {loading ? (
          <div className="text-lg">Loading...</div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <CollectionTable collections={collections} />
        )}
      </div>
    </div>
  );
}
