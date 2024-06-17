"use client";

import React from "react";
import { useChat } from "@ai-sdk/react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Markdown from "react-markdown";
import { useUser } from "@clerk/nextjs";

const ChatTest = () => {
  const { user } = useUser(); // Fetch user data from Clerk
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat();

  return (
    <>
      <div className="min-h-[90vh] w-full flex flex-col items-center justify-center p-4">
        <h1 className="text-center text-3xl font-bold mb-6">
          Personal Finance Assistant
        </h1>
        <div className="mx-auto w-full">
          <ScrollArea className="mb-4 h-[600px] rounded-md border p-4">
            {messages.map((m) => (
              <div key={m.id} className="mr-6 whitespace-pre-wrap md:mr-12">
                {m.role === "user" && (
                  <div className="mb-6 flex gap-3">
                    <Avatar>
                      <AvatarImage src={user?.profileImageUrl || ""} />
                      <AvatarFallback className="text-sm">You</AvatarFallback>
                    </Avatar>
                    <div className="mt-1.5">
                      <p className="text-zinc-500 font-semibold">
                        {user?.fullName}
                      </p>
                      <div className="mt-1.5 text-sm">
                        <Markdown>{m.content}</Markdown>
                      </div>
                    </div>
                  </div>
                )}

                {m.role === "assistant" && (
                  <div className="mb-6 flex gap-3">
                    <Avatar>
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-emerald-500 text-white">
                        AI
                      </AvatarFallback>
                    </Avatar>
                    <div className="mt-1.5 w-full">
                      <div className="flex justify-between">
                        <p className="text-zinc-500 font-semibold">Bot</p>
                      </div>
                      <div className="mt-2 text-sm">
                        <Markdown>{m.content}</Markdown>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </ScrollArea>
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
        </div>
      </div>
    </>
  );
};

export default ChatTest;