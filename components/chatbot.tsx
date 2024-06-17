"use client";

import React, { ChangeEvent, FormEvent } from "react";
import { useChat } from "@ai-sdk/react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Markdown from "react-markdown";
import { useUser } from "@clerk/nextjs";

interface PromptCardProps {
  prompt: string;
  onClick: (prompt: string) => void;
}

interface ExamplePromptsProps {
  onClick: (prompt: string) => void;
}

const PromptCard: React.FC<PromptCardProps> = ({ prompt, onClick }) => (
  <div
    className="cursor-pointer border p-2 rounded-md hover:bg-gray-200"
    onClick={() => onClick(prompt)}
  >
    {prompt}
  </div>
);

const ExamplePrompts: React.FC<ExamplePromptsProps> = ({ onClick }) => {
  const prompts = [
    "Tell me a joke",
    "What's the weather like today?",
    "Give me a recipe for pasta",
    "How do I improve my productivity?",
  ];

  return (
    <div className="mt-4">
      {prompts.map((prompt, index) => (
        <PromptCard key={index} prompt={prompt} onClick={onClick} />
      ))}
    </div>
  );
};

const ChatTest: React.FC = () => {
  const { user } = useUser(); // Fetch user data from Clerk
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();

  const handlePromptClick = (prompt: string) => {
    handleInputChange({ target: { value: prompt } } as ChangeEvent<HTMLInputElement>);
    handleSubmit(); 
  };

  const onSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault(); 
    handleSubmit(event);
  };

  return (
    <div className="min-h-[90vh] w-full flex flex-col items-center justify-center p-4">
      <h1 className="text-center text-3xl font-bold mb-6">
        Personal Finance Assistant
      </h1>
      <div className="mx-auto w-full">
        <ScrollArea className="mb-4 h-[600px] rounded-md border p-4">
          {/* Greeting and Example Prompts */}
          <div className="mb-4">
            <p className="text-lg font-semibold">
              Hello, {user?.firstName || "User"}!
            </p>
            <ExamplePrompts onClick={handlePromptClick} />
          </div>

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
        <form onSubmit={onSubmit} className="flex space-x-4">
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
  );
};

export default ChatTest;
