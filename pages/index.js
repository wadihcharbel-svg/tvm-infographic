import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen p-6 flex flex-col items-center">
      {/* Header */}
      <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
        The Time Value of Money (TVM)
      </h1>

      {/* Definition */}
      <div className="w-full max-w-4xl mb-8 shadow-lg bg-white rounded-xl border border-gray-100">
        <div className="p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Definition</h2>
          <p className="text-gray-700 leading-relaxed">
            Money today is worth more than the same amount in the future because it
            can be invested and earn returns. In other words, a dollar now can grow,
            but a dollar tomorrow stays the same (and may even lose value due to
            inflation).
          </p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
            alt="Clock and money"
            className="w-24 h-24 mx-auto mt-6"
          />
        </div>
      </div>

      {/* Why money today > future */}
      <div className="w-full max-w-4xl mb-8 shadow-lg bg-white rounded-xl border border-gray-100">
        <div className="p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
            Why is money today worth more?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <p className="text-gray-700 leading-relaxed">
              $100 today can be invested to earn interest, turning into more in the
              future. If you wait to get $100 in the future, it will not grow and
              might even lose value due to inflation.
            </p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/833/833524.png"
              alt="Inflation illustration"
              className="w-36 h-36 mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Real-world example */}
      <div className="w-full max-w-4xl mb-8 shadow-lg bg-white rounded-xl border border-gray-100">
        <div className="p-8 text-center">
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">
            Real-World Example
          </h2>
          <div className="flex flex-col md:flex-row justify-around items-center gap-8">
            <div className="bg-green-50 p-6 rounded-2xl shadow-md w-64">
              <p className="font-bold text-green-700 text-lg">$1,000 Today</p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png"
                alt="Money bag"
                className="w-20 h-20 mx-auto my-4"
              />
              <p className="text-gray-600">Invested at 5% annual interest</p>
            </div>

            <ArrowRight className="text-blue-600 w-12 h-12" />

            <div className="bg-blue-50 p-6 rounded-2xl shadow-md w-64">
              <p className="font-bold text-blue-700 text-lg">≈ $1,276 in 5 Years</p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2910/2910768.png"
                alt="Growth chart"
                className="w-20 h-20 mx-auto my-4"
              />
              <p className="text-gray-600">Future Value after compounding</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-sm font-bold text-gray-600">
          Wadih Daher | FIN 5063.OL1
        </p>
        <p className="text-xs text-gray-400 mt-2">
          References: Investopedia, Federal Reserve, Course Materials
        </p>
      </div>
    </div>
  );
}
