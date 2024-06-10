const { GoogleGenerativeAI } = require("@google/generative-ai");
import ReactMarkdown from 'react-markdown';

const AiAssistant = async () => {
  const transaction = await fetch(`http://localhost:3000/api/ai-manager`).then(
    (res) => res.json()
  );

  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = `You are a financial assistant. Based on the following transaction details, provide a summary for the user:
  Income Transactions:
  1. ID: 1, Amount: $1000, Description: Salary, Date: June 1, 2024, Category: Salary, Icon: 💼
  ... (include all income transactions here)
  Expense Transactions:
  1. ID: 2, Amount: $200, Description: Groceries, Date: June 2, 2024, Category: Food, Icon: 🍎
  ... (include all expense transactions here)
  Provide a detailed summary including:
  - Total income and total expenses
  - The balance (total income - total expenses)
  - Any patterns or notable observations
  - Suggestions for managing finances better based on the transactions
  - A friendly closing remark
  Here's the data:

  ${transaction}
  `;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  return (
    <div className="max-w-2xl mx-auto text-center p-5">
      <div>
        <h1>
          This is Ai generated Finance Suggestions based on your past trasaction
          history
        </h1>
      </div>
      <div className="mt-5 p-4 border rounded text-left">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
};

export default AiAssistant;
