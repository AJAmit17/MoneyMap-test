// components/FeaturesSection.tsx

import { Activity, BarChart2, CheckCircle } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { AccordionDemo } from "./faq";

const features = [
  {
    icon: Activity,
    title: "Activity tracking",
    description:
      "For anyone to start building their real estate portfolio, no matter the size of your wallet.",
    colSpan: "col-span-1", // Can be adjusted based on the desired layout
  },
  {
    icon: BarChart2,
    title: "Transaction charts",
    description:
      "For anyone to start building their real estate portfolio, no matter the size of your wallet.",
    colSpan: "col-span-2", // Example of a card spanning two columns
  },
  {
    icon: CheckCircle,
    title: "Productivity tasks",
    description:
      "For anyone to start building their real estate portfolio, no matter the size of your wallet.",
    colSpan: "col-span-1", // Adjust as needed
  },
  {
    icon: Activity,
    title: "Activity tracking",
    description:
      "For anyone to start building their real estate portfolio, no matter the size of your wallet.",
    colSpan: "col-span-2", // Example of a card spanning two columns
  },
  {
    icon: BarChart2,
    title: "Transaction charts",
    description:
      "For anyone to start building their real estate portfolio, no matter the size of your wallet.",
    colSpan: "col-span-1", // Adjust as needed
  },
  {
    icon: CheckCircle,
    title: "Productivity tasks",
    description:
      "For anyone to start building their real estate portfolio, no matter the size of your wallet.",
    colSpan: "col-span-1", // Adjust as needed
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center">
          Features at a glance
        </h2>
        <p className="mt-4 text-lg text-center text-gray-400">
          Unlock the power of AI to transform your customer care into a dynamic,
          efficient, and personalized experience that sets your e-commerce
          business apart.
        </p>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={`text-center ${feature.colSpan}`}>
              <CardHeader className="flex flex-col items-center">
                <div className="p-4 rounded-full bg-gray-700">
                  <feature.icon className="w-8 h-8 text-teal-400" />
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-gray-400">{feature.description}</p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="link"
                  className="text-teal-400 hover:text-teal-600"
                >
                  Learn more →
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
