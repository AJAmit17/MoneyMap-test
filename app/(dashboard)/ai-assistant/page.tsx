import Chat from '@/components/chatbot'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "MoneyMap | Personal Finance AI-Assistant",
  description: "",
};

const Page = () => {
  return (
    <div>
      <Chat />
    </div>
  )
}

export default Page

