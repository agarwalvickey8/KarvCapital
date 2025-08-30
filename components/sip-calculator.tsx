"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

interface SIPResult {
  totalInvested: number
  estimatedValue: number
  wealthGain: number
}

export function SIPCalculator() {
  const [monthlyAmount, setMonthlyAmount] = useState("5000")
  const [expectedReturn, setExpectedReturn] = useState("12")
  const [tenure, setTenure] = useState("10")
  const [result, setResult] = useState<SIPResult>({ totalInvested: 0, estimatedValue: 0, wealthGain: 0 })

  // SIP calculation formula: FV = P × [((1 + r)^n - 1) / r] × (1 + r)
  // Where P = monthly investment, r = monthly rate, n = number of months
  const calculateSIP = () => {
    const monthlyAmountNum = Number.parseFloat(monthlyAmount) || 0
    const expectedReturnNum = Number.parseFloat(expectedReturn) || 0
    const tenureNum = Number.parseFloat(tenure) || 0

    if (monthlyAmountNum <= 0 || expectedReturnNum <= 0 || tenureNum <= 0) {
      setResult({ totalInvested: 0, estimatedValue: 0, wealthGain: 0 })
      return
    }

    const monthlyRate = expectedReturnNum / 100 / 12 // Convert annual rate to monthly
    const totalMonths = tenureNum * 12
    const totalInvested = monthlyAmountNum * totalMonths

    // Future Value calculation
    const futureValue =
      monthlyAmountNum * (((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate))

    const wealthGain = futureValue - totalInvested

    setResult({
      totalInvested,
      estimatedValue: Math.round(futureValue),
      wealthGain: Math.round(wealthGain),
    })
  }

  useEffect(() => {
    calculateSIP()
  }, [monthlyAmount, expectedReturn, tenure])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const presetAmounts = [5000, 10000, 25000]

  const openWhatsApp = () => {
    window.open("https://wa.me/917597376926", "_blank")
  }

  return (
    <section id="sip-calculator" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">SIP Calculator</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculate the potential returns on your Systematic Investment Plan and plan your wealth creation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Calculator Inputs */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-primary text-lg md:text-xl">Investment Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6">
              {/* Quick Presets */}
              <div>
                <Label className="text-sm font-medium mb-3 block">Quick Presets</Label>
                <div className="flex flex-wrap gap-2">
                  {presetAmounts.map((amount) => (
                    <Button
                      key={amount}
                      variant={Number.parseFloat(monthlyAmount) === amount ? "default" : "outline"}
                      size="sm"
                      onClick={() => setMonthlyAmount(amount.toString())}
                      className={`text-xs md:text-sm ${
                        Number.parseFloat(monthlyAmount) === amount ? "bg-secondary hover:bg-secondary/90" : ""
                      }`}
                    >
                      ₹{amount.toLocaleString()}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Monthly SIP Amount */}
              <div className="space-y-2 md:space-y-3">
                <Label htmlFor="monthly-amount" className="text-sm md:text-base">
                  Monthly SIP Amount (₹)
                </Label>
                <Input
                  id="monthly-amount"
                  type="number"
                  value={monthlyAmount}
                  onChange={(e) => setMonthlyAmount(e.target.value)}
                  min="500"
                  max="100000"
                  step="500"
                  placeholder="Enter amount"
                  className="text-sm md:text-base"
                />
                <Slider
                  value={[Number.parseFloat(monthlyAmount) || 0]}
                  onValueChange={(value) => setMonthlyAmount((value[0] ?? 0).toString())}
                  max={50000}
                  min={500}
                  step={500}
                  className="w-full"
                />
              </div>

              {/* Expected Return */}
              <div className="space-y-2 md:space-y-3">
                <Label htmlFor="expected-return" className="text-sm md:text-base">
                  Expected Annual Return (%)
                </Label>
                <Input
                  id="expected-return"
                  type="number"
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(e.target.value)}
                  min="1"
                  max="30"
                  step="0.5"
                  placeholder="Enter return %"
                  className="text-sm md:text-base"
                />
                <Slider
                  value={[Number.parseFloat(expectedReturn) || 0]}
                  onValueChange={(value) => setExpectedReturn((value[0] ?? 0).toString())}
                  max={25}
                  min={1}
                  step={0.5}
                  className="w-full"
                />
              </div>

              {/* Investment Tenure */}
              <div className="space-y-2 md:space-y-3">
                <Label htmlFor="tenure" className="text-sm md:text-base">
                  Investment Tenure (Years)
                </Label>
                <Input
                  id="tenure"
                  type="number"
                  value={tenure}
                  onChange={(e) => setTenure(e.target.value)}
                  min="1"
                  max="40"
                  step="1"
                  placeholder="Enter years"
                  className="text-sm md:text-base"
                />
                <Slider
                  value={[Number.parseFloat(tenure) || 0]}
                  onValueChange={(value) => setTenure((value[0] ?? 0).toString())}
                  max={30}
                  min={1}
                  step={1}
                  className="w-full"
                />
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-primary text-lg md:text-xl">Investment Results</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
                <div className="bg-muted/50 p-3 md:p-4 rounded-lg">
                  <p className="text-xs md:text-sm text-muted-foreground mb-1">Total Invested</p>
                  <p className="text-lg md:text-2xl font-bold text-foreground">
                    {formatCurrency(result.totalInvested)}
                  </p>
                </div>

                <div className="bg-secondary/10 p-3 md:p-4 rounded-lg">
                  <p className="text-xs md:text-sm text-muted-foreground mb-1">Estimated Value</p>
                  <p className="text-lg md:text-2xl font-bold text-secondary">
                    {formatCurrency(result.estimatedValue)}
                  </p>
                </div>

                <div className="bg-primary/10 p-3 md:p-4 rounded-lg">
                  <p className="text-xs md:text-sm text-muted-foreground mb-1">Wealth Gain</p>
                  <p className="text-lg md:text-2xl font-bold text-primary">{formatCurrency(result.wealthGain)}</p>
                </div>
              </div>

              {/* Simple Visual Chart */}
              <div className="mt-4 md:mt-6">
                <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Investment Breakdown</h4>
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs md:text-sm">Invested Amount</span>
                    <span className="text-xs md:text-sm font-medium">
                      {((result.totalInvested / result.estimatedValue) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-muted-foreground h-2 rounded-full"
                      style={{ width: `${(result.totalInvested / result.estimatedValue) * 100}%` }}
                    ></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs md:text-sm">Returns Generated</span>
                    <span className="text-xs md:text-sm font-medium">
                      {((result.wealthGain / result.estimatedValue) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-secondary h-2 rounded-full"
                      style={{ width: `${(result.wealthGain / result.estimatedValue) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="pt-3 md:pt-4 border-t">
                <p className="text-xs text-muted-foreground">
                  *This is an estimate based on the assumed rate of return. Actual returns may vary depending on market
                  conditions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto" onClick={openWhatsApp}>
            Start Your SIP Journey
          </Button>
        </div>
      </div>
    </section>
  )
}
