import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6 flex flex-col items-center">
      {/* Header */}
      <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">
        The Time Value of Money (TVM)
      </h1>

      {/* Definition */}
      <div className="w-full max-w-3xl mb-6 shadow-lg bg-white rounded-lg">
        <div className="p-6 text-center">
          <h2 className="text-xl font-semibold mb-3 text-blue-800">Definition</h2>
          <p className="text-gray-700">
            Money today is worth more than the same amount in the future because it
            can be invested and earn returns. In other words, a dollar now can grow,
            but a dollar tomorrow stays the same (and may even lose value due to
            inflation).
          </p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
            alt="Clock and money"
            className="w-20 h-20 mx-auto mt-4"
          />
        </div>
      </div>

      {/* Why money today > future */}
      <div className="w-full max-w-3xl mb-6 shadow-lg bg-white rounded-lg">
        <div className="p-6 text-center">
          <h2 className="text-xl font-semibold mb-3 text-blue-800">
            Why is money today worth more?
          </h2>
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div>
              <p className="text-gray-700">
                $100 today can be invested to earn interest, turning into more in
                the future. If you wait to get $100 in the future, it will not grow
                and might even lose value due to inflation.
              </p>
            </div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/833/833524.png"
              alt="Inflation illustration"
              className="w-32 h-32 mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Real-world example */}
      <div className="w-full max-w-3xl mb-6 shadow-lg bg-white rounded-lg">
        <div className="p-6 text-center">
          <h2 className="text-xl font-semibold mb-3 text-blue-800">
            Real-World Example
          </h2>
          <div className="flex flex-col md:flex-row justify-around items-center gap-6">
            <div className="bg-green-50 p-4 rounded-2xl shadow-md">
              <p className="font-bold text-green-700">$1,000 Today</p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png"
                alt="Money bag"
                className="w-20 h-20 mx-auto"
              />
              <p className="text-gray-600">Invested at 5% annual interest</p>
            </div>

            <ArrowRight className="text-blue-600 w-10 h-10" />

            <div className="bg-blue-50 p-4 rounded-2xl shadow-md">
              <p className="font-bold text-blue-700">≈ $1,276 in 5 Years</p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2910/2910768.png"
                alt="Growth chart"
                className="w-20 h-20 mx-auto"
              />
              <p className="text-gray-600">Future Value after compounding</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 text-center">
        <p className="text-sm font-bold text-gray-600">
          Wadih Daher | FIN 5063.OL1
        </p>
      </div>
    </div>
  );
}
