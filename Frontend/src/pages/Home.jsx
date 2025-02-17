import { Card } from "../components/Card.jsx";
import { CardContent } from "../components/CardContent.jsx";
import { Button } from "../components/Button.jsx";
import { useState } from "react";

export default function FinPalDashboard() {
  const [expenses] = useState([
    { name: "Rent", icon: "🏡", amount: 15000 },
    { name: "Electricity", icon: "⚡", amount: 2000 },
    { name: "Groceries", icon: "🍽️🍻", amount: 5000 },
  ]);

  return (
    <div className="w-full min-h-screen bg-gray-100">
     

      {/* Hero Section */}
      <section className="p-10 bg-blue-500 text-white text-center">
        <h2 className="text-3xl font-semibold">
          Gen financial services by leveraging open banking, digital payments, and blockchain to create accessible and transparent solutions
        </h2>
        <Button className="mt-6 bg-white text-blue-500">Get Started &gt;</Button>
      </section>

      {/* Features */}
      <section className="p-10">
        <h2 className="text-2xl font-bold text-gray-700">What we do?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {[
            { title: "Provide Knowledge", desc: "Empowers families with financial advice" },
            { title: "Safe Investments", desc: "Helps families choose secure investments" },
            { title: "Trust and Safety", desc: "Uses blockchain for secure transactions" },
            { title: "AI driven tools", desc: "Smart debt management tool" },
          ].map((feature, index) => (
            <Card key={index} className="p-4 text-center">
              <CardContent>
                <h3 className="font-bold">{feature.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Latest News */}
      <section className="p-10 bg-gray-200">
        <h2 className="text-2xl font-bold">Latest News Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          {[
            { title: "ITC - The Mega Demerger!", desc: "ITC moves to demerge hotel business." },
            { title: "Rental Income Tax-Free?", desc: "New tax rules for rental income." },
            { title: "The Story Behind TW2", desc: "A finance expert shares experiences." },
            { title: "Best Investments for Kids", desc: "Planning ahead for your child’s future." },
          ].map((news, index) => (
            <Card key={index} className="p-4">
              <CardContent>
                <h3 className="font-bold">{news.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{news.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Expense Tracker */}
      <section className="p-10">
        <h2 className="text-2xl font-bold">Expense Tracker</h2>
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <div className="flex flex-col space-y-2">
            {expenses.map((expense, index) => (
              <Card key={index} className="p-4 flex justify-between border border-green-500">
                <span>{expense.icon} {expense.name}</span>
                <span className="font-bold">₹{expense.amount.toLocaleString()}</span>
              </Card>
            ))}
          </div>
          <Card className="p-6 border border-blue-500 text-center">
            <CardContent>
              <h3 className="font-bold">Your Account</h3>
              <p className="text-xl font-bold">₹35,000</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
}
