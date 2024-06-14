"use client";

import React from "react";
import { useChat } from "@ai-sdk/react";
import Head from "next/head";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Markdown from "react-markdown";

const Chat: React.FC = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <>
      <Head>
        <title>Chat Interface</title>
        <meta
          name="description"
          content="A chat interface built with ShadCN, Next.js, TypeScript, and Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Persoanl Finance AI Assistant
          </h2>
          <div className="space-y-4 overflow-y-auto h-64 mb-4 p-2 border rounded-md">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`p-2 rounded-md ${
                  m.role === "user"
                    ? "bg-blue-100 text-blue-900"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                <strong>{m.role === "user" ? "User" : "AI"}:</strong>
                <Markdown>{m.content}</Markdown>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex space-x-4">
            <Input
              value={input}
              placeholder="Say something..."
              onChange={handleInputChange}
              className="flex-1"
            />
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Send
            </Button>
          </form>
        </Card>
      </div>
    </>
  );
};

export default Chat;
